# Object Oriented Programming Expert With TypeScript

This repository is a complete guide and tutorial for the principles and techniques of object-oriented programming. It can be a reference for all interested in programming and software developers. You will find simple and practical examples in all sections to make the concepts easier to understand.


<p>
  <img src="https://user-images.githubusercontent.com/37804060/151722505-c16e7705-4533-48af-aebb-9d22f15c9ed0.png"/>
</p>


## Pillars of OOP

1. <strong>Abstraction</strong>
2. <strong>Encapsulation</strong>
3. <strong>Inheritance</strong>
4. <strong>Polymorphism</strong>

## SOLID Principles

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
  getFilesExtention(os: string): string {
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
  getFilesExtention: () => string;
  getCreator: () => string;
  getBornDate: () => number;
}

class Windows implements OperatingSystemInfo {
  getFilesExtention() {
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
  getFilesExtention() {
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
  getFilesExtention() {
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
    console.log("You are connected to Telegeram API!");
  }

  messageTo(targetId: number, message: string) {
    console.log(message + " sent to " + targetId + " by Telegram!");
  }
}

class WhatsappApi {
  setup() {
    console.log("You are connected to Whatsapp API!");
  }

  pushMeesage(message: string, targetId: number) {
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
      this.api.pushMeesage(message, targetId);
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
    console.log("You are connected to Telegeram API!");
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

There are 24 design patterns that are grouped into 3 categories:

1. **Creational**: Creational patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.
2. **Structural**: Structural patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.
3. **Behavioral**: Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.


* Creational:
    * Abstract Factory
    * Builder
    * Factory Method
    * Factory Method
    * Prototype
    * Singleton

* Behavioral:
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

* Structural:
    * Adapter
    * Bridge
    * Composite
    * Decorator
    * Facade
    * Flyweight
    * Proxy


**Tip**: The order of design patterns isn't important. So, you can choose which one to learn, regardless of the category.

## Creational

### Singleton

> Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

```typescript
class Config {
  private static instance: Config | null = null;
  
  private volumn: number;
  private theme: string;

  private constructor() {
    this.volumn = 50;
    this.theme = "WHITE";
  }

  public static getInstance() {
    if (this.instance === null) {
      this.instance = new Config();
    }

    return this.instance;
  }

  public setVolumn(newVolumn: number): void {
    if (newVolumn < 0) {
      this.volumn = 0;
    } else if (newVolumn > 100) {
      this.volumn = 100;
    } else {
      this.volumn = newVolumn;
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

  public getVolumn(): number {
    return this.volumn;
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
```


### Builder

> Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

```typescript
interface IBuilder {
  buildGallary: () => void;
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

  public buildGallary(): void {
    this.dynamicSections = [...this.dynamicSections, "GALLARY"];
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