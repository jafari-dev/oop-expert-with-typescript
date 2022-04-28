# Object Oriented Programming Expert With TypeScript

This repository is a complete guide and tutorial for the principles and techniques of object-oriented programming. It can be a reference for all interested in programming and software developers. You will find simple and practical examples in all sections to make the concepts easier to understand.


<p>
  <img src="https://user-images.githubusercontent.com/37804060/151722505-c16e7705-4533-48af-aebb-9d22f15c9ed0.png"/>
</p>


## Table of Contents

1. [Fundamentals](#fundamentals)
    * [What's Object-Oriented-Programming?](#whats-object-oriented-programming)
2. [SOLID Principles](#solid-principles)
    * [What's SOLID Meaning?](#whats-solid-meaning)
    * [Single Responsibility (SRP)](#1-single-responsibility-srp)
    * [Open/Closed (OCP)](#2-openclosed-ocp)
    * [Liskov Substitution (LSP)](#3-liskov-substitution-lsp)
    * [Interface Segregation (ISP)](#4-interface-segregation-isp)
    * [Dependency Inversion (DIP)](#5-dependency-inversion-dip)
3. [Design Patterns](#design-patterns)
    * [What's a Design Pattern?](#whats-a-design-pattern)
    * [Creational Design Patterns](#creational)
        * [Singleton](#singleton)
        * [Prototype](#prototype)
        * [Builder](#builder)
        * [Factory Method](#factory-method)
        * [Abstract Factory](#abstract-factory)
    * [Structural Design Patterns](#structural)
        * [Composite (Object Tree)](#composite-object-tree)
        * [Adapter (Wrapper)](#adapter-wrapper)
        * [Decorator (Wrapper)](#decorator-wrapper)
        * [Facade](#facade)
        * [Proxy](#proxy)
        * [Bridge](#bridge)
        * [Flyweight (Cache)](#flyweight-cache)



## Fundamentals
### What's Object-oriented-programming?

Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods). There are 4 pillars of OOP, includes:

1. <strong>Abstraction</strong>
2. <strong>Encapsulation</strong>
3. <strong>Inheritance</strong>
4. <strong>Polymorphism</strong>


## SOLID Principles

### What's SOLID meaning?

In software engineering, SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable. The principles are a subset of many principles promoted by American software engineer and instructor Robert C. Martin, first introduced in his 2000 paper Design Principles and Design Patterns.

<img src="https://user-images.githubusercontent.com/37804060/153056635-449fedb7-fcbf-4cb1-b642-5798d29b9c6f.jpg"/>

### 1. Single Responsibility (SRP)

> There should never be more than one reason for a class to change. Every class should have only one responsibility.

<img src="https://user-images.githubusercontent.com/37804060/153056645-8760ddfa-01f3-4c21-9279-ab6ba669a0fc.jpg"/>

:x: Before following SRP:

```typescript
interface Note {
  id: string;
  text: string;
}


class Notebook {
  public readonly notes: Note[];
  private password: string;
  private theme: "LIGHT" | "DARK";
  private fontSize: number;

  constructor() {
    this.notes = [];
    this.password = "";
    this.theme = "LIGHT";
    this.fontSize = 14;
  }

  public createNewNote(text: string = ""): void {
    const newNote: Note = { id: new Date().toISOString(), text };
    this.notes.push(newNote);
  }

  public deleteAllNotes(): void {
    this.notes.length = 0;
  }

  public deleteNote(noteId: string): void {
    const targetNote = this.notes.find(({ id }) => id === noteId);
    const targetNoteIndex = this.notes.indexOf(targetNote);
    this.notes.splice(targetNoteIndex, 1);
  }

  public showNote(noteId: string): void {
    const targetNote = this.notes.find(({ id }) => id === noteId);
    console.log(targetNote.text);
  }

  public editNote(noteId: string, newText: string): void {
    const targetNote = this.notes.find(({ id }) => id === noteId);
    const targetNoteIndex = this.notes.indexOf(targetNote);
    this.notes[targetNoteIndex].text = newText;
  }

  public changePassword(newPassword: string): void {
    if (newPassword.length >= 8 && newPassword.length <= 32) {
      this.password = newPassword;
    }
  }

  public toggleTheme(): void {
    if (this.theme === "LIGHT") {
      this.theme = "DARK";
    } else {
      this.theme = "LIGHT";
    }
  }

  public changeFontSize(newFontSize: number): void {
    if (newFontSize < 8) {
      this.fontSize = 8;
    } else if (newFontSize > 60) {
      this.fontSize = 60;
    } else {
      this.fontSize = Math.floor(newFontSize);
    }
  }
}
```


:heavy_check_mark: After following SRP:

```typescript
class Note {
  public readonly id: string;
  private text: string;

  constructor(text: string) {
    this.id = new Date().toISOString();
    this.text = text;
  }

  public show(): void {
    console.log(this.text);
  }

  public edit(newText: string): void {
    this.text = newText;
  }
}

class Setting {
  private password: string;
  private theme: "LIGHT" | "DARK";
  private fontSize: number;

  constructor() {
    this.password = null;
    this.theme = "LIGHT";
    this.fontSize = 14;
  }

  private validatePassword(password: string): boolean {
    if (password.length < 8) {
      return false;
    } else if (password.length > 32) {
      return false;
    } else {
      return true;
    }
  }

  public changePassword(newPassword: string): void {
    if (this.validatePassword(newPassword)) {
      this.password = newPassword;
    }
  }

  public toggleTheme(): void {
    if (this.theme === "LIGHT") {
      this.theme = "DARK";
    } else {
      this.theme = "LIGHT";
    }
  }

  public changeFontSize(newFontSize: number): void {
    if (newFontSize < 8) {
      this.fontSize = 8;
    } else if (newFontSize > 60) {
      this.fontSize = 60;
    } else {
      this.fontSize = Math.floor(newFontSize);
    }
  }
}

class Notebook {
  public readonly notes: Note[];
  public readonly setting: Setting;

  constructor() {
    this.notes = [];
    this.setting = new Setting();
  }

  public getNoteById(noteId: string): Note | undefined {
    return this.notes.find(({ id }) => id === noteId);
  }

  public createNewNote(newNote: Note): void {
    this.notes.push(newNote);
  }

  public deleteAllNotes(): void {
    this.notes.length = 0;
  }

  public deleteNote(noteId: string): void {
    const targetNote = this.getNoteById(noteId);
    const targetNoteIndex = this.notes.indexOf(targetNote);
    this.notes.splice(targetNoteIndex, 1);
  }
}
```

### 2. Open/Closed (OCP)

> Software entities should be open for extension, but closed for modification.

<img src="https://user-images.githubusercontent.com/37804060/153056325-679b94dc-ea4f-4315-a682-93057845f9d5.jpg"/>

:x: Before following OCP:

```typescript
class OperatingSystemInfo {
  getFilesExtension(os: string): string {
    if (os === "Windows") {
      return "exe";
    }
    else if (os === "Linux") {
      return "deb";
    }
    else if (os === "Macintosh") {
      return "dmg";
    }
    else {
      return "unknown!";
    }
  }

  getCreator(os: string): string {
    if (os === "Windows") {
      return "Bill Gates";
    }
    else if (os === "Linux") {
      return "Linus Torvalds";
    }
    else if (os === "Macintosh") {
      return "Steve Jobs";
    }
    else {
      return "Unknown!"
    }
  }

  getBornDate(os: string): number {
    if (os === "Windows") {
      return 1985;
    }
    else if (os === "Linux") {
      return 1991;
    }
    else if (os === "Macintosh") {
      return 1984;
    }
    else {
      return -1;
    }
  }
}
```


:heavy_check_mark: After following OCP:

```typescript
interface OperatingSystemInfo {
  getFilesExtension: () => string;
  getCreator: () => string;
  getBornDate: () => number;
}

class Windows implements OperatingSystemInfo {
  getFilesExtension() {
    return "exe";
  }

  getCreator() {
    return "Bill Gates";
  }

  getBornDate() {
    return 1985;
  };
}

class Linux implements OperatingSystemInfo {
  getFilesExtension() {
    return "deb";
  }

  getCreator() {
    return "Linus Torvalds";
  }

  getBornDate() {
    return 1991;
  };
}

class Macintosh implements OperatingSystemInfo {
  getFilesExtension() {
    return "dmg";
  }

  getCreator() {
    return "Steve Jobs";
  }

  getBornDate() {
    return 1984;
  };
}
```


### 3. Liskov Substitution (LSP)

> If `S` is a subtype of `T`, then objects of type `T` in a program may be replaced with objects of type `S` without altering any of the desirable properties of that program.

<img src="https://user-images.githubusercontent.com/37804060/153056329-914cbbba-685b-452b-9dcf-4fcf6a4faabc.jpg"/>

:x: Before following LSP:

```typescript
class Tablet {
  readBook(): void {
    console.log("Enjoy reading!");
  }

  openBrowser(): void {
    console.log("Start searching ...");
  }
}

class KidsTablet extends Tablet {
  override openBrowser(): Error {
    throw Error("Kids haven't access to the browser!");
  }
}
```


:heavy_check_mark: After following LSP:

```typescript
class Tablet {
  readBook(): void {
    console.log("Enjoy reading!");
  }
}

class AdultsTablet extends Tablet {
  openBrowser(): void {
    console.log("Start searching ...");
  }
}
```


### 4. Interface Segregation (ISP)

> No code should be forced to depend on methods it does not use.

<img src="https://user-images.githubusercontent.com/37804060/153056335-7bf6d86f-da0b-4687-89fe-9ea97e2ec40e.jpg"/>

:x: Before following ISP:

```typescript
interface Ports {
  useUSB: () => void;
  useLAN: () => void;
  usePS2: () => void;
  useVGA: () => void;
}

class PC implements Ports {
  useUSB() {
    console.log("USB port is ready for your PC!");
  };

  useLAN() {
    console.log("LAN port is ready for your PC!");
  };

  usePS2() {
    console.log("PS2 port is ready for your PC!");
  };

  useVGA() {
    console.log("VGA port is ready for your PC!");
  };
}

class Laptop implements Ports {
  useUSB() {
    console.log("USB port is ready for your Laptop!");
  };

  useLAN() {
    console.log("LAN port is ready for your Laptop!");
  };

  usePS2() {
    throw new Error("Laptop has not any PS2 port!");
  };

  useVGA() {
    throw new Error("Laptop has not any VGA port!");
  };
}
```


:heavy_check_mark: After following ISP:

```typescript
interface CommonPorts {
  useUSB: () => void;
  useLAN: () => void;
}

interface ExtraPorts {
  usePS2: () => void;
  useVGA: () => void;
}

class PC implements CommonPorts, ExtraPorts {
  useUSB() {
    console.log("USB port is ready for your PC!");
  };

  useLAN() {
    console.log("LAN port is ready for your PC!");
  };

  usePS2() {
    console.log("PS2 port is ready for your PC!");
  };

  useVGA() {
    console.log("VGA port is ready for your PC!");
  };
}

class Laptop implements CommonPorts {
  useUSB() {
    console.log("USB port is ready for your Laptop!");
  };

  useLAN() {
    console.log("LAN port is ready for your Laptop!");
  };
}
```

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

  postMessage(params: { id: number, text: string }) {
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
    }
    else if (this.api instanceof WhatsappApi) {
      this.api.setup();
      this.api.pushMessage(message, targetId);
    }
    else {
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


## Design Patterns

### What's a design pattern?

In software engineering, a software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. Rather, it is a description or template for how to solve a problem that can be used in many different situations. Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system.

There are 24 design patterns that are grouped into 3 categories:

1. **Creational**: Creational patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code. Includes:
    * Abstract Factory
    * Builder
    * Factory Method
    * Prototype
    * Singleton

2. **Structural**: Structural patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient. Includes:
    * Adapter
    * Bridge
    * Composite
    * Decorator
    * Facade
    * Flyweight
    * Proxy

3. **Behavioral**: Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects. Includes:
    * Chain of Resp
    * Command
    * Interpreter
    * Iterator
    * Mediator
    * Memento
    * Observer
    * State
    * Strategy
    * Template Method
    * Visitor


**Tip**: The order of design patterns isn't important. So, you can choose which one to learn, regardless of the category.

## Creational

### Singleton

> Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

```typescript
class Config {
  private static instance: Config | null = null;
  
  private volume: number;
  private theme: string;

  private constructor() {
    this.volume = 50;
    this.theme = "WHITE";
  }

  public static getInstance() {
    if (this.instance === null) {
      this.instance = new Config();
    }

    return this.instance;
  }

  public setVolume(newVolume: number): void {
    if (newVolume < 0) {
      this.volume = 0;
    } else if (newVolume > 100) {
      this.volume = 100;
    } else {
      this.volume = newVolume;
    }
  }

  public setTheme(newTheme: string) {
    const VALID_THEMES = ["WHITE", "YELLOW", "BLUE", "ORANGE", "CYAN", "BLACK"];

    if (VALID_THEMES.includes(newTheme.toUpperCase())) {
      this.theme = newTheme.toUpperCase();
    } else {
      this.theme = "WHITE";
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public getTheme(): string {
    return this.theme;
  }
}

// configOne === configTwo
const configOne = Config.getInstance();
const configTwo = Config.getInstance();
```


### Prototype

> Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

```typescript
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

  public setNumberOfProduct(numberOfProduct: number): void {
    if (numberOfProduct <= 0) {
      this.number = 0;
    } else {
      this.number = numberOfProduct;
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
```


### Builder

> Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

```typescript
interface IBuilder {
  buildGallery: () => void;
  buildPayment: () => void;
  buildNews: () => void;
}

class Page implements IBuilder {
  private fixedSections: string[];
  private dynamicSections: string[];

  constructor() {
    this.fixedSections = ["HEADER", "BODY", "FOOTER", "MENU", "ABOUT_US"];
    this.dynamicSections = [];
  }

  public buildGallery(): void {
    this.dynamicSections = [...this.dynamicSections, "GALLERY"];
  }

  public buildPayment(): void {
    this.dynamicSections = [...this.dynamicSections, "PAYMENT"];
  }

  public buildNews(): void {
    this.dynamicSections = [...this.dynamicSections, "NEWS"];
  }
}
```


### Factory Method

> Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

```typescript
interface PaymentService {
  payMoney: (amount: number) => void;
}

class Paypal implements PaymentService {
  public payMoney(amount: number) {
    console.log(`You pay ${amount} dollars by Paypal.`);
  }
}

class MasterCard implements PaymentService {
  public payMoney(amount: number) {
    console.log(`You pay ${amount} dollars by MasterCard.`);
  }
}


abstract class PaymentServiceFactory {
  public abstract createPaymentService(): PaymentService;

  public pay(amount: number): void {
    const paymentService = this.createPaymentService();

    paymentService.payMoney(amount);
  }
}

class PaypalFactory extends PaymentServiceFactory {
  public createPaymentService() {
    return new Paypal();
  }
}

class MasterCardFactory extends PaymentServiceFactory {
  public createPaymentService() {
    return new MasterCard();
  }
}
```


### Abstract Factory

> Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

```typescript
interface Movie {
  name: string;
  genres: string[];
  director: string;
  actors: string[];
  duration: number;
  play: () => void;
  stop: () => void;
  showSubtitle: (subtitle: File) => void;
  hideSubtitle: () => void;
}

interface AudioBook {
  name: string;
  categories: string[];
  writer: string;
  speaker: string;
  duration: number;
  play: () => void;
  stop: () => void;
  increaseSpeed: () => void;
  decreaseSpeed: () => void;
}

class AdultsMovie implements Movie {
  // Handle your class here
}

class ChildrenMovie implements Movie {
  // Handle your class here
}

class AdultsAudioBook implements AudioBook {
  // Handle your class here
}

class ChildrenAudioBook implements AudioBook {
  // Handle your class here
}

interface PackageOfferor {
  createVideo: () => Movie;
  createAudioBook: () => AudioBook;
}

class AdultsPackageOfferor implements PackageOfferor {
  getVideo() {
    return new AdultsMovie(/* Arguments */);
  }

  getBook() {
    return new AdultsAudioBook(/* Arguments */);
  }
}

class ChildrenPackageOfferor implements PackageOfferor {
  getVideo() {
    return new ChildrenMovie(/* Arguments */);
  }

  getBook() {
    return new ChildrenAudioBook(/* Arguments */);
  }
}
```


## Structural 

### Composite (Object Tree)

> Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.

```typescript
interface Composite {
  getAverage: () => number;
}

class Student implements Composite {
  private scores: number[];

  constructor(scores: number[]) {
    this.scores = scores;
  }

  getAverage(): number {
    return this.scores.reduce((a, b) => a + b) / this.scores.length;
  }
}

class Class implements Composite {
  private students: Student[];

  constructor(students: Student[]) {
    this.students = students;
  }

  getAverage(): number {
    return (
      this.students.reduce((a, b) => a + b.getAverage(), 0) /
      this.students.length
    );
  }
}

class School implements Composite {
  private classes: Class[];

  constructor(classes: Class[]) {
    this.classes = classes;
  }

  getAverage(): number {
    return (
      this.classes.reduce((a, b) => a + b.getAverage(), 0) / this.classes.length
    );
  }
}
```

### Adapter (Wrapper)

> Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

```typescript
interface StandardUser {
  getFullName: () => string;
  getBirthday: () => {
    year: number;
    month: number;
    day: number;
  };
  getSkills: () => [string, 1 | 2 | 3 | 4 | 5][];
}

class User {
  private firstName: string;
  private lastName: string;
  private birthday: Date;
  private skills: Record<string, 1 | 2 | 3 | 4 | 5>;

  constructor(
    firstName: string,
    lastName: string,
    birthday: Date,
    skills: Record<string, 1 | 2 | 3 | 4 | 5>
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.skills = skills;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getBirthday() {
    return this.birthday;
  }

  getSkills() {
    return this.skills;
  }
}

abstract class Services {
  static showResume(user: StandardUser): void {
    const { year, month, day } = user.getBirthday();

    console.log("Hi, my name is ", user.getFullName());
    console.log("I was born on ", `${day}/${month}/${year}.`);
    console.log("I am experienced in the following skills: ");

    user.getSkills().forEach((skill) => {
      const [name, level] = skill;
      console.log(`• ${name}: ${level}/5`);
    });
  }
}

class UserAdapter implements StandardUser {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  getFullName() {
    return `${this.user.getFirstName()} ${this.user.getLastName}`;
  }

  getBirthday() {
    return {
      year: this.user.getBirthday().getFullYear(),
      month: this.user.getBirthday().getMonth() + 1,
      day: this.user.getBirthday().getDate(),
    };
  }

  getSkills() {
    return Object.entries(this.user.getSkills());
  }
}
```


### Decorator (Wrapper)

> Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

```typescript
interface INotifier {
  sendMessage: (message: string) => void;
  setUsers: (users: string[]) => void;
  getUsers: () => string[];
}

class Notifier implements INotifier {
  private users: string[];

  constructor(users: string[]) {
    this.users = users;
  }

  public sendMessage(message: string) {
    this.users.forEach((user) => {
      // Show the `message` to the `user` on Web Application
    });
  }

  public setUsers(users: string[]) {
    this.users = users;
  }

  public getUsers() {
    return this.users;
  }
}

abstract class NotifierDecorator implements INotifier {
  protected notifier: INotifier;

  constructor(notifier: INotifier) {
    this.notifier = notifier;
  }

  public abstract sendMessage(message: string);

  public getUsers() {
    return this.notifier.getUsers();
  }

  public setUsers(users: string[]) {
    this.notifier.setUsers(users);
  }
}

class EmailNotifier extends NotifierDecorator {
  sendMessage(message: string) {
    notifier.getUsers().forEach((user) => {
      // Send the `message` to the `user` via Email
    });

    this.notifier.sendMessage(message);
  }
}

class SlackNotifier extends NotifierDecorator {
  sendMessage(message: string) {
    this.notifier.getUsers().forEach((user) => {
      // Send the `message` to the `user` via Slack
    });

    this.notifier.sendMessage(message);
  }
}

class SmsNotifier extends NotifierDecorator {
  sendMessage(message: string) {
    this.notifier.getUsers().forEach((user) => {
      // Send the `message` to the `user` via SMS
    });

    this.notifier.sendMessage(message);
  }
}

const notifier = new Notifier(["Ahmad", "Artin", "Ghazaleh"]);

const notifierByEmail = new EmailNotifier(notifier);
const notifierBySlack = new SlackNotifier(notifier);
const notifierBySMS = new SmsNotifier(notifier);

const notifierByEmailAndSlack = new EmailNotifier(new SlackNotifier(notifier));
const notifierByEmailAndSMS = new EmailNotifier(new SmsNotifier(notifier));
const notifierBySlackAndSMS = new SlackNotifier(new SmsNotifier(notifier));

const notifierByEmailAndSlackAndSMS = new EmailNotifier(
  new SlackNotifier(new SmsNotifier(notifier))
);
```


### Facade

> Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

```typescript
class Sound {
  constructor(soundLocation: string) {
    // Load sound
  }

  play() {
    // Play sound
  }
}

class SoundAnalyzer {
  constructor(soundAnalyzerBitrate: number) {
    // Load sound analyzer
  }

  analyze(sound: Sound) {
    // Analyze sound
  }

  getSoundData(): unknown[] {
    // Return analyzed sound data
    return [];
  }
}

class Graph {
  constructor(graphType: "2D" | "3D") {
    // Load graph
  }

  fillGraph(data: unknown[]) {
    // Draw sound data
  }
}

class DrawSoundSpectrum {
  public static drawSpectrum(
    soundLocation: string,
    soundAnalyzerBitrate: number,
    graphType: "2D" | "3D"
  ) {
    const sound = new Sound(soundLocation);
    const soundAnalyzer = new SoundAnalyzer(soundAnalyzerBitrate);
    const graph = new Graph(graphType);

    sound.play();
    soundAnalyzer.analyze(sound);
    const soundData = soundAnalyzer.getSoundData();
    graph.fillGraph(soundData);
  }
}
```


### Proxy

> Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

```typescript
interface IYouTube {
  getPlaylistVideos: (playlistId: string) => unknown[];
  downloadVideo: (videoId: string) => unknown;
}

class YouTube {
  getPlaylistVideos(playlistId: string): unknown[] {
    // Send a request to YouTube API and return the result
    return [];
  }
  
  downloadVideo(videoId: string): File {
    // Send a request to YouTube API and return the video file
    return new File([], "");
  }
}

class YouTubeProxy implements IYouTube {
  private youtube: YouTube;
  private connectionType: ConnectionType;
  private cache: Record<string, unknown[]>;

  constructor() {
    this.youtube = new YouTube();
    this.cache = {};
    this.connectionType = window.navigator.connection.type;
  }

  getPlaylistVideos(playlistId: string): unknown[] {
    if (this.cache[playlistId]) {
      return this.cache[playlistId];
    } else {
      const videos = this.youtube.getPlaylistVideos(playlistId);
      this.cache[playlistId] = videos;
      return videos;
    }
  }

  downloadVideo(videoId: string) {
    if (this.connectionType !== "wifi") {
      console.log("Only Wifi connection allowed to download videos!");
    } else {
      this.youtube.downloadVideo(videoId);
    }
  }
}
```


### Bridge

> Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

```typescript
interface BrokerageAccount {
  getAccessToken: () => string;
  getValueOfWaller: () => number;
  getAmountOfStocks: () => Record<string, number>;
}

class AlphaBrokerageAccount implements BrokerageAccount {
  public getAccessToken() {
    // Handle implementation specific logic
  }
  public getAmountOfStocks() {
    // Handle implementation specific logic
  }
  public getValueOfWaller() {
    // Handle implementation specific logic
  }
}

class BetaBrokerageAccount implements BrokerageAccount {
  public getAccessToken() {
    // Handle implementation specific logic
  }
  public getAmountOfStocks() {
    // Handle implementation specific logic
  }
  public getValueOfWaller() {
    // Handle implementation specific logic
  }
}

class TradingAccount {
  private brokerageAccount: BrokerageAccount;

  constructor(brokerageAccount: BrokerageAccount) {
    this.brokerageAccount = brokerageAccount;
  }

  public buy(stock: string, amount: number) {
    // Handle implementation specific logic
  }

  public sell(stock: string, amount: number) {
    // Handle implementation specific logic
  }
}

class SpecialTradeAccount extends TradingAccount {
  constructor(brokerageAccount: BrokerageAccount) {
    super(brokerageAccount);
  }

  public buyOnTime(stock: string, amount: number, time: Date) {
    // Handle implementation specific logic
  }

  public sellOnTime(stock: string, amount: number, time: Date) {
    // Handle implementation specific logic
  }
}
```


### Flyweight (Cache)

> Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

```typescript
enum Weapon {
  Uzi = "UZI",
  M4 = "M4",
  Shotgun = "SHOTGUN",
}

enum UniformColor {
  Green = "GREEN",
  Red = "RED",
  Black = "BLACK",
}

class SoldierFlyweight {
  private weapon: Weapon;
  private uniformColor: UniformColor;

  constructor(weapon: Weapon, uniformColor: UniformColor) {
    this.weapon = weapon;
    this.uniformColor = uniformColor;
  }

  public shootTo(enemyCoordinates: { x: number; y: number }) {
    if (this.weapon === Weapon.Uzi) {
      console.log("Uzi shoot to", enemyCoordinates);
    } else if (this.weapon === Weapon.M4) {
      console.log("M4 shoot to", enemyCoordinates);
    } else {
      console.log("Shotgun shoot to", enemyCoordinates);
    }
  }

  public getHurt(currentDamage: number) {
    if (this.uniformColor === UniformColor.Green) {
      return currentDamage - 50;
    } else if (this.uniformColor === UniformColor.Red) {
      return currentDamage - 35;
    } else {
      return currentDamage - 20;
    }
  }
}

abstract class SoldierFactory {
  private static soldierTypes: Record<string, SoldierFlyweight> = {};

  private static getKey(weapon: Weapon, uniformColor: UniformColor): string {
    return weapon + "-" + uniformColor;
  }

  public static getSoldierFlyweight(
    weapon: Weapon,
    uniformColor: UniformColor
  ) {
    const key = SoldierFactory.getKey(weapon, uniformColor);

    if (Object.keys(this.soldierTypes).includes(key) == null) {
      this.soldierTypes[key] = new SoldierFlyweight(weapon, uniformColor);
    }

    return this.soldierTypes[key];
  }
}

class Soldier {
  private damage: number;
  private coordinates: { x: number; y: number };
  private flyweight: SoldierFlyweight;

  constructor(damage: number, coordinates: { x: number; y: number }) {
    this.damage = damage;
    this.coordinates = coordinates;
  }

  public shootTo(enemyCoordinates: { x: number; y: number }) {
    const horizontalAxisDistance = this.coordinates.x - enemyCoordinates.x;
    const verticalAxisDistance = this.coordinates.y - enemyCoordinates.y;

    if (
      Math.sqrt(horizontalAxisDistance ** 2 + verticalAxisDistance ** 2) <= 100
    ) {
      this.flyweight.shootTo(enemyCoordinates);
    }
  }

  public getHurt() {
    const newDamage = this.flyweight.getHurt(this.damage);
    this.damage = newDamage;
    console.log(`Soldier new damage: ${newDamage}`);
  }
}
```
