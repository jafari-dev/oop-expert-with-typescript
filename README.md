# Object Oriented Programming Expert With TypeScript

This repository is a complete guide and tutorial for the principles and techniques of object-oriented programming. It can be a reference for all interested in programming and software developers. You will find simple and practical examples in all sections to make the concepts easier to understand.

<p>
  <img src="https://user-images.githubusercontent.com/37804060/151722505-c16e7705-4533-48af-aebb-9d22f15c9ed0.png"/>
</p>

## Table of Contents

1. [Fundamentals](#fundamentals)
   - [What's Object-Oriented-Programming?](#whats-object-oriented-programming)
   - [Abstraction](#abstraction)
   - [Encapsulation](#encapsulation)
   - [Inheritance](#inheritance)
   - [Polymorphism](#polymorphism)
2. [SOLID Principles](#solid-principles)
   - [What's SOLID Meaning?](#whats-solid-meaning)
   - [Single Responsibility (SRP)](#1-single-responsibility-srp)
   - [Open/Closed (OCP)](#2-openclosed-ocp)
   - [Liskov Substitution (LSP)](#3-liskov-substitution-lsp)
   - [Interface Segregation (ISP)](#4-interface-segregation-isp)
   - [Dependency Inversion (DIP)](#5-dependency-inversion-dip)
3. [Design Patterns](#design-patterns)
   - [What's a Design Pattern?](#whats-a-design-pattern)
   - [Creational Design Patterns](#creational)
     - [Abstract Factory](#abstract-factory)
     - [Builder](#builder)
     - [Factory Method (Virtual Constructor)](#factory-method)
     - [Prototype (Clone)](#prototype)
     - [Singleton](#singleton)
   - [Structural Design Patterns](#structural)
     - [Adapter (Wrapper)](#adapter-wrapper)
     - [Bridge](#bridge)
     - [Composite (Object Tree)](#composite-object-tree)
     - [Decorator (Wrapper)](#decorator-wrapper)
     - [Facade](#facade)
     - [Flyweight (Cache)](#flyweight-cache)
     - [Proxy](#proxy)
   - [Behavioral Design Patterns](#behavioral)
     - [Chain of Responsibility (CoR)](#chain-of-responsibility)
     - [Command (Action or Transaction)](#command)
     - [Iterator](#iterator)
     - [Mediator (Intermediary or Controller)](#mediator)
     - [Memento (Snapshot)](#memento)
     - [Observer (Event-Subscriber or Listener)](#observer)
     - [State](#state)
     - [Strategy](#strategy)
     - [Template Method](#template-method)
     - [Visitor](#visitor)

## Fundamentals

### What's Object-oriented-programming?

Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods). There are 6 pillars of OOP, includes:

1. <strong>Class</strong>
2. <strong>Objects</strong>
3. <strong>Data Abstraction</strong>
4. <strong>Encapsulation</strong>
5. <strong>Inheritance</strong>
6. <strong>Polymorphism</strong>

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Class

> A class is a blueprint for creating objects (instances) that share common properties and behaviors. It serves as a template or a prototype from which objects are created. A class encapsulates data for the object and methods to operate on that data. It provides a way to structure and organize code in a modular and reusable manner.

Here's a simple explanation of the concept of a class in TypeScript along with a real-world example:

```typescript
class Task {
  // Properties
  private id: number;
  private title: string;
  private description: string;
  private dueDate: Date;
  private completed: boolean;

  // Constructor
  constructor(taskInfo: {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
  }) {
    this.id = taskInfo.id;
    this.title = taskInfo.title;
    this.description = taskInfo.description;
    this.dueDate = taskInfo.dueDate;
    this.completed = false; // By default, the task is not completed
  }

  // Method to mark the task as completed
  public complete() {
    this.completed = true;
  }

  // Method to mark the task as incomplete
  public incomplete() {
    this.completed = false;
  }
}

// Create instances of the Task class using an object as a parameter
const task1 = new Task({
  id: 1,
  title: "Finish report",
  description: "Write the quarterly report for the team meeting",
  dueDate: new Date("2120-03-25"),
});

const task2 = new Task({
  id: 2,
  title: "Buy groceries",
  description: "Buy milk, eggs, and bread",
  dueDate: new Date("2077-11-17"),
});

// Mark task1 as completed
task1.complete();

// Output task details
console.log(task1);
console.log(task2);
```

In this example:

We define a Task class with properties `id`, `title`, `description`, `dueDate`, and `completed`, along with methods `complete()` and `incomplete()` to mark tasks as completed or incomplete.
We create instances of the Task class (task1 and task2) representing different tasks.
We demonstrate marking task1 as completed and then output the details of both tasks.

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Objects

> It is a basic unit of Object-Oriented Programming and represents the real-life entities. An Object is an instance of a Class. When a class is defined, no memory is allocated but when it is instantiated (i.e. an object is created) memory is allocated. An object has an identity, state, and behavior. Each object contains data and code to manipulate the data. Objects can interact without having to know details of each other’s data or code, it is sufficient to know the type of message accepted and type of response returned by the objects.

For example <strong>Dog</strong> is a real-life object, which has some characteristics like color, breed, bark, sleep, and eats.

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Abstraction

> Abstraction is a concept that allows you to focus on the essential attributes and behaviors of an object while hiding the unnecessary details. It involves representing only the relevant characteristics of an object, and hiding the complex implementation details from the user.

Let's break this down with a simple example:

Consider a car. When you think about a car, you don't need to know every intricate detail of how the engine works or how the transmission shifts gears in order to drive it. Instead, you focus on the essential features like steering, accelerating, and braking.

In OOP, abstraction allows us to create a `Car` class that encapsulates these essential features without revealing the internal complexities. Here's a basic implementation:

```typescript
class Car {
  private brand: string;
  private model: string;
  private speed: number;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
  }

  public accelerate(): void {
    this.speed += 10;
  }

  public brake(): void {
    this.speed -= 10;
  }

  public getSpeed(): number {
    return this.speed;
  }
}

// Create a car object
const myCar: Car = new Car("Toyota", "Camry");

// Accelerate the car
myCar.accelerate();

// Get the current speed
console.log("Current speed:", myCar.getSpeed());
```

In this example:

We have a `Car` class with attributes like `make`, `model`, and `speed`.
We define methods like `accelerate` and `brake` to manipulate the speed of the car.
The user interacts with the car object through these methods without needing to know how they are implemented internally.
So, in essence, abstraction allows us to think about objects at a higher level of understanding, focusing on what they do rather than how they do it.

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Encapsulation

> Encapsulation is defined as the wrapping up of data under a single unit. It is the mechanism that binds together code and the data it manipulates. In Encapsulation, the variables or data of a class are hidden from any other class and can be accessed only through any member function of their class in which they are declared. As in encapsulation, the data in a class is hidden from other classes, so it is also known as data-hiding.

Let's consider a simple example where encapsulation is used to control access to sensitive data. Imagine we have a `User` class representing users in a system, and we want to ensure that the user's password is not directly accessible from outside the class.

```typescript
class User {
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  // Method to authenticate user
  authenticate(enteredPassword: string): boolean {
    return enteredPassword === this.password;
  }

  // Method to change password
  changePassword(newPassword: string): void {
    this.password = newPassword;
  }
}

// Create a user
const user = new User("Ahmad Jafari", "abcd1234");

console.log(user.authenticate("12345678")); // Output: false
console.log(user.authenticate("abcd1234")); // Output: true

user.changePassword("Ab1234!?");

console.log(user.authenticate("abcd1234")); // Output: false
console.log(user.authenticate("Ab1234!?")); // Output: true
```

In this example:

- We define a `User` class with a private property `password`.
- `password` property is encapsulated and cannot be directly accessed.
- We provide public methods `authenticate()` to verify the user's password and `changePassword()` to allow users to change their password.
- Accessing or modifying the password property directly from outside the class is not allowed due to its private access modifier.
- Encapsulation ensures that sensitive data (password) is hidden and can only be accessed or modified through controlled methods, enhancing security and preventing unauthorized access or manipulation.

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

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

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

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

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

## SOLID Principles

### What's SOLID meaning?

In software engineering, SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable. The principles are a subset of many principles promoted by American software engineer and instructor Robert C. Martin, first introduced in his 2000 paper Design Principles and Design Patterns.

<img src="https://user-images.githubusercontent.com/37804060/153056635-449fedb7-fcbf-4cb1-b642-5798d29b9c6f.jpg"/>

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### 1. Single Responsibility (SRP)

> There should never be more than one reason for a class to change. Every class should have only one responsibility.

<img src="https://user-images.githubusercontent.com/37804060/153056645-8760ddfa-01f3-4c21-9279-ab6ba669a0fc.jpg"/>

:x: Before following SRP:

```typescript
class Profile {
  constructor(
    private email: string,
    private bio: string,
    private theme: "LIGHT" | "DARK",
    private preferredLanguage: string,
    private receiveNotifications: boolean
  ) {}

  public updateEmail(email: string): void {
    this.email = email;
  }

  public updateBio(bio: string): void {
    this.bio = bio;
  }

  public toggleTheme(): void {
    if (this.theme === "LIGHT") {
      this.theme = "DARK";
    } else {
      this.theme = "LIGHT";
    }
  }

  public updatePreferredLanguage(language: string): void {
    this.preferredLanguage = language;
  }

  public toggleNotifications(): void {
    this.receiveNotifications = !this.receiveNotifications;
  }
}
```

:heavy_check_mark: After following SRP:

```typescript
class Settings {
  constructor(
    private theme: "LIGHT" | "DARK",
    private preferredLanguage: string,
    private receiveNotifications: boolean
  ) {}

  public toggleTheme(): void {
    if (this.theme === "LIGHT") {
      this.theme = "DARK";
    } else {
      this.theme = "LIGHT";
    }
  }

  public updatePreferredLanguage(language: string): void {
    this.preferredLanguage = language;
  }

  public toggleNotifications(): void {
    this.receiveNotifications = !this.receiveNotifications;
  }
}

class Profile {
  constructor(
    private email: string,
    private bio: string,
    private settings: Settings
  ) {}

  public updateEmail(email: string): void {
    this.email = email;
  }

  public updateBio(bio: string): void {
    this.bio = bio;
  }

  public getSettings(): Settings {
    return this.settings;
  }
}
```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### 2. Open/Closed (OCP)

> Software entities should be open for extension, but closed for modification.

<img src="https://user-images.githubusercontent.com/37804060/153056325-679b94dc-ea4f-4315-a682-93057845f9d5.jpg"/>

:x: Before following OCP:

```typescript
class OperatingSystem {
  getFilesExtension(os: string): string {
    if (os === "Windows") {
      return "exe";
    } else if (os === "Linux") {
      return "deb";
    } else if (os === "Macintosh") {
      return "dmg";
    } else {
      return "unknown";
    }
  }

  getCreator(os: string): string {
    if (os === "Windows") {
      return "Bill Gates";
    } else if (os === "Linux") {
      return "Linus Torvalds";
    } else if (os === "Macintosh") {
      return "Steve Jobs";
    } else {
      return "Unknown";
    }
  }

  getBornDate(os: string): number {
    if (os === "Windows") {
      return 1985;
    } else if (os === "Linux") {
      return 1991;
    } else if (os === "Macintosh") {
      return 1984;
    } else {
      return 0;
    }
  }
}
```

:heavy_check_mark: After following OCP:

```typescript
interface OperatingSystem {
  getFilesExtension: () => string;
  getCreator: () => string;
  getBornDate: () => number;
}

class Windows implements OperatingSystem {
  getFilesExtension() {
    return "exe";
  }

  getCreator() {
    return "Bill Gates";
  }

  getBornDate() {
    return 1985;
  }
}

class Linux implements OperatingSystem {
  getFilesExtension() {
    return "deb";
  }

  getCreator() {
    return "Linus Torvalds";
  }

  getBornDate() {
    return 1991;
  }
}

class Macintosh implements OperatingSystem {
  getFilesExtension() {
    return "dmg";
  }

  getCreator() {
    return "Steve Jobs";
  }

  getBornDate() {
    return 1984;
  }
}
```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### 3. Liskov Substitution (LSP)

> If `S` is a subtype of `T`, then objects of type `T` in a program may be replaced with objects of type `S` without altering any of the desirable properties of that program.

<img src="https://user-images.githubusercontent.com/37804060/153056329-914cbbba-685b-452b-9dcf-4fcf6a4faabc.jpg"/>

:x: Before following LSP:

```typescript
class Tablet {
  readBook(): void {
    // Read a book
  }

  playMovie(): void {
    // Play a movie
  }

  playCartoon(): void {
    // Play a cartoon
  }

  openBrowser(): void {
    // Open a browser
  }
}

class KidsTablet extends Tablet {
  override openBrowser(): Error {
    throw Error("Kids haven't access to the browser!");
  }

  override playMovie(): Error {
    throw Error("Kids haven't access to the movies!");
  }
}
```

:heavy_check_mark: After following LSP:

```typescript
class Tablet {
  readBook(): void {
    // Read a book
  }

  playCartoon(): void {
    // Play a cartoon
  }
}

class AdultsTablet extends Tablet {
  playMovie(): void {
    // Play a movie
  }

  openBrowser(): void {
    // Open a browser
  }
}
```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### 4. Interface Segregation (ISP)

> No code should be forced to depend on methods it does not use.

<img src="https://user-images.githubusercontent.com/37804060/153056335-7bf6d86f-da0b-4687-89fe-9ea97e2ec40e.jpg"/>

:x: Before following ISP:

```typescript
interface Ports {
  useUSB: () => void;
  useHDMI: () => void;
  usePS2: () => void;
  useVGA: () => void;
}

class PC implements Ports {
  useUSB() {
    console.log("USB port is ready for your PC!");
  }

  useHDMI() {
    console.log("HDMI port is ready for your PC!");
  }

  usePS2() {
    console.log("PS2 port is ready for your PC!");
  }

  useVGA() {
    console.log("VGA port is ready for your PC!");
  }
}

class Laptop implements Ports {
  useUSB() {
    console.log("USB port is ready for your Laptop!");
  }

  useHDMI() {
    console.log("HDMI port is ready for your Laptop!");
  }

  usePS2() {
    throw new Error("Laptop has not any PS2 port!");
  }

  useVGA() {
    throw new Error("Laptop has not any VGA port!");
  }
}
```

:heavy_check_mark: After following ISP:

```typescript
interface CommonPorts {
  useUSB: () => void;
  useHDMI: () => void;
}

interface ExtraPorts {
  usePS2: () => void;
  useVGA: () => void;
}

class PC implements CommonPorts, ExtraPorts {
  useUSB() {
    console.log("USB port is ready for your PC!");
  }

  useHDMI() {
    console.log("HDMI port is ready for your PC!");
  }

  usePS2() {
    console.log("PS2 port is ready for your PC!");
  }

  useVGA() {
    console.log("VGA port is ready for your PC!");
  }
}

class Laptop implements CommonPorts {
  useUSB() {
    console.log("USB port is ready for your Laptop!");
  }

  useHDMI() {
    console.log("HDMI port is ready for your Laptop!");
  }
}
```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### 5. Dependency Inversion (DIP)

> High-level modules should not import anything from low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.

<img src="https://user-images.githubusercontent.com/37804060/153056344-b32c3e4c-8dce-498c-8243-2aed646762f1.jpg"/>

:x: Before following DIP:

```typescript
class TelegramApi {
  start() {
    console.log("You are connected to Telegram API!");
  }

  messageTo(targetId: number, message: string) {
    console.log(message + " sent to " + targetId + " by Telegram!");
  }
}

class WhatsappApi {
  setup() {
    console.log("You are connected to Whatsapp API!");
  }

  pushMessage(message: string, targetId: number) {
    console.log(message + " sent to " + targetId + " by Whatsapp!");
  }
}

class SignalApi {
  open() {
    console.log("You are connected to Signal API!");
  }

  postMessage(params: { id: number; text: string }) {
    console.log(params.text + " sent to " + params.id + " by Signal!");
  }
}

class Messenger {
  private api: TelegramApi | WhatsappApi | SignalApi;

  constructor(api: TelegramApi | WhatsappApi | SignalApi) {
    this.api = api;
  }

  sendMessage(targetId: number, message: string) {
    if (this.api instanceof TelegramApi) {
      this.api.start();
      this.api.messageTo(targetId, message);
    } else if (this.api instanceof WhatsappApi) {
      this.api.setup();
      this.api.pushMessage(message, targetId);
    } else {
      this.api.open();
      this.api.postMessage({ id: targetId, text: message });
    }
  }
}
```

:heavy_check_mark: After following DIP:

```typescript
interface MessengerApi {
  connect: () => void;
  send: (targetId: string, message: string) => void;
}

class TelegramApi implements MessengerApi {
  connect() {
    console.log("You are connected to Telegram API!");
  }

  send(targetId: string, message: string) {
    console.log(message + " sent to " + targetId + " by Telegram!");
  }
}

class WhatsappApi implements MessengerApi {
  connect() {
    console.log("You are connected to Whatsapp API!");
  }

  send(targetId: string, message: string) {
    console.log(message + " sent to " + targetId + " by Whatsapp!");
  }
}

class SignalApi implements MessengerApi {
  connect() {
    console.log("You are connected to Signal API!");
  }

  send(targetId: string, message: string) {
    console.log(message + " sent to " + targetId + " by Signal!");
  }
}

class Messenger {
  private api: MessengerApi;

  constructor(api: MessengerApi) {
    this.api = api;
  }

  sendMessage(targetId: string, message: string) {
    this.api.connect();
    this.api.send(targetId, message);
  }
}
```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

## Design Patterns

### What's a design pattern?

In software engineering, a software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. Rather, it is a description or template for how to solve a problem that can be used in many different situations. Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system.

There are 23 design patterns that are grouped into 3 categories:

1. **Creational**: Creational patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code. Includes:

   - Abstract Factory
   - Builder
   - Factory Method
   - Prototype
   - Singleton

2. **Structural**: Structural patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient. Includes:

   - Adapter
   - Bridge
   - Composite
   - Decorator
   - Facade
   - Flyweight
   - Proxy

3. **Behavioral**: Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects. Includes:

   - Chain of Responsibility
   - Command
   - Interpreter
   - Iterator
   - Mediator
   - Memento
   - Observer
   - State
   - Strategy
   - Template Method
   - Visitor

**Tip**: The order of design patterns isn't important. So, you can choose which one to learn, regardless of the category.

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Abstract Factory

> Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

<img src="https://user-images.githubusercontent.com/37804060/165858016-40c37caf-d0c4-421c-8fca-a423d5add360.png"/>

```typescript
interface Movie {
  title: string;
  artists: string[];
  director: string;
  releaseYear: number;
  awards: string[];
  duration: number;
}

interface AudioTrack {
  title: string;
  artist: string;
  genre: string;
  mood: string;
  lyric: string;
  duration: number;
}

interface MovieApi {
  searchByTitle: (name: string) => Movie[];
  searchByActors: (actors: string[]) => Movie[];
  searchByAwards: (awards: string[]) => Movie[];
  searchByDirector: (director: string) => Movie[];
  releaseYear: (releaseYear: Date) => Movie[];
}

interface AudioApi {
  searchByTitle: (name: string) => AudioTrack[];
  searchByArtist: (artist: string) => AudioTrack[];
  searchByMood: (mood: string) => AudioTrack[];
  searchByGenre: (genre: string) => AudioTrack[];
  searchByLyric: (text: string) => AudioTrack[];
}

class NormalMovieApiProvider implements MovieApi {
  // Implementation
}

class NormalAudioApiProvider implements AudioApi {
  // Implementation
}

class PremiumMovieApiProvider implements MovieApi {
  // Implementation
}

class PremiumAudioApiProvider implements AudioApi {
  // Implementation
}

interface ApiProviderFactory {
  createMovieApiProvider: () => MovieApi;
  createAudioApiProvider: () => AudioApi;
}

class NormalApiProviderFactory implements ApiProviderFactory {
  createMovieApiProvider() {
    return new NormalMovieApiProvider();
  }

  createAudioApiProvider() {
    return new NormalAudioApiProvider();
  }
}

class PremiumApiProviderFactory implements ApiProviderFactory {
  createMovieApiProvider() {
    return new PremiumMovieApiProvider();
  }

  createAudioApiProvider() {
    return new PremiumAudioApiProvider();
  }
}
```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Builder

> Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

<img src="https://user-images.githubusercontent.com/37804060/165857814-d11b7310-ec21-4596-9d53-26fc2acf1a57.png"/>

```typescript
class Page {
  private headerParts: string[];
  private bodyParts: string[];
  private footerParts: string[];

  constructor() {
    this.headerParts = [];
    this.bodyParts = [];
    this.footerParts = [];
  }

  public setHeaderParts(...parts: string[]) {
    this.headerParts = parts;
  }

  public setBodyParts(...parts: string[]) {
    this.bodyParts = parts;
  }

  public setFooterParts(...parts: string[]) {
    this.footerParts = parts;
  }

  public getPage() {
    return {
      headerParts: this.headerParts,
      bodyParts: this.bodyParts,
      footerParts: this.footerParts,
    };
  }
}

interface PageBuilder {
  getPage: () => Page;
  buildHeader: () => void;
  buildBody: () => void;
  buildFooter: () => void;
}

class PersonalBlogPageBuilder implements PageBuilder {
  private page: Page;

  constructor() {
    this.page = new Page();
  }

  public getPage() {
    return this.page;
  }

  public buildHeader() {
    this.page.setHeaderParts("Title", "Author Information");
  }

  public buildBody() {
    this.page.setBodyParts("Recent Posts", "Favorite Posts", "Last Comments");
  }

  public buildFooter() {
    this.page.setFooterParts("CopyRights", "Author Email Address");
  }
}

class OnlineShopPageBuilder implements PageBuilder {
  private page: Page;

  constructor() {
    this.page = new Page();
  }

  public getPage() {
    return this.page;
  }

  public buildHeader() {
    this.page.setHeaderParts("Logo", "Description", "Products Category Menu");
  }

  public buildBody() {
    this.page.setBodyParts("New Products", "Daily Off", "Suggested Products");
  }

  public buildFooter() {
    this.page.setFooterParts("About Us", "Address", "Legal Certificate Link");
  }
}
```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Factory Method

> Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

<img src="https://user-images.githubusercontent.com/37804060/165857922-b719ba3a-458c-4761-8e98-f0d05a93940c.png"/>

```typescript
enum PaymentType {
  Paypal = "PAYPAL",
  Bitcoin = "BITCOIN",
  VisaCard = "VISA_CARD",
}

abstract class PaymentService {
  public abstract payMoney(amount: number): void;
}

class Paypal extends PaymentService {
  public override payMoney(amount: number) {
    console.log(`You paid ${amount} dollars by Paypal.`);
  }
}

class Bitcoin extends PaymentService {
  public override payMoney(amount: number) {
    console.log(`You paid ${amount} dollars by Bitcoin.`);
  }
}

class VisaCard extends PaymentService {
  public override payMoney(amount: number) {
    console.log(`You paid ${amount} dollars by VisaCard.`);
  }
}

abstract class PaymentFactory {
  public abstract createService(): PaymentService;
}

class PaypalFactory extends PaymentFactory {
  public override createService(): PaymentService {
    return new Paypal();
  }
}

class BitcoinFactory extends PaymentFactory {
  public override createService(): PaymentService {
    return new Bitcoin();
  }
}

class VisaCardFactory extends PaymentFactory {
  public override createService(): PaymentService {
    return new VisaCard();
  }
}

// Business logic layer:

function getPaymentFactory(paymentType: PaymentType): PaymentFactory {
  switch (paymentType) {
    case PaymentType.Paypal:
      return new PaypalFactory();
    case PaymentType.Bitcoin:
      return new BitcoinFactory();
    case PaymentType.VisaCard:
      return new VisaCardFactory();
    default:
      throw new Error("Invalid payment type.");
  }
}

const paypalService = getPaymentFactory(PaymentType.Paypal).createService();
paypalService.payMoney(100); // You paid 100 dollars by Paypal.

const bitcoinService = getPaymentFactory(PaymentType.Bitcoin).createService();
bitcoinService.payMoney(200); // You paid 200 dollars by Bitcoin.

const visaCardService = getPaymentFactory(PaymentType.VisaCard).createService();
visaCardService.payMoney(300); // You paid 300 dollars by VisaCard.
```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

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

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Singleton

> Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

<img src="https://user-images.githubusercontent.com/37804060/165857698-b1cbb582-4e8c-4cb7-af89-b11edc687626.png"/>

```typescript
class Weather {
  private static instance: Weather | null = null;

  private statusOfCities: {
    city: string;
    status: "SUNNY" | "CLOUDY" | "RAINY" | "SNOWY";
  }[];

  private constructor() {
    const data = []; // Get data from API
    this.statusOfCities = data;
  }

  public getTemperatureByCity(city: string) {
    return this.statusOfCities.find((data) => data.city === city);
  }

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new Weather();
    }

    return this.instance;
  }
}

const instanceOne = Weather.getInstance();
const instanceTwo = Weather.getInstance();
// instanceOne is equal to instanceTwo (instanceOne === instanceTwo)
```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)