interface IPrototype {
  clone: () => IPrototype;
}

class Product implements IPrototype {
  private name: string;
  private number: number;
  private price: {
    real: number;
    final: number;
  };

  constructor(properties: {
    name: string,
    number: number,
    realPrice: number,
    finalPrice: number;
  }) {
    const { name, number, realPrice, finalPrice } = properties;

    this.name = name;
    this.number = number;
    this.price.real = realPrice;
    this.price.final = finalPrice;
  }

  public clone() {
    return new Product({
      name: this.name,
      number: this.number,
      realPrice: this.price.real,
      finalPrice: this.price.final
    });
  }

  public getName(): string {
    return this.name;
  }

  public getNumberOfProduct(): number {
    return this.number;
  }

  public getFinalPrice(): number {
    return this.price.final;
  }

  public setName(newName: string): void {
    if (newName.trim() === "") {
      throw new Error("Invalid product name!");
    } else {
      this.name = newName;
    }
  }

  public setNumberOfProdcut(numberOfProdcut: number): void {
    if (numberOfProdcut <= 0) {
      this.number = 0;
    } else {
      this.number = numberOfProdcut;
    }
  }

  public setNewFinalPrice(newFinalPrice: number): void {
    if (newFinalPrice <= 0) {
      this.price.final = 0;
    } else {
      this.price.final = newFinalPrice;
    }
  }
}


const productOne = new Product({
  name: "Xiaomi Redmi Note 8 Pro",
  number: 100,
  realPrice: 5000000,
  finalPrice: 7000000,
});

const productTwo = productOne.clone();

/*
  productOne isn't equal to productTwo (productOne !== productTwo)
  but their fields value are exactly the same!
*/
