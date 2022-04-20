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
