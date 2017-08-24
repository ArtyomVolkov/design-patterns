/*
 * Implementation of Decorator pattern: (Delegate + Composite)
 */
interface PrinterInterface {
  print(): void;
}

class Printer implements PrinterInterface {
  private value: String;

  constructor(value: String) {
    this.value = value;
  }

  print(): void {
    console.log('print value: ' + this.value);
  }
}

abstract class Decorator implements PrinterInterface {
  private component: PrinterInterface;

  constructor(pi: PrinterInterface) {
    this.component = pi;
  }

  print(): void {
    this.component.print();
  }
}

class SquareBracketsDecorator extends Decorator {
  constructor(component: PrinterInterface) {
    super(component);
  }

  public print(): void {
    console.log('[');
    super.print();
    console.log(']');
  }
}

class QuotesDecorator extends Decorator {
  constructor(component: PrinterInterface) {
    super(component);
  }

  public print(): void {
    // decorate new functional
    console.log('"');
    // Pattern Delegation
    super.print();
    // decorate new functional
    console.log('"');
  }
}

let str = new SquareBracketsDecorator(
  new QuotesDecorator(
    new Printer('JavaScript')
  )
);
str.print();