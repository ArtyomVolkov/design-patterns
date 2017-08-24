var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Printer = (function () {
    function Printer(value) {
        this.value = value;
    }
    Printer.prototype.print = function () {
        console.log('print value: ' + this.value);
    };
    return Printer;
}());
var Decorator = (function () {
    function Decorator(pi) {
        this.component = pi;
    }
    Decorator.prototype.print = function () {
        this.component.print();
    };
    return Decorator;
}());
var SquareBracketsDecorator = (function (_super) {
    __extends(SquareBracketsDecorator, _super);
    function SquareBracketsDecorator(component) {
        _super.call(this, component);
    }
    SquareBracketsDecorator.prototype.print = function () {
        console.log('[');
        _super.prototype.print.call(this);
        console.log(']');
    };
    return SquareBracketsDecorator;
}(Decorator));
var QuotesDecorator = (function (_super) {
    __extends(QuotesDecorator, _super);
    function QuotesDecorator(component) {
        _super.call(this, component);
    }
    QuotesDecorator.prototype.print = function () {
        // decorate new functional
        console.log('"');
        // Pattern Delegation
        _super.prototype.print.call(this);
        // decorate new functional
        console.log('"');
    };
    return QuotesDecorator;
}(Decorator));
var str = new SquareBracketsDecorator(new QuotesDecorator(new Printer('JavaScript')));
str.print();
