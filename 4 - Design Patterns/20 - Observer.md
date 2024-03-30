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
  private followers: Observer[];
  private posts: string[];

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
    console.log(
      `${this.followerName} received a notification: ${notification}`
    );
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
