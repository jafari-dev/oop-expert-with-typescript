interface IPrototype {
  clone: () => IPrototype;
}

class Product implements IPrototype {
  private name: string;
  private price: number;
  private warranty: Date | null;

  constructor(name: string, price: number, warranty: Date | null) {
    this.name = name;
    this.price = price;
    this.warranty = warranty;
  }

  // Assume we implement methods, getters and setters all here

  public clone() {
    // `warranty` is a mutable object, so it must be copied too. Handing the same
    // `Date` instance to the clone would let one product mutate the other.
    return new Product(this.name, this.price, this.warranty == null ? null : new Date(this.warranty));
  }
}

const productOne = new Product("Laptop", 2500000, new Date("2050-01-01"));

const productTwo = productOne.clone();

// productOne !== productTwo but their properties are the same
