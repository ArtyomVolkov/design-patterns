var MeteoStation = (function () {
    function MeteoStation() {
        this.observers = [];
    }
    MeteoStation.prototype.setData = function (t, p) {
        this.temperature = t;
        this.presser = p;
        this.notifyObservers();
    };
    MeteoStation.prototype.addObserver = function (o) {
        this.observers.push(o);
    };
    MeteoStation.prototype.removeObserver = function () {
        // easy implementation just remove last element
        this.observers.pop();
    };
    MeteoStation.prototype.notifyObservers = function () {
        var _this = this;
        this.observers.map(function (observer) {
            observer.handleEvent(_this.temperature, _this.presser);
        });
    };
    return MeteoStation;
}());
var WeatherForecastObserver = (function () {
    function WeatherForecastObserver() {
    }
    WeatherForecastObserver.prototype.handleEvent = function (temperature, presser) {
        console.log("Weather forecast the temperature is " + temperature + " presser: " + presser);
    };
    return WeatherForecastObserver;
}());
var NotificationObserver = (function () {
    function NotificationObserver() {
    }
    NotificationObserver.prototype.handleEvent = function (temperature, presser) {
        console.log("Notification: temperature is " + temperature + " presser: " + presser);
    };
    return NotificationObserver;
}());
var ms = new MeteoStation();
ms.addObserver(new WeatherForecastObserver());
ms.addObserver(new NotificationObserver());
// set data
ms.setData(19, 743); // two messages (WeatherForecastObserver and NotificationObserver)
ms.removeObserver();
ms.setData(24, 760); // one message from (WeatherForecastObserver)
