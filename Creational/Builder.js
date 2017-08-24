var TRANSMISSION;
(function (TRANSMISSION) {
    TRANSMISSION[TRANSMISSION["MANUAL"] = 0] = "MANUAL";
    TRANSMISSION[TRANSMISSION["AUTO"] = 1] = "AUTO"; // 1
})(TRANSMISSION || (TRANSMISSION = {}));
var Car = (function () {
    function Car() {
    }
    Car.prototype.setMake = function (value) {
        this.make = value;
    };
    Car.prototype.setSpeed = function (value) {
        this.speed = value;
    };
    Car.prototype.setTransmission = function (value) {
        this.transmission = value;
    };
    return Car;
}());
var CarBuilder = (function () {
    function CarBuilder() {
        this.make = 'Default';
        this.transmission = TRANSMISSION.AUTO;
        this.maxSpeed = 120;
    }
    CarBuilder.prototype.buildMake = function (m) {
        this.make = m;
        return this;
    };
    CarBuilder.prototype.buildMaxSpeed = function (s) {
        this.maxSpeed = s;
        return this;
    };
    CarBuilder.prototype.buildTransmission = function (t) {
        this.transmission = t;
        return this;
    };
    CarBuilder.prototype.carBuild = function () {
        var car = new Car();
        car.setMake(this.make);
        car.setSpeed(this.maxSpeed);
        car.setTransmission(this.transmission);
        return car;
    };
    return CarBuilder;
}());
var mercedes = new CarBuilder()
    .buildMake('Mercedes')
    .buildTransmission(TRANSMISSION.AUTO)
    .buildMaxSpeed(250)
    .carBuild();
var bmw = new CarBuilder()
    .buildMake('BMW')
    .buildTransmission(TRANSMISSION.MANUAL)
    .buildMaxSpeed(280)
    .carBuild();
console.log(mercedes);
console.log(bmw);
