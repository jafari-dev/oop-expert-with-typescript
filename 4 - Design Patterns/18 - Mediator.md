### Mediator

> Mediator is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/e898a7aa-a40e-4679-af89-e41d26d77cfb"/>

```typescript
interface ChatMediator {
  sendMessage(receiver: User, message: string): void;
}

class ConcreteChatMediator implements ChatMediator {
  private users: User[] = [];

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
