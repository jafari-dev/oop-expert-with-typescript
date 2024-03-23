### Polymorphism

> Polymorphism in OOP refers to the ability of different objects to be treated as instances of a common superclass. Simply put, it allows objects of different classes to be treated as objects of a shared superclass. This enables more flexible and dynamic code, as different objects can respond to the same method call in different ways.

Let's consider a real-world example involving shapes. We'll create a program that calculates the area of different shapes such as rectangles, circles, and triangles using polymorphism.

```typescript
// Parent class
abstract class Shape {
  abstract calculateArea(): number;
}

// Rectangle class
class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

// Circle class
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Triangle class
class Triangle extends Shape {
  constructor(private base: number, private height: number) {
    super();
  }

  calculateArea(): number {
    return 0.5 * this.base * this.height;
  }
}

// Function to calculate the area of any shape
function calculateShapeArea(shape: Shape): number {
  return shape.calculateArea();
}

// Creating instances of different shapes
const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);
const triangle = new Triangle(4, 6);

// Using the function with different shape objects
console.log("Area of Rectangle:", calculateShapeArea(rectangle)); // Outputs: 50
console.log("Area of Circle:", calculateShapeArea(circle).toFixed(2)); // Outputs: 153.94
console.log("Area of Triangle:", calculateShapeArea(triangle)); // Outputs: 12
```

In this example, `Shape` is the superclass, and `Rectangle`, `Circle`, and `Triangle` are its subclasses. They all implement the `calculateArea()` method differently according to their specific shapes. When we call `calculateShapeArea()` with different shape objects, polymorphism allows the correct version of `calculateArea()` to be called based on the type of shape passed. This demonstrates how polymorphism enables code to handle different types of objects in a unified manner.
