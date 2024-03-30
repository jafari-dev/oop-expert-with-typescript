### Prototype

> Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

<img src="https://user-images.githubusercontent.com/37804060/165857765-643633b0-72eb-43ed-9f0c-9dca50c0939b.png"/>

```typescript
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
    return new Product(this.name, this.price, this.warranty);
  }
}

const productOne = new Product("Laptop", 2500000, new Date(2050));

const productTwo = productOne.clone();

// productOne !== productTwo but their properties are the same
```
