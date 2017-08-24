interface Shape {
  draw();
}

// Flyweight Circle
class Circle implements Shape {
  private radius: number = 10;

  draw() {
    console.log('draw circle with radius ' + this.radius);
  }
}

// Flyweight Square
class Square implements Shape {
  private size: number = 30;

  draw() {
    console.log(`draw square ${this.size} * ${this.size}`);
  }
}

// Flyweight Point
class Point implements Shape {
  private x: number = 14;
  private y: number = 27;

  draw() {
    console.log(`draw point with coordinates X: ${this.x} Y: ${this.y}`);
  }
}
// for example we need to draw 3 circles, 2 squares, 4 points.
// we need to use only one instance of each class, NO MORE!
// for that let's create ShapeFactory

class ShapeFactory {
  private shapes: any = {};

  getShape(name: string) {
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
  }
}
// draw 3 circles, 2 squares, 4 points
let shapeFactory = new ShapeFactory();

let shapes = [];
shapes.push(shapeFactory.getShape('circle'));
shapes.push(shapeFactory.getShape('circle'));
shapes.push(shapeFactory.getShape('circle'));

shapes.push(shapeFactory.getShape('square'));
shapes.push(shapeFactory.getShape('square'));

shapes.push(shapeFactory.getShape('point'));
shapes.push(shapeFactory.getShape('point'));
shapes.push(shapeFactory.getShape('point'));
shapes.push(shapeFactory.getShape('point'));

shapes.map((shape) => {
  shape.draw();
});