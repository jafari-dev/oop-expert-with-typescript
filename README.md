# Object Oriented Programming Expert with TypeScript

This repository is a complete guide and tutorial for the principles and techniques of object-oriented programming. It can be a reference for all interested in programming and software developers. You will find simple and practical examples in all sections to make the concepts easier to understand.

<p>
  <img src="https://user-images.githubusercontent.com/37804060/151722505-c16e7705-4533-48af-aebb-9d22f15c9ed0.png"/>
</p>

## Table of Contents

1. [Fundamentals](#fundamentals)
   - [What's Object-Oriented-Programming?](#whats-object-oriented-programming)
   - [Class](#class)
   - [Objects](#objects)
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
   - Creational Design Patterns
     - [Abstract Factory](#abstract-factory)
     - [Builder](#builder)
     - [Factory Method (Virtual Constructor)](#factory-method)
     - [Prototype (Clone)](#prototype)
     - [Singleton](#singleton)
   - Structural Design Patterns
     - [Adapter (Wrapper)](#adapter-wrapper)
     - [Bridge](#bridge)
     - [Composite (Object Tree)](#composite-object-tree)
     - [Decorator (Wrapper)](#decorator-wrapper)
     - [Facade](#facade)
     - [Flyweight (Cache)](#flyweight-cache)
     - [Proxy](#proxy)
   - Behavioral Design Patterns
     - [Chain of Responsibility (CoR)](#chain-of-responsibility)
     - [Command (Action or Transaction)](#command)
     - [Interpreter](#interpreter)
     - [Iterator](#iterator)
     - [Mediator (Intermediary or Controller)](#mediator)
     - [Memento (Snapshot)](#memento)
     - [Observer (Event-Subscriber or Listener)](#observer)
     - [State](#state)
     - [Strategy](#strategy)
     - [Template Method](#template-method)
     - [Visitor](#visitor)
4. [References](#references)
5. [Contributing and Supporting](#contributing-and-supporting)

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

## Fundamentals

### What's Object-oriented-programming?

Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods). There are 6 pillars of OOP, includes:

1. *Class*
2. *Objects*
3. *Data Abstraction*
4. *Encapsulation*
5. *Inheritance*
6. *Polymorphism*

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

For example *Dog* is a real-life object, which has some characteristics like color, breed, bark, sleep, and eats.

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

#### Original Definition

> There should never be more than one reason for a class to change. Every class should have only one responsibility.

#### Simple Definition

> SRP means that each class should only be responsible for one thing. It keeps classes focused and makes code easier to understand and maintain.

<img src="https://user-images.githubusercontent.com/37804060/153056645-8760ddfa-01f3-4c21-9279-ab6ba669a0fc.jpg"/>

#### Example

Before following the Single Responsibility Principle (SRP), the `Profile` class was handling both user profile data (like email, bio, etc.) and user settings (theme and preferredLanguage). This violated SRP because a class should have only one reason to change, but here the Profile class had multiple reasons to change - if either the profile data structure or the settings structure changed.

After following SRP, the code was refactored to separate concerns. The Profile class now only deals with profile-related information such as email and bio. The settings-related functionality has been moved to a new Settings class. This change improves maintainability and makes the codebase more flexible. Now, if there's a need to update how settings are handled, it only affects the Settings class, keeping the Profile class untouched. Additionally, it enhances code readability and makes it easier to understand the purpose of each class.

:x: Before following SRP:

```typescript
class Profile {
  private email: string;
  private bio: string;
  private theme: "LIGHT" | "DARK";
  private preferredLanguage: string;

  constructor(params: { email: string; bio: string; theme: "LIGHT" | "DARK"; preferredLanguage: string }) {
    const { email, bio, theme, preferredLanguage } = params;

    this.email = email;
    this.bio = bio;
    this.theme = theme;
    this.preferredLanguage = preferredLanguage;
  }

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

  public getProfile() {
    return {
      email: this.email,
      bio: this.bio,
      theme: this.theme,
      preferredLanguage: this.preferredLanguage,
    };
  }
}

```

:heavy_check_mark: After following SRP:

```typescript
class Settings {
  constructor(
    protected theme: "LIGHT" | "DARK",
    protected preferredLanguage: string,
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

  public getSettings() {
    return { theme: this.theme, preferredLanguage: this.preferredLanguage };
  }
}

class Profile {
  constructor(
    protected email: string,
    protected bio: string,
    protected settings: Settings,
  ) {}

  public updateEmail(email: string): void {
    this.email = email;
  }

  public updateBio(bio: string): void {
    this.bio = bio;
  }

  public getProfile() {
    return { email: this.email, bio: this.bio, settings: this.settings.getSettings() };
  }
}

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### 2. Open/Closed (OCP)

#### Original Definition

> Software entities should be open for extension, but closed for modification.

#### Simple Definition

> The Open/Closed Principle means that once you write a piece of code, you should be able to add new functionality to it without changing the existing code. It promotes extending the behavior of software rather than altering it, ensuring that changes don't break existing functionality.

<img src="https://user-images.githubusercontent.com/37804060/153056325-679b94dc-ea4f-4315-a682-93057845f9d5.jpg"/>

#### Example

Before OCP implementation, the `QueryGenerator` class directly handles different types of databases, such as _MySQL_, _Redis_, and _Neo4j_, within its methods. This violates the Open/Closed Principle because if you want to add support for a new database, you would need to modify the `QueryGenerator` class by adding a new case to each switch statement. This could lead to the class becoming bloated and tightly coupled to specific database implementations, making it harder to maintain and extend.

After implementing OCP, the code is refactored to use interfaces and separate classes for each database type. Now, the QueryGenerator interface defines common methods `getReadingQuery` and `getWritingQuery`, while individual database classes (`MySql`, `Redis`, and `Neo4j`) implement these methods according to their specific behavior.

This approach adheres to the Open/Closed Principle because the `QueryGenerator` interface is open for extension, allowing you to add support for new databases by creating new classes that implement the interface, without modifying existing code. Additionally, it's closed for modification because changes to existing database classes won't affect the `QueryGenerator` interface or other database implementations. This results in a more flexible, maintainable, and scalable design.

:x: Before following OCP:

```typescript
type DB = "MySQL" | "Redis" | "Neo4j";

class QueryGenerator {
  getReadingQuery(database: DB): string {
    switch (database) {
      case "MySQL":
        return "SELECT * FROM MySQL";
      case "Redis":
        return "SCAN 0";
      case "Neo4j":
        return "MATCH (n) RETURN n";
      default:
        return "Unknown";
    }
  }

  getWritingQuery(database: DB, data: string): string {
    switch (database) {
      case "MySQL":
        return `INSERT INTO MySQL VALUES (${data})`;
      case "Redis":
        return `SET ${data}`;
      case "Neo4j":
        return `CREATE (${data})`;
      default:
        return "Unknown";
    }
  }
}

```

:heavy_check_mark: After following OCP:

```typescript
interface QueryGenerator {
  getReadingQuery: () => string;
  getWritingQuery: (data: string) => string;
}

class MySql implements QueryGenerator {
  getReadingQuery() {
    return "SELECT * FROM MySQL";
  }

  getWritingQuery(data: string) {
    return `INSERT INTO MySQL VALUES (${data})`;
  }
}

class Redis implements QueryGenerator {
  getReadingQuery() {
    return "SCAN 0";
  }

  getWritingQuery(data: string) {
    return `SET ${data}`;
  }
}

class Neo4j implements QueryGenerator {
  getReadingQuery() {
    return "MATCH (n) RETURN n";
  }

  getWritingQuery(data: string) {
    return `CREATE (${data})`;
  }
}

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### 3. Liskov Substitution (LSP)

#### Original Definition

> If `S` is a subtype of `T`, then objects of type `T` in a program may be replaced with objects of type `S` without altering any of the desirable properties of that program.

#### Simple Definition

> The LSP says that if you have a class, you should be able to use any of its subclasses interchangeably without breaking the program.

<img src="https://user-images.githubusercontent.com/37804060/153056329-914cbbba-685b-452b-9dcf-4fcf6a4faabc.jpg"/>

#### Example

In the initial example, we have an `ImageProcessor` class responsible for various image processing operations such as **compression**, **enhancing size**, **removing background**, and **enhancing quality with AI**. There's also a `LimitedImageProcessor` class that extends `ImageProcessor`, but it overrides the `removeBackground` and `enhanceQualityWithAI` methods to throw errors indicating that these features are only available in the premium version.

This violates the Liskov Substitution Principle because substituting an instance of `LimitedImageProcessor` for an instance of `ImageProcessor` could lead to unexpected errors if code relies on those overridden methods.

To adhere to the LSP, we refactor the classes. We create a `PremiumImageProcessor` class that extends `ImageProcessor` and implements the `removeBackground` and `enhanceQualityWithAI` methods. This way, both classes share a common interface and substituting an instance of `PremiumImageProcessor` for an instance of `ImageProcessor` won't break the program's correctness.

In the refactored version, `ImageProcessor` is now focused on basic image processing operations like compression and enhancing size, while `PremiumImageProcessor` extends it to include premium features like removing background and enhancing quality with AI. This separation allows for better code organization and adherence to the Liskov Substitution Principle.

:x: Before following LSP:

```typescript
class AudioProcessor {
  constructor(protected audioFile: File) {}

  compress() {
    // Compress the size of the audio
  }

  changeTempo() {
    // Increase the size of the audio
  }

  separateMusicAndVocal() {
    // Remove the background of the audio
  }

  enhanceQualityWithAI() {
    // Enhance the quality of the audio with AI
  }
}

class LimitedAudioProcessor extends AudioProcessor {
  constructor(audioFile: File) {
    super(audioFile);
  }

  override separateMusicAndVocal(): Error {
    throw Error("You have to buy the premium version to access this feature!");
  }

  override enhanceQualityWithAI(): Error {
    throw Error("You have to buy the premium version to access this feature!");
  }
}

```

:heavy_check_mark: After following LSP:

```typescript
class AudioProcessor {
  constructor(protected audioFile: File) {}

  compress() {
    // Compress the size of the audio
  }

  changeTempo() {
    // Increase the size of the audio
  }
}

class PremiumAudioProcessor extends AudioProcessor {
  constructor(audioFile: File) {
    super(audioFile);
  }

  separateMusicAndVocal() {
    // Remove the background of the audio
  }

  enhanceQualityWithAI() {
    // Enhance the quality of the audio with AI
  }
}

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### 4. Interface Segregation (ISP)

#### Original Definition

> No code should be forced to depend on methods it does not use.

#### Simple Definition

> The ISP means that clients should not be forced to implement methods they don't use. It's like saying, "Don't make people take things they don't need."

<img src="https://user-images.githubusercontent.com/37804060/153056335-7bf6d86f-da0b-4687-89fe-9ea97e2ec40e.jpg"/>

#### Example

In the initial implementation before applying the ISP, the `VPNConnection` interface encompasses methods for various VPN protocols, including `useL2TP`, `useOpenVPN`, `useV2Ray`, and `useShadowsocks`. However, not all classes implementing this interface require all these methods. For instance, the `InternalNetwork` class only utilizes `useL2TP` and `useOpenVPN`, yet it is forced to implement all methods defined in the `VPNConnection` interface, leading to unnecessary dependencies and potential errors if methods are called inappropriately.

To address this issue, the Interface Segregation Principle suggests breaking down the monolithic interface into smaller, more focused interfaces. In the improved implementation, two interfaces are introduced: `BaseVPNConnection` and `ExtraVPNConnection`. The `BaseVPNConnection` interface contains methods common to both external and internal networks (`useL2TP` and `useOpenVPN`), while the `ExtraVPNConnection` interface includes methods specific to external networks (`useV2Ray` and `useShadowsocks`).

With this segregation, the `InternalNetwork` class now only needs to implement the methods relevant to its functionality, adhering to the principle of "clients should not be forced to depend on interfaces they do not use." This restructuring enhances code clarity, reduces unnecessary dependencies, and makes the system more maintainable and flexible. Additionally, it mitigates the risk of errors by ensuring that classes only expose the methods they actually support, promoting better encapsulation and separation of concerns.

:x: Before following ISP:

```typescript
interface VPNConnection {
  useL2TP: () => void;
  useOpenVPN: () => void;
  useV2Ray: () => void;
  useShadowsocks: () => void;
}

class ExternalNetwork implements VPNConnection {
  useL2TP() {
    console.log("L2TP VPN is ready for your external network!");
  }

  useOpenVPN() {
    console.log("OpenVPN is ready for your external network!");
  }

  useV2Ray() {
    console.log("V2Ray is ready for your external network!");
  }

  useShadowsocks() {
    console.log("Shadowsocks is ready for your external network!");
  }
}

class InternalNetwork implements VPNConnection {
  useL2TP() {
    console.log("L2TP VPN is ready for your internal network!");
  }

  useOpenVPN() {
    console.log("OpenVPN is ready for your internal network!");
  }

  useV2Ray() {
    throw Error("V2Ray is not available for your internal network!");
  }

  useShadowsocks() {
    throw Error("Shadowsocks is not available for your internal network!");
  }
}

```

:heavy_check_mark: After following ISP:

```typescript
interface BaseVPNConnection {
  useL2TP: () => void;
  useOpenVPN: () => void;
}

interface ExtraVPNConnection {
  useV2Ray: () => void;
  useShadowsocks: () => void;
}

class ExternalNetwork implements BaseVPNConnection, ExtraVPNConnection {
  useL2TP() {
    console.log("L2TP VPN is ready for your external network!");
  }

  useOpenVPN() {
    console.log("OpenVPN is ready for your external network!");
  }

  useV2Ray() {
    console.log("V2Ray is ready for your external network!");
  }

  useShadowsocks() {
    console.log("Shadowsocks is ready for your external network!");
  }
}

class InternalNetwork implements BaseVPNConnection {
  useL2TP() {
    console.log("L2TP VPN is ready for your internal network!");
  }

  useOpenVPN() {
    console.log("OpenVPN is ready for your internal network!");
  }
}

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### 5. Dependency Inversion (DIP)

#### Original Definition

> High-level modules should not import anything from low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.

#### Simple Definition

> DIP means that instead of high-level modules depending directly on low-level modules, both should depend on abstractions. This way, changes in low-level modules don't directly affect high-level ones, promoting flexible and maintainable code.

<img src="https://user-images.githubusercontent.com/37804060/153056344-b32c3e4c-8dce-498c-8243-2aed646762f1.jpg"/>

#### Example

In the original code, the `Messenger` class directly depends on specific implementations of messaging APIs like `TelegramApi`, `WhatsappApi`, and `SignalApi`. This tightly couples Messenger with these concrete implementations, making it difficult to change or extend the system without modifying the Messenger class itself. This violates the Dependency Inversion Principle (DIP), which suggests that high-level modules should not depend on low-level modules but rather on abstractions.

To adhere to DIP, we introduce an interface called `MessengerApi`, which defines the methods that the Messenger class requires from a messaging API. Then, each messaging API class (`TelegramApi`, `WhatsappApi` and `SignalApi`) implements this interface, providing their own implementation of the connect and send methods.

By doing this, we decouple the Messenger class from specific messaging API implementations. Now, Messenger depends on the MessengerApi interface rather than concrete implementations. This allows us to easily switch between different messaging APIs or add new ones without modifying the Messenger class. Additionally, it promotes code reusability and simplifies testing, as we can now easily mock the MessengerApi interface for testing purposes. Overall, following DIP enhances the flexibility, maintainability, and testability of the codebase.

:x: Before following DIP:

```typescript
class TelegramApi {
  start() {
    console.log("You are connected to Telegram API!");
  }

  messageTo(targetId: number, message: string) {
    console.log(`${message} sent to ${targetId} by Telegram!`);
  }
}

class WhatsappApi {
  setup() {
    console.log("You are connected to Whatsapp API!");
  }

  pushMessage(message: string, targetId: number) {
    console.log(`${message} sent to ${targetId} by Whatsapp!`);
  }
}

class SignalApi {
  open() {
    console.log("You are connected to Signal API!");
  }

  postMessage(params: { id: number; text: string }) {
    console.log(`${params.text} sent to ${params.id} by Signal!`);
  }
}

class Messenger {
  constructor(private api: TelegramApi | WhatsappApi | SignalApi) {}

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
    console.log(`${message} sent to ${targetId} by Telegram!`);
  }
}

class WhatsappApi implements MessengerApi {
  connect() {
    console.log("You are connected to Whatsapp API!");
  }

  send(targetId: string, message: string) {
    console.log(`${message} sent to ${targetId} by Whatsapp!`);
  }
}

class SignalApi implements MessengerApi {
  connect() {
    console.log("You are connected to Signal API!");
  }

  send(targetId: string, message: string) {
    console.log(`${message} sent to ${targetId} by Signal!`);
  }
}

class Messenger {
  constructor(private api: MessengerApi) {}

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

> Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes. This pattern is particularly useful when a system needs to be independent of the way its products are created, composed, and represented. It also helps in enforcing that a set of products follow a consistent theme across different platforms.

<img src="https://user-images.githubusercontent.com/37804060/165858016-40c37caf-d0c4-421c-8fca-a423d5add360.png"/>

#### Example Context

In this example, we demonstrate the Abstract Factory pattern through a media API system where different types of API providers (`Normal` and `Premium`) can be generated for movies and audio tracks. Each provider offers multiple ways to search within its respective domain.

- **Interfaces Defined:**
  - `Movie`: Represents the structure of a movie object.
  - `AudioTrack`: Represents the structure of an audio track object.
  - `MovieApi` and `AudioApi`: Define the set of operations available for interacting with movies and audio tracks, respectively.

- **Concrete Implementations:**
  - `NormalMovieApiProvider` and `NormalAudioApiProvider`: Implement the `MovieApi` and `AudioApi` interfaces with standard search operations.
  - `PremiumMovieApiProvider` and `PremiumAudioApiProvider`: Similar to the normal providers but designed to represent premium service capabilities.

- **Factory Interfaces and Implementations:**
  - `ApiProviderFactory`: Defines the methods for creating movie and audio API providers.
  - `NormalApiProviderFactory` and `PremiumApiProviderFactory`: Implementations of the factory interface that create instances of normal and premium API providers.

##### Purpose

This pattern allows for the dynamic creation of `MovieApi` and `AudioApi` services that adhere to whether the user has access to normal or premium features. The flexibility provided by the Abstract Factory pattern makes it easier to extend and maintain the system, as new provider types can be added with minimal changes to existing code.

##### How It Works

- A client first decides on the type of factory to use (`NormalApiProviderFactory` or `PremiumApiProviderFactory`).
- The factory then creates instances of `MovieApi` and `AudioApi` providers based on the chosen type.
- From there, the client can utilize these providers to perform various search operations tailored to their specific needs.

By abstracting the creation process, the code is cleaner and adheres to SOLID principles, making it a flexible solution for varying user tiers in media applications.

```typescript
interface Movie {
  title: string;
  artists: Array<string>;
  director: string;
  releaseYear: number;
  awards: Array<string>;
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
  searchByTitle: (name: string) => Array<Movie>;
  searchByActors: (actors: Array<string>) => Array<Movie>;
  searchByAwards: (awards: Array<string>) => Array<Movie>;
  searchByDirector: (director: string) => Array<Movie>;
  releaseYear: (releaseYear: Date) => Array<Movie>;
}

interface AudioApi {
  searchByTitle: (name: string) => Array<AudioTrack>;
  searchByArtist: (artist: string) => Array<AudioTrack>;
  searchByMood: (mood: string) => Array<AudioTrack>;
  searchByGenre: (genre: string) => Array<AudioTrack>;
  searchByLyric: (text: string) => Array<AudioTrack>;
}

class NormalMovieApiProvider implements MovieApi {
  searchByTitle(name: string) {
    return [];
  }
  searchByActors(actors: Array<string>) {
    return [];
  }
  searchByAwards(awards: Array<string>) {
    return [];
  }
  searchByDirector(director: string) {
    return [];
  }
  releaseYear(releaseYear: Date) {
    return [];
  }
}

class NormalAudioApiProvider implements AudioApi {
  searchByTitle(name: string) {
    return [];
  }
  searchByArtist(artist: string) {
    return [];
  }
  searchByMood(mood: string) {
    return [];
  }
  searchByGenre(genre: string) {
    return [];
  }
  searchByLyric(text: string) {
    return [];
  }
}

class PremiumMovieApiProvider implements MovieApi {
  searchByTitle(name: string) {
    return [];
  }
  searchByActors(actors: Array<string>) {
    return [];
  }
  searchByAwards(awards: Array<string>) {
    return [];
  }
  searchByDirector(director: string) {
    return [];
  }
  releaseYear(releaseYear: Date) {
    return [];
  }
}

class PremiumAudioApiProvider implements AudioApi {
  searchByTitle(name: string) {
    return [];
  }
  searchByArtist(artist: string) {
    return [];
  }
  searchByMood(mood: string) {
    return [];
  }
  searchByGenre(genre: string) {
    return [];
  }
  searchByLyric(text: string) {
    return [];
  }
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
  private headerParts: Array<string>;
  private bodyParts: Array<string>;
  private footerParts: Array<string>;

  constructor() {
    this.headerParts = [];
    this.bodyParts = [];
    this.footerParts = [];
  }

  public setHeaderParts(...parts: Array<string>) {
    this.headerParts = parts;
  }

  public setBodyParts(...parts: Array<string>) {
    this.bodyParts = parts;
  }

  public setFooterParts(...parts: Array<string>) {
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

// Usage

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

  private statusOfCities: Array<{
    city: string;
    status: "SUNNY" | "CLOUDY" | "RAINY" | "SNOWY";
  }>;

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

### Adapter (Wrapper)

> Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

<img src="https://user-images.githubusercontent.com/37804060/165858390-a0bdcf53-22bb-42b3-b499-70b51384a61c.png"/>

```typescript
interface StandardUser {
  fullName: string;
  skills: Array<string>;
  age: number;
  contact: {
    email: string;
    phone: string;
  };
}

abstract class ResumeServiceApi {
  static generateResume(data: StandardUser) {
    /* Implementation */
  }
}

class User {
  readonly firstName: string;
  readonly lastName: string;
  readonly birthday: Date;
  readonly skills: Record<string, 1 | 2 | 3 | 4 | 5>;
  readonly email?: string;
  readonly phone?: string;

  constructor({
    firstName,
    lastName,
    birthday,
    skills,
    email,
    phone,
  }: {
    firstName: string;
    lastName: string;
    birthday: Date;
    skills: Record<string, 1 | 2 | 3 | 4 | 5>;
    email?: string;
    phone?: string;
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.skills = skills;
    this.email = email;
    this.phone = phone;
  }
}

class UserAdapter implements StandardUser {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  get fullName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  get skills() {
    return Object.keys(this.user.skills);
  }

  get age() {
    return new Date().getFullYear() - this.user.birthday.getFullYear();
  }

  get contact() {
    return { email: this.user.email ?? "", phone: this.user.phone ?? "" };
  }
}

// Usage

const user = new User({
  firstName: "Ahmad",
  lastName: "Jafari",
  birthday: new Date(1999, 1, 1, 0, 0, 0, 0),
  skills: { TypeScript: 4, JavaScript: 3, OOP: 4, CSharp: 2, Java: 1 },
  email: "a99jafari@gmail.com",
  phone: "+98 930 848 XXXX",
});

// const resume = ResumeServiceApi.generateResume(user); |-> Type Error!

const standardUser = new UserAdapter(user);
const resume = ResumeServiceApi.generateResume(standardUser); // OK!

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Bridge

> Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

<img src="https://user-images.githubusercontent.com/37804060/165858360-9b8ab73c-9b08-41d1-b7b9-84a2e5ef5028.png"/>

```typescript
interface Player {
  play(): string;
  stop(): string;
}

class AudioPlayer implements Player {
  play(): string {
    return "Audio is playing";
  }

  stop(): string {
    return "Audio is stopped";
  }
}

class VideoPlayer implements Player {
  play(): string {
    return "Video is playing";
  }

  stop(): string {
    return "Video is stopped";
  }
}

interface Platform {
  play(): string;
  stop(): string;
}

class Desktop implements Platform {
  private player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  play(): string {
    return `${this.player.play()} on desktop`;
  }

  stop(): string {
    return `${this.player.stop()} on desktop`;
  }
}

class Mobile implements Platform {
  private player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  play(): string {
    return `${this.player.play()} on mobile`;
  }

  stop(): string {
    return `${this.player.stop()} on mobile`;
  }
}

// Usage
const audioPlayer = new AudioPlayer();
const videoPlayer = new VideoPlayer();

const desktopVideoPlayer = new Desktop(videoPlayer);
const desktopAudioPlayer = new Desktop(audioPlayer);
const mobileVideoPlayer = new Mobile(videoPlayer);
const mobileAudioPlayer = new Mobile(audioPlayer);

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Composite (Object Tree)

> Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.

<img src="https://user-images.githubusercontent.com/37804060/165858367-a2ba0672-4bb3-4b11-a63c-7843df0cfb7c.png"/>

```typescript
abstract class BaseUnit<T> {
  constructor(
    private readonly id: string,
    private readonly units: Array<BaseUnit<T>> = [],
  ) {}

  getUnit(unitId: string): BaseUnit<T> | null {
    return this.units.find((unit) => unit.id === unitId) ?? null;
  }

  getSalary(): number {
    return this.units.reduce((acc, unit) => acc + unit.getSalary(), 0);
  }

  increaseSalary(percentage: number): void {
    this.units.forEach((unit) => unit.increaseSalary(percentage));
  }
}

class Employee extends BaseUnit<null> {
  private salary: number;

  constructor(id: string, salary: number) {
    super(id);
    this.salary = salary;
  }

  getUnit(): never {
    throw new Error("Employee cannot have sub-units");
  }

  getSalary() {
    return this.salary;
  }

  increaseSalary(percentage: number) {
    this.salary = this.salary + (this.salary * percentage) / 100;
  }
}

class Department extends BaseUnit<Employee> {}

class Faculty extends BaseUnit<Department> {}

class University extends BaseUnit<Faculty> {}

// Usage

const harvardUniversity = new University("Harvard", [
  new Faculty("Engineering", [
    new Department("Computer", [new Employee("C1", 6200), new Employee("C2", 5400), new Employee("C3", 5600)]),
    new Department("Electrical", [new Employee("E1", 4800), new Employee("E2", 5800)]),
  ]),
  new Faculty("Science", [
    new Department("Physics", [new Employee("P1", 3800), new Employee("P2", 4600)]),
    new Department("Mathematics", [new Employee("M1", 5200), new Employee("M2", 5600), new Employee("M3", 4600)]),
  ]),
]);

console.log(harvardUniversity.getSalary());
harvardUniversity.increaseSalary(10);
console.log(harvardUniversity.getSalary());

const engineeringFaculty = harvardUniversity.getUnit("Engineering") as Faculty;

console.log(engineeringFaculty.getSalary());
engineeringFaculty.increaseSalary(10);
console.log(engineeringFaculty.getSalary());

const computerDepartment = engineeringFaculty.getUnit("Computer") as Department;

console.log(computerDepartment.getSalary());
computerDepartment.increaseSalary(10);
console.log(computerDepartment.getSalary());

const employee = computerDepartment.getUnit("C1") as Employee;

console.log(employee.getSalary());
employee.increaseSalary(10);
console.log(employee.getSalary());

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Decorator (Wrapper)

> Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

<img src="https://user-images.githubusercontent.com/37804060/165858382-6ece64aa-4c9f-4e4e-944e-f7a67fcdd162.png"/>

```typescript
interface ImageProcessor {
  processImage: () => File;
}

class ImageFile implements ImageProcessor {
  private image: File;

  constructor(imageBlobs: Array<Blob>, imageName: string) {
    this.image = new File(imageBlobs, imageName);
  }

  processImage() {
    // Converts the blobs to a visible image
    return this.image;
  }
}

abstract class ImageDecorator implements ImageProcessor {
  protected image: File;

  constructor(image: File) {
    this.image = image;
  }

  abstract processImage(): File;
}

class ImageCompressor extends ImageDecorator {
  processImage(): File {
    // Compresses image size
    return this.image;
  }
}

class ImageEnhancer extends ImageDecorator {
  processImage(): File {
    // Enhances image quality
    return this.image;
  }
}

class ImageResizer extends ImageDecorator {
  processImage() {
    // Changes image width and height
    return this.image;
  }
}

// Usage

const image = new ImageFile([], "Picture.jpg").processImage();
const compressedImage = new ImageCompressor(image).processImage();
const enhancedImage = new ImageCompressor(compressedImage).processImage();
const resizedImage = new ImageResizer(enhancedImage).processImage();

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Facade

> Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

<img src="https://user-images.githubusercontent.com/37804060/165858377-16fc76a5-3b79-4837-bf3c-3f38539a4ac3.png"/>

```typescript
class GitChecker {
  private repositoryPath: string;

  constructor(repositoryPath: string) {
    this.repositoryPath = repositoryPath;
  }

  analyzeCommits() {
    // Checks the quality of commit messages
  }

  analyzeUnmergedBranches() {
    // Checks the
  }
}

class Linter {
  private rules: Array<string>;

  constructor(rules: Array<string>) {
    this.rules = rules;
  }

  findIssues() {
    // Checks codebase and finds all issues
  }

  resolveFixableIssues() {
    // Checks codebase and fix all fixable issues
  }
}

class PackageManager {
  private dependencies: Array<{ name: string; version: number }>;

  constructor(dependencies: Array<{ name: string; version: number }>) {
    this.dependencies = dependencies;
  }

  findUnsecureLibraries() {
    // Analyzes all dependencies and finds all of unsecure libraries
  }

  findDeprecatedLibraries() {
    // Analyzes all dependencies and finds all of deprecated libraries
  }
}

// Facade Class
class CodebaseAnalyzer {
  private gitChecker: GitChecker;
  private linter: Linter;
  private packageManager: PackageManager;

  constructor({
    repositoryPath,
    linterRules,
    dependencies,
  }: {
    repositoryPath: string;
    linterRules: Array<string>;
    dependencies: Array<{ name: string; version: number }>;
  }) {
    this.gitChecker = new GitChecker(repositoryPath);
    this.linter = new Linter(linterRules);
    this.packageManager = new PackageManager(dependencies);
  }

  // This method is the facade method and does all of the work
  analyze() {
    this.gitChecker.analyzeCommits();
    this.gitChecker.analyzeUnmergedBranches();
    this.linter.findIssues();
    this.linter.resolveFixableIssues();
    this.packageManager.findUnsecureLibraries();
    this.packageManager.findDeprecatedLibraries();
  }
}

// Usage
const codebaseAnalyzer = new CodebaseAnalyzer({
  repositoryPath: "root/design-patterns/structural/facade/",
  linterRules: ["rule1", "rule2", "rule3", "rule4"],
  dependencies: [
    { name: "ABC", version: 19 },
    { name: "MNP", version: 14 },
    { name: "XYZ", version: 23 },
  ],
});

codebaseAnalyzer.analyze();

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Flyweight (Cache)

> Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

<img src="https://user-images.githubusercontent.com/37804060/165858370-1ec33962-9bad-4f5d-8078-132bf7d9da29.png"/>

```typescript
interface IRequest {
  readonly method: "GET" | "POST" | "PUT" | "DELETE";
  readonly url: string;
  readonly body: Record<string, string>;
  send(): Promise<unknown>;
}

class MinimalRequest implements IRequest {
  constructor(
    public readonly method: "GET" | "POST" | "PUT" | "DELETE",
    public readonly url: string,
    public readonly body: Record<string, string> = {},
  ) {}

  public async send(): Promise<unknown> {
    const options = { method: this.method, body: JSON.stringify(this.body) };

    const response = await fetch(this.url, options);

    return response.json();
  }
}

class RequestFactory {
  private requests: Map<string, IRequest> = new Map();

  public createRequest(
    method: "GET" | "POST" | "PUT" | "DELETE",
    url: string,
    body: Record<string, string> = {},
  ): IRequest {
    const key = `${method}-${url}`;

    if (!this.requests.has(key)) {
      const request = new MinimalRequest(method, url, body);

      this.requests.set(key, request);
    }

    return this.requests.get(key)!; // Type assertion for clarity
  }
}

class ParallelRequestsHandler {
  private factory: RequestFactory;

  constructor(factory: RequestFactory) {
    this.factory = factory;
  }

  public async sendAll(
    requestsInfo: Array<{
      method: "GET" | "POST" | "PUT" | "DELETE";
      url: string;
      body?: Record<string, string>;
    }>,
  ): Promise<Array<unknown>> {
    const requests = requestsInfo.map((requestInfo) =>
      this.factory.createRequest(requestInfo.method, requestInfo.url, requestInfo.body),
    );
    const responses = await Promise.all(requests.map((request) => request.send()));

    return responses;
  }
}

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Proxy

> Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

<img src="https://user-images.githubusercontent.com/37804060/165858391-e373f505-107c-492d-b354-6a10d6441e35.png"/>

```typescript
interface IRequestHandler {
  sendRequest(method: string, url: string, body?: string): void;
}

class RequestHandler implements IRequestHandler {
  sendRequest(method: string, url: string, body?: string): void {
    console.log(`Request sent: ${method} ${url} ${body}`);
  }
}

class RequestHandlerProxy implements IRequestHandler {
  private realApi: RequestHandler;

  constructor(realApi: RequestHandler) {
    this.realApi = realApi;
  }

  private logRequest(method: string, url: string, body?: string): void {
    console.log(`Request logged: ${method} ${url} ${body}`);
  }

  private validateRequestUrl(url: string): boolean {
    return url.startsWith("/api");
  }

  sendRequest(method: string, url: string, body?: string): void {
    if (this.validateRequestUrl(url)) {
      this.realApi.sendRequest(method, url, body);
      this.logRequest(method, url, body);
    }
  }
}

// Usage

const realRequestHandler = new RequestHandler();
const proxyRequestHandler = new RequestHandlerProxy(realRequestHandler);

proxyRequestHandler.sendRequest("GET", "/api/users");

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Chain of Responsibility

> Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/2bea3788-2ba7-49e9-87d2-a9aa8d81e43e"/>

```typescript
interface IResponse {
  statusCode: number;
  body: Record<string, unknown>;
  authentication: Record<string, string>;
  message?: string;
}

class ResponseHandler {
  private nextHandler?: ResponseHandler;

  protected process(response: IResponse): IResponse {
    return response;
  }

  public setNext(ResponseHandler: ResponseHandler): ResponseHandler {
    this.nextHandler = ResponseHandler;

    return ResponseHandler;
  }

  public handle(response: IResponse): IResponse {
    const processedResponse = this.process(response);

    if (this.nextHandler == null) {
      return processedResponse;
    } else {
      return this.nextHandler.handle(processedResponse);
    }
  }
}

class Encryptor extends ResponseHandler {
  private encryptTokens(response: IResponse) {
    const { authentication } = response;
    const encryptedAuthTokens: Record<string, string> = {};

    for (const key in authentication) {
      encryptedAuthTokens[key] = `encrypted-${authentication[key]}`;
    }

    return { ...response, authentication: encryptedAuthTokens };
  }

  protected process(response: IResponse) {
    const encryptedResponse = this.encryptTokens(response);

    return encryptedResponse;
  }
}

class BodyFormatter extends ResponseHandler {
  private transformKeysToCamelCase(body: Record<string, unknown>) {
    const newBody: Record<string, unknown> = {};

    for (const key in body) {
      const camelCaseKey = key.replace(/_([a-z])/g, (subString) => subString[1].toUpperCase());

      newBody[camelCaseKey] = body[key];
    }

    return newBody;
  }

  protected process(response: IResponse) {
    const clonedResponseBody = JSON.parse(JSON.stringify(response.body));
    const formattedBody = this.transformKeysToCamelCase(clonedResponseBody);
    const formattedResponse = { ...response, body: formattedBody };

    return formattedResponse;
  }
}

class MetadataAdder extends ResponseHandler {
  private getResponseMetadata(statusCode: number) {
    if (statusCode < 200) {
      return "Informational";
    } else if (statusCode < 300) {
      return "Success";
    } else if (statusCode < 400) {
      return "Redirection";
    } else if (statusCode < 500) {
      return "Client Error";
    } else {
      return "Server Error";
    }
  }

  protected process(response: IResponse) {
    const updatedResponse = {
      ...response,
      message: this.getResponseMetadata(response.statusCode),
    };

    return updatedResponse;
  }
}

// Usage
const response: IResponse = {
  statusCode: 200,
  body: {
    design_pattern_name: "Chain of Responsibility",
    pattern_category: "Behavioral",
    complexity_percentage: 80,
  },
  authentication: {
    api_token: "12345678",
    refresh_token: "ABCDEFGH",
  },
};

const responseHandler = new ResponseHandler();
const encryptor = new Encryptor();
const bodyFormatter = new BodyFormatter();
const metadataAdder = new MetadataAdder();

responseHandler.setNext(encryptor).setNext(bodyFormatter).setNext(metadataAdder);

const resultResponse = responseHandler.handle(response);

console.log(resultResponse);
/*
{
  "statusCode": 200,
  "body": {
    "designPatternName": "Chain of Responsibility",
    "patternCategory": "Behavioral",
    "complexityPercentage": 80
  },
  "authentication": {
    "api_token": "encrypted-12345678",
    "refresh_token": "encrypted-ABCDEFGH"
  },
  "message": "Success"
}
*/

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Command

> Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/c685b9d8-f7a5-4915-b75c-4e897fe70014"/>

```typescript
interface Command {
  execute(): void;
  undo(): void;
}

class AddTextCommand implements Command {
  private prevText: string = "";

  constructor(
    private editor: TextEditor,
    private text: string,
  ) {}

  execute() {
    this.prevText = this.editor.content;
    this.editor.content += this.text;
  }

  undo() {
    this.editor.content = this.prevText;
  }
}

class DeleteTextCommand implements Command {
  private prevText: string = "";

  constructor(private editor: TextEditor) {}

  execute() {
    this.prevText = this.editor.content;
    this.editor.content = "";
  }

  undo() {
    this.editor.content = this.prevText;
  }
}

class TextEditor {
  content: string = "";
}

class CommandInvoker {
  private commandHistory: Array<Command> = [];
  private currentCommandIndex: number = -1;

  executeCommand(command: Command) {
    if (this.currentCommandIndex < this.commandHistory.length - 1) {
      this.commandHistory = this.commandHistory.slice(0, this.currentCommandIndex + 1);
    }

    command.execute();
    this.commandHistory.push(command);
    this.currentCommandIndex++;
  }

  undo() {
    if (this.currentCommandIndex >= 0) {
      const command = this.commandHistory[this.currentCommandIndex];

      command.undo();
      this.currentCommandIndex--;
    } else {
      console.log("Nothing to undo.");
    }
  }

  redo() {
    if (this.currentCommandIndex < this.commandHistory.length - 1) {
      const command = this.commandHistory[this.currentCommandIndex + 1];

      command.execute();
      this.currentCommandIndex++;
    } else {
      console.log("Nothing to redo.");
    }
  }
}

// Client Code
const editor = new TextEditor();
const invoker = new CommandInvoker();

const addTextCmd = new AddTextCommand(editor, "Hello, World!");

invoker.executeCommand(addTextCmd);
console.log(editor.content); // "Hello, World!"

const deleteTextCmd = new DeleteTextCommand(editor);

invoker.executeCommand(deleteTextCmd);
console.log(editor.content); // ""

invoker.undo();
console.log(editor.content); // "Hello, World!"

invoker.redo();
console.log(editor.content); // ""

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Interpreter

> Interpreter is a behavioral design pattern that provides a way to interpret and evaluate sentences or expressions in a language. This pattern defines a language grammar, along with an interpreter that can parse and execute the expressions.

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/b5b36a91-dd3d-4bf5-a476-bae961c1d421"/>

```typescript
interface Expression {
  interpret(): number;
}

class NumberExpression implements Expression {
  constructor(private value: number) {}

  interpret(): number {
    return this.value;
  }
}

class PlusExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression,
  ) {}

  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}

class MinusExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression,
  ) {}

  interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}

class MultiplyExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression,
  ) {}

  interpret(): number {
    return this.left.interpret() * this.right.interpret();
  }
}

class DivideExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression,
  ) {}

  interpret(): number {
    return this.left.interpret() / this.right.interpret();
  }
}

class Interpreter {
  interpret(expression: string): number {
    const stack: Array<Expression> = [];

    const tokens = expression.split(" ");

    for (const token of tokens) {
      if (this.isOperator(token)) {
        const right = stack.pop()!;
        const left = stack.pop()!;
        const operator = this.createExpression(token, left, right);

        stack.push(operator);
      } else {
        stack.push(new NumberExpression(parseFloat(token)));
      }
    }

    return stack.pop()!.interpret();
  }

  private isOperator(token: string): boolean {
    return token === "+" || token === "-" || token === "*" || token === "/";
  }

  private createExpression(operator: string, left: Expression, right: Expression): Expression {
    switch (operator) {
      case "+":
        return new PlusExpression(left, right);
      case "-":
        return new MinusExpression(left, right);
      case "*":
        return new MultiplyExpression(left, right);
      case "/":
        return new DivideExpression(left, right);
      default:
        throw new Error(`Invalid operator: ${operator}`);
    }
  }
}

// Usage
const interpreter = new Interpreter();

console.log(interpreter.interpret("3 4 +")); // Output: 7
console.log(interpreter.interpret("5 2 * 3 +")); // Output: 13
console.log(interpreter.interpret("10 2 /")); // Output: 5

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Iterator

> Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/20229eb8-caa0-4953-adf0-87f516332966"/>

```typescript
interface MyIterator<T> {
  hasPrevious: () => boolean;
  hasNext: () => boolean;
  previous: () => T;
  next: () => T;
}

class Book {
  readonly title: string;
  readonly author: string;
  readonly isbn: string;

  constructor(title: string, author: string, isbn: string = "") {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class BookShelf {
  private books: Array<Book> = [];

  getLength(): number {
    return this.books.length;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  getBookAt(index: number): Book {
    return this.books[index];
  }

  createIterator() {
    return new BookShelfIterator(this);
  }
}

class BookShelfIterator implements MyIterator<Book> {
  private bookShelf: BookShelf;
  private currentIndex: number;

  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.currentIndex = 0;
  }

  hasNext() {
    return this.currentIndex < this.bookShelf.getLength();
  }

  hasPrevious() {
    return this.currentIndex > 0;
  }

  next() {
    this.currentIndex += 1;

    return this.bookShelf.getBookAt(this.currentIndex);
  }

  previous() {
    this.currentIndex -= 1;

    return this.bookShelf.getBookAt(this.currentIndex);
  }
}

// Usage
const shelf = new BookShelf();

shelf.addBook(new Book("Design Patterns", "Gang of Four"));
shelf.addBook(new Book("Clean Code", "Robert C. Martin"));
shelf.addBook(new Book("You Don't Know JS", "Kyle Simpson"));

const MyIterator = shelf.createIterator();

while (MyIterator.hasNext()) {
  const book = MyIterator.next();

  console.log(`${book.title} by ${book.author}`);
}

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Mediator

> Mediator is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/e898a7aa-a40e-4679-af89-e41d26d77cfb"/>

```typescript
interface ChatMediator {
  sendMessage(receiver: User, message: string): void;
}

class ConcreteChatMediator implements ChatMediator {
  private users: Array<User> = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(receiver: User, message: string): void {
    for (const user of this.users) {
      // Don't send the message to the user who sent it
      if (user !== receiver) {
        user.receiveMessage(message);
      }
    }
  }
}

class User {
  private mediator: ChatMediator;
  private name: string;

  constructor(mediator: ChatMediator, name: string) {
    this.mediator = mediator;
    this.name = name;
  }

  sendMessage(message: string): void {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(this, message);
  }

  receiveMessage(message: string): void {
    console.log(`${this.name} receives: ${message}`);
  }
}

// Usage
const mediator = new ConcreteChatMediator();

const user1 = new User(mediator, "Alice");
const user2 = new User(mediator, "Bob");
const user3 = new User(mediator, "Charlie");

mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);

user1.sendMessage("Hello, everyone!");

user2.sendMessage("Hi, Alice!");

user3.sendMessage("Hey, Bob!");

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Memento

> Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/4e0b609d-233e-461a-871d-87d5949eb37d"/>

```typescript
class EditorMemento {
  constructor(private readonly content: string) {}

  getContent(): string {
    return this.content;
  }
}

class Editor {
  constructor(private content: string = "") {}

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
  }

  createSnapshot(): EditorMemento {
    return new EditorMemento(this.content);
  }

  restoreSnapshot(snapshot: EditorMemento): void {
    this.content = snapshot.getContent();
  }
}

class MinimalHistory {
  private snapshots: Array<EditorMemento> = [];

  push(snapshot: EditorMemento): void {
    this.snapshots.push(snapshot);
  }

  pop(): EditorMemento | undefined {
    return this.snapshots.pop();
  }
}

// Usage
const editor = new Editor();
const minimalHistory = new MinimalHistory();

editor.setContent("Hello, World!");
editor.setContent("Hello, TypeScript!");
minimalHistory.push(editor.createSnapshot());
editor.setContent("Hello, Memento Pattern!");

const lastSnapshot = minimalHistory.pop();

if (lastSnapshot) {
  editor.restoreSnapshot(lastSnapshot);
}

console.log(editor.getContent()); // Output: Hello, TypeScript!

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Observer

> Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/6ae11f38-d6ed-4c86-a2ed-b59070a56112"/>

```typescript
interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(notification: string): void;
}

class Celebrity implements Subject {
  private followers: Array<Observer>;
  private posts: Array<string>;

  constructor() {
    this.followers = [];
    this.posts = [];
  }

  // Method to make a new post
  sendPost(newPost: string) {
    this.posts = [...this.posts, newPost];
    this.notifyFollowers();
  }

  // Method to notify followers
  private notifyFollowers() {
    this.followers.forEach((follower) => {
      const latestPost = this.posts[this.posts.length - 1];

      follower.update(latestPost);
    });
  }

  // Register a new follower
  registerObserver(observer: Observer) {
    this.followers.push(observer);
  }

  // Remove a follower
  removeObserver(observer: Observer) {
    const index = this.followers.indexOf(observer);

    if (index !== -1) {
      this.followers.splice(index, 1);
    }
  }

  // Notify all followers
  notifyObservers() {
    this.notifyFollowers();
  }
}

class Follower implements Observer {
  private followerName: string;

  constructor(name: string) {
    this.followerName = name;
  }

  // Update method to receive notifications
  update(notification: string) {
    console.log(`${this.followerName} received a notification: ${notification}`);
  }
}

// Usage
const celebrity1 = new Celebrity();
const celebrity2 = new Celebrity();

const follower1 = new Follower("John");
const follower2 = new Follower("Alice");
const follower3 = new Follower("Bob");

celebrity1.registerObserver(follower1);
celebrity1.registerObserver(follower2);
celebrity2.registerObserver(follower3);

celebrity1.sendPost("Hello World!");
celebrity2.sendPost("I love coding!");

celebrity1.removeObserver(follower1);
celebrity1.removeObserver(follower2);

celebrity1.sendPost("Observer pattern is awesome!");

// Output:
// John received a notification: Hello World!
// Alice received a notification: Hello World!
// Bob received a notification: I love coding!

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### State

> State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/d77e7972-083f-4fee-b2a7-640f017144f5"/>

```typescript
interface PipelineState {
  start(pipeline: Pipeline): void;
  fail(pipeline: Pipeline): void;
  complete(pipeline: Pipeline): void;
}

class IdleState implements PipelineState {
  start(pipeline: Pipeline) {
    console.log("Pipeline started. Building...");
    pipeline.setState(new BuildingState());
  }

  fail(_pipeline: Pipeline) {
    console.log("Pipeline is idle. Nothing to fail.");
  }

  complete(_pipeline: Pipeline) {
    console.log("Pipeline is idle. Nothing to complete.");
  }
}

class BuildingState implements PipelineState {
  start(_pipeline: Pipeline) {
    console.log("Pipeline is already building.");
  }

  fail(pipeline: Pipeline) {
    console.log("Build failed.");
    pipeline.setState(new FailedState());
  }

  complete(pipeline: Pipeline) {
    console.log("Build complete. Testing...");
    pipeline.setState(new TestingState());
  }
}

class TestingState implements PipelineState {
  start(_pipeline: Pipeline) {
    console.log("Pipeline is already in progress.");
  }

  fail(pipeline: Pipeline) {
    console.log("Testing failed.");
    pipeline.setState(new FailedState());
  }

  complete(pipeline: Pipeline) {
    console.log("Testing complete. Deploying...");
    pipeline.setState(new DeployingState());
  }
}

class DeployingState implements PipelineState {
  start(_pipeline: Pipeline) {
    console.log("Pipeline is already deploying.");
  }

  fail(pipeline: Pipeline) {
    console.log("Deployment failed.");
    pipeline.setState(new FailedState());
  }

  complete(pipeline: Pipeline) {
    console.log("Deployment successful!");
    pipeline.setState(new IdleState());
  }
}

class FailedState implements PipelineState {
  start(_pipeline: Pipeline) {
    console.log("Fix the issues and start the pipeline again.");
  }

  fail(_pipeline: Pipeline) {
    console.log("Pipeline already in failed state.");
  }

  complete(_pipeline: Pipeline) {
    console.log("Cannot complete. The pipeline has failed.");
  }
}

// 3. Context
class Pipeline {
  private state: PipelineState;

  constructor() {
    // Initial state
    this.state = new IdleState();
  }

  setState(state: PipelineState) {
    this.state = state;
  }

  start() {
    this.state.start(this);
  }

  fail() {
    this.state.fail(this);
  }

  complete() {
    this.state.complete(this);
  }
}

// Client Code
const pipeline = new Pipeline();

pipeline.start(); // Output: Pipeline started. Building...
pipeline.complete(); // Output: Build complete. Testing...
pipeline.fail(); // Output: Testing failed.

pipeline.setState(new BuildingState());
pipeline.start(); // Output: Pipeline is already building.
pipeline.complete(); // Output: Testing complete. Deploying...
pipeline.complete(); // Output: Deployment successful!

pipeline.setState(new TestingState());
pipeline.start(); // Output: Pipeline is already in progress.
pipeline.fail(); // Output: Testing failed.
pipeline.complete(); // Output: Deployment successful!

pipeline.setState(new DeployingState());
pipeline.start(); // Output: Pipeline is already deploying.
pipeline.fail(); // Output: Deployment failed.
pipeline.complete(); // Output: Deployment successful!

pipeline.setState(new FailedState());
pipeline.start(); // Output: Fix the issues and start the pipeline again.
pipeline.fail(); // Output: Pipeline already in failed state.
pipeline.complete(); // Output: Cannot complete. The pipeline has failed.

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Strategy

> Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/98b8e8e1-bd42-4205-8237-beff23546128"/>

```typescript
interface RenderStrategy {
  renderShape(shape: Shape): void;
}

class RasterRender implements RenderStrategy {
  renderShape(shape: Shape) {
    console.log(`Raster rendering the ${shape.getName()}`);
  }
}

class VectorRender implements RenderStrategy {
  renderShape(shape: Shape) {
    console.log(`Vector rendering the ${shape.getName()}`);
  }
}

class Shape {
  private name: string;
  private renderStrategy: RenderStrategy;

  constructor(name: string, strategy: RenderStrategy) {
    this.name = name;
    this.renderStrategy = strategy;
  }

  setRenderStrategy(strategy: RenderStrategy) {
    this.renderStrategy = strategy;
  }

  render() {
    this.renderStrategy.renderShape(this);
  }

  getName(): string {
    return this.name;
  }
}

// Usage
const rasterRender = new RasterRender();
const vectorRender = new VectorRender();

const circle = new Shape("Circle", rasterRender);

circle.render();

circle.setRenderStrategy(vectorRender);
circle.render();

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Template Method

> Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/7065675a-ad94-488b-a9b7-96fcb2aa7867"/>

```typescript
abstract class SocialMediaPostAnalyzer {
  private readonly HARMFUL_WORDS = [
    "dumb",
    "stupid",
    "idiot",
    "loser",
    "ugly",
    "fat",
    "skinny",
    "weird",
    "hate",
    "rude",
    "nasty",
  ];

  preprocessData(data: string): Array<string> {
    return data.split(" ").map((word) => word.replace(/[^a-zA-Z ]/g, "").toLowerCase());
  }

  analyze(data: Array<string>): Array<string> {
    return data.filter((word) => this.HARMFUL_WORDS.includes(word));
  }

  displayResults(data: Array<string>): void {
    console.log(`The number of harmful words in this post is ${data.length}, including ${data.join(", ")}.`);
  }

  async analyzePosts(): Promise<void> {
    const data = await this.fetchData();
    const preprocessedData = this.preprocessData(data);
    const analyticsResult = this.analyze(preprocessedData);

    this.displayResults(analyticsResult);
  }

  abstract fetchData(): Promise<string>;
}

class TwitterPostAnalyzer extends SocialMediaPostAnalyzer {
  // Fetches data from Twitter API and returns its data
  async fetchData() {
    return ""; // Dummy data
  }
}

class InstagramPostAnalyzer extends SocialMediaPostAnalyzer {
  // Fetches data from Instagram API and returns its data
  async fetchData() {
    return ""; // Dummy data
  }
}

// Usage
const twitterAnalysis = new TwitterPostAnalyzer();

twitterAnalysis.analyzePosts();

const instagramAnalysis = new InstagramPostAnalyzer();

instagramAnalysis.analyzePosts();

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

### Visitor

> Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/592e44d8-f8db-467d-89b1-fea1088820c2"/>

```typescript
interface Visitor {
  visitDesigner(manager: Designer): void;
  visitDeveloper(developer: Developer): void;
}

interface Employee {
  accept(visitor: Visitor): void;
}

class Designer implements Employee {
  name: string;
  numberOfDesignedPages: number;

  constructor(name: string, numberOfDesignedPages: number) {
    this.name = name;
    this.numberOfDesignedPages = numberOfDesignedPages;
  }

  accept(visitor: Visitor): void {
    visitor.visitDesigner(this);
  }
}

class Developer implements Employee {
  name: string;
  baseSalary: number;
  storyPoints: number;

  constructor(name: string, baseSalary: number, storyPoints: number) {
    this.name = name;
    this.baseSalary = baseSalary;
    this.storyPoints = storyPoints;
  }

  accept(visitor: Visitor): void {
    visitor.visitDeveloper(this);
  }
}

class SalaryCalculator implements Visitor {
  totalSalary: number = 0;

  visitDesigner(manager: Designer): void {
    this.totalSalary += manager.numberOfDesignedPages * 200;
  }

  visitDeveloper(developer: Developer): void {
    this.totalSalary += developer.baseSalary + developer.storyPoints * 30;
  }
}

// Usage
const employees: Array<Employee> = [
  new Designer("Alice", 15),
  new Designer("James", 20),
  new Developer("Ahmad", 3000, 40),
  new Developer("Kate", 2000, 60),
];

const salaryCalculator = new SalaryCalculator();

for (const employee of employees) {
  employee.accept(salaryCalculator);
}

console.log("Total salary:", salaryCalculator.totalSalary);

```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

## References

In creating this repository, I aimed to provide original examples to facilitate learning about object-oriented programming (OOP) pillars, SOLID principles, and design patterns using TypeScript. While there may be similarities between examples found in this repository and those in other resources, it's essential to emphasize that all code and documentation within this repository are original creations.

The following list includes resources that have inspired and informed my understanding of OOP, SOLID principles, and design patterns:

1. Head First Design Patterns (by Eric Freeman and Elisabeth Robson)
2. Dive Into Design Patterns (by Alexander Shvets)
3. [GeeksForGeeks Website](https://www.geeksforgeeks.org/)
4. [WikiPedia Website](https://www.wikipedia.org/)
5. +5 years of experience in the software development industry

The resources for the images in the repository are:

1. [The S.O.L.I.D Principles in Pictures](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)
2. [Refactoring.guru Website](https://refactoring.guru/)
3. Google!

> Please note that while the concepts discussed in these resources may overlap with the content of this repository, all examples and code within this repository have been independently developed by myself with the goal of providing real-world scenarios and applications.

[`⬆ BACK TO TOP ⬆`](#table-of-contents)

## Contributing and Supporting

Thank you for exploring **OOP Expert with TypeScript**. This repository serves as a comprehensive resource for mastering object-oriented programming principles, SOLID design, and design patterns through the lens of TypeScript.

Your contributions can enhance the learning experience for countless individuals. Whether it's correcting a typo, suggesting improvements to code examples, or adding new content, your input is invaluable in ensuring the repository remains a top-notch educational tool.

By collaborating with me, you not only enrich the learning journey for others but also sharpen your own skills. Every line of code, every explanation, and every suggestion can make a significant difference.

If you've found this repository helpful, kindly consider giving it a :star:. Your support encourages me to continue refining and expanding its content, benefitting the entire community of developers striving to master object-oriented programming with TypeScript.

Let's work together to cultivate a vibrant learning environment where knowledge is shared, refined, and celebrated. Your contributions are deeply appreciated. Thank you for being a part of this journey.

[`⬆ BACK TO TOP ⬆`](#table-of-contents)