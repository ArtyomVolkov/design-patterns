interface Observer {
  handleEvent(temperature: number, presser: number);
}

interface Observed {
  addObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers();
}

class MeteoStation implements Observed {
  private temperature: number;
  private presser: number;
  private observers: Array<Observer> = [];

  setData(t: number, p: number) {
    this.temperature = t;
    this.presser = p;
    this.notifyObservers();
  }

  addObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver() {
    // easy implementation just remove last element
    this.observers.pop();
  }

  notifyObservers() {
    this.observers.map((observer: Observer) => {
      observer.handleEvent(this.temperature, this.presser);
    });
  }
}

class WeatherForecastObserver implements Observer {
  handleEvent(temperature: number, presser: number) {
    console.log(`Weather forecast the temperature is ${temperature} presser: ${presser}`);
  }
}

class NotificationObserver implements  Observer {
  handleEvent(temperature: number, presser: number) {
    console.log(`Notification: temperature is ${temperature} presser: ${presser}`);
  }
}

let ms = new MeteoStation();
ms.addObserver(new WeatherForecastObserver());
ms.addObserver(new NotificationObserver());

// set data
ms.setData(19, 743); // two messages (WeatherForecastObserver and NotificationObserver)
ms.removeObserver();
ms.setData(24, 760); // one message from (WeatherForecastObserver)