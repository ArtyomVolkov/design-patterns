interface Image {
  display();
}

class RealImage implements Image {
  private file: string;

  constructor(file) {
    this.file = file;
    this.load();
  }

  load() {
    console.log('is loading file: ' + this.file);
  }

  display() {
    console.log('display file: ' + this.file);
  }
}

class ProxyImage implements Image {
  private file: string;
  private realImage: RealImage;

  constructor(file: string) {
    this.file = file;
  }

  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.file);
    }

    this.realImage.display();
  }
}

const image = new ProxyImage('C:/users/.../car.jpg');
image.display();
console.log('***');
new ProxyImage('C:/users/.../test.jpg');
