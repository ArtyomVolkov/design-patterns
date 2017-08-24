interface Clone {
  clone(): Object;
}

class Human implements Clone {
  private name: string;
  private age: number;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  clone() {
      return new Human(this.name, this.age);
  }

  sayHello() {
    console.log(`Hello my name is ${this.name} age: ${this.age}`);
  }
}

let artem = new Human('Artem', 28);
let artemClone1 = artem.clone();
let artemClone2 = artem.clone();

artem.sayHello();
artemClone1.sayHello();
artemClone2.sayHello();