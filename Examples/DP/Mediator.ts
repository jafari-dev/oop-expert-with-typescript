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
