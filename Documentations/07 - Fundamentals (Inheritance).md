### Inheritance

> Inheritance in OOP is a concept where a new class (called a subclass or derived class) is created based on an existing class (called a superclass or base class). The subclass inherits attributes and behaviors (methods) from its superclass, allowing it to reuse and extend the functionality of the superclass.

Using the `Shape` class example:

```typescript
// Base class representing a generic shape
class Shape {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // Method to describe the shape
  describe(): void {
    console.log(`This is a shape at position (${this.x}, ${this.y}).`);
  }
}
```

Here, `Shape` is the base class. It has properties like x and y, along with a method describe() to provide information about the shape.

```typescript
// Derived class representing a circle
class Circle extends Shape {
  radius: number;

  constructor(x: number, y: number, radius: number) {
    super(x, y); // Call the constructor of the superclass (Shape)
    this.radius = radius;
  }

  // Method to calculate area of the circle
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

In this example, `Circle` is the subclass, and it extends the `Shape` class. By using the extends keyword, Circle inherits all properties and methods from Shape. Additionally, Circle has its own property `radius` and method `area()` specific to circles.

By utilizing inheritance, you can create a hierarchy of classes where subclasses inherit and extend the functionality of their superclass, promoting code reusability and maintaining a logical structure in your programs.
