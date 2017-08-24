var DigitalWatch = (function () {
    function DigitalWatch() {
    }
    DigitalWatch.prototype.showTime = function () {
        console.log('Digital watch');
    };
    return DigitalWatch;
}());
var RomeWatch = (function () {
    function RomeWatch() {
    }
    RomeWatch.prototype.showTime = function () {
        console.log('Rome watch');
    };
    return RomeWatch;
}());
var DigitalMaker = (function () {
    function DigitalMaker() {
    }
    DigitalMaker.prototype.createWatch = function () {
        return new DigitalWatch();
    };
    return DigitalMaker;
}());
var RomeMaker = (function () {
    function RomeMaker() {
    }
    RomeMaker.prototype.createWatch = function () {
        return new RomeWatch();
    };
    return RomeMaker;
}());
// create instances
var romeMaker = new RomeMaker();
var rome1 = romeMaker.createWatch();
var rome2 = romeMaker.createWatch();
var digitalMaker = new DigitalMaker();
var digital1 = digitalMaker.createWatch();
var digital2 = digitalMaker.createWatch();
rome1.showTime();
rome2.showTime();
digital1.showTime();
digital2.showTime();
