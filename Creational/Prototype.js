var Human = (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    Human.prototype.clone = function () {
        return new Human(this.name, this.age);
    };
    Human.prototype.sayHello = function () {
        console.log("Hello my name is " + this.name + " age: " + this.age);
    };
    return Human;
}());
var artem = new Human('Artem', 28);
var artemClone1 = artem.clone();
var artemClone2 = artem.clone();
artem.sayHello();
artemClone1.sayHello();
artemClone2.sayHello();
