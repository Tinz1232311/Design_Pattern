class Car {
  display() {
    throw new Error("Method 'display()' must be implemented.");
  }
}

class Sedan extends Car {
  display() {
    console.log("This is a Sedan car.");
  }
}

class SUV extends Car {
  display() {
    console.log("This is an SUV car.");
  }
}

class CarFactory {
  createCar() {
    throw new Error("Method 'createCar()' must be implemented.");
  }
}

class SedanFactory extends CarFactory {
  createCar() {
    return new Sedan();
  }
}

class SUVFactory extends CarFactory {
  createCar() {
    return new SUV();
  }
}

function main() {
  let factory;

  factory = new SedanFactory();
  let myCar = factory.createCar();
  myCar.display();

  factory = new SUVFactory();
  myCar = factory.createCar();
  myCar.display();
}

main();
