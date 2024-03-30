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
  private snapshots: EditorMemento[] = [];

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
