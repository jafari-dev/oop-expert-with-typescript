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
