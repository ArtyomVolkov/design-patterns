interface Watch {
  showTime();
}

class DigitalWatch implements Watch {
  showTime() {
    console.log('Digital watch');
  }
}

class RomeWatch implements Watch {
  showTime() {
    console.log('Rome watch');
  }
}

interface WatchMaker {
  // factory method
  createWatch();
}

class DigitalMaker implements WatchMaker {
  createWatch() {
    return new DigitalWatch();
  }
}

class RomeMaker implements WatchMaker {
  createWatch() {
    return new RomeWatch();
  }
}
// create instances
let romeMaker = new RomeMaker();
let rome1 = romeMaker.createWatch();
let rome2 = romeMaker.createWatch();

let digitalMaker = new DigitalMaker();
let digital1 = digitalMaker.createWatch();
let digital2 = digitalMaker.createWatch();

rome1.showTime();
rome2.showTime();
digital1.showTime();
digital2.showTime();