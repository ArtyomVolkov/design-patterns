// Flyweight Circle
var Circle = (function () {
    function Circle() {
        this.radius = 10;
    }
    Circle.prototype.draw = function () {
        console.log('draw circle with radius ' + this.radius);
    };
    return Circle;
}());
// Flyweight Square
var Square = (function () {
    function Square() {
        this.size = 30;
    }
    Square.prototype.draw = function () {
        console.log("draw square " + this.size + " * " + this.size);
    };
    return Square;
}());
// Flyweight Point
var Point = (function () {
    function Point() {
        this.x = 14;
        this.y = 27;
    }
    Point.prototype.draw = function () {
        console.log("draw point with coordinates X: " + this.x + " Y: " + this.y);
    };
    return Point;
}());
// for example we need to draw 3 circles, 2 squares, 4 points.
// we need to use only one instance of each class, NO MORE!
// for that let's create ShapeFactory
var ShapeFactory = (function () {
    function ShapeFactory() {
        this.shapes = {};
    }
    ShapeFactory.prototype.getShape = function (name) {
        if (this.shapes[name]) {
            return this.shapes[name];
        }
        switch (name) {
            case 'circle':
                this.shapes[name] = new Circle();
                break;
            case 'square':
                this.shapes[name] = new Square();
                break;
            case 'point':
                this.shapes[name] = new Point();
                break;
        }
        return this.shapes[name];
    };
    return ShapeFactory;
}());
// draw 3 circles, 2 squares, 4 points
var shapeFactory = new ShapeFactory();
var shapes = [];
shapes.push(shapeFactory.getShape('circle'));
shapes.push(shapeFactory.getShape('circle'));
shapes.push(shapeFactory.getShape('circle'));
shapes.push(shapeFactory.getShape('square'));
shapes.push(shapeFactory.getShape('square'));
shapes.push(shapeFactory.getShape('point'));
shapes.push(shapeFactory.getShape('point'));
shapes.push(shapeFactory.getShape('point'));
shapes.push(shapeFactory.getShape('point'));
shapes.map(function (shape) {
    shape.draw();
});
