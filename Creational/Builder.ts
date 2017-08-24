enum TRANSMISSION {
  MANUAL, // 0
  AUTO // 1
}

class Car {
  private speed: number;
  private make: string;
  private transmission: any;

  public setMake(value: string) {
    this.make = value;
  }
  public setSpeed(value: number) {
    this.speed = value;
  }
  public setTransmission(value: any) {
    this.transmission = value;
  }
}

class CarBuilder {
  make: string = 'Default';
  transmission: any = TRANSMISSION.AUTO;
  maxSpeed: number = 120;

  buildMake(m: string): CarBuilder {
    this.make = m;
    return this;
  }

  buildMaxSpeed(s: number): CarBuilder {
    this.maxSpeed = s;
    return this;
  }

  buildTransmission(t): CarBuilder {
    this.transmission = t;
    return this;
  }

  carBuild(): Car {
    let car = new Car();
    car.setMake(this.make);
    car.setSpeed(this.maxSpeed);
    car.setTransmission(this.transmission);

    return car;
  }
}

let mercedes = new CarBuilder()
  .buildMake('Mercedes')
  .buildTransmission(TRANSMISSION.AUTO)
  .buildMaxSpeed(250)
  .carBuild();

let bmw = new CarBuilder()
  .buildMake('BMW')
  .buildTransmission(TRANSMISSION.MANUAL)
  .buildMaxSpeed(280)
  .carBuild();

console.log(mercedes);
console.log(bmw);