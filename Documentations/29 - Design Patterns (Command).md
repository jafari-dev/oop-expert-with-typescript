### Command

> Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/c685b9d8-f7a5-4915-b75c-4e897fe70014"/>

```typescript
interface Command {
  execute(): void;
  undo(): void;
}

class AddTextCommand implements Command {
  private prevText: string;

  constructor(private editor: TextEditor, private text: string) {}

  execute() {
    this.prevText = this.editor.content;
    this.editor.content += this.text;
  }

  undo() {
    this.editor.content = this.prevText;
  }
}

class DeleteTextCommand implements Command {
  private prevText: string;

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
  private commandHistory: Command[] = [];
  private currentCommandIndex: number = -1;

  executeCommand(command: Command) {
    if (this.currentCommandIndex < this.commandHistory.length - 1) {
      this.commandHistory = this.commandHistory.slice(
        0,
        this.currentCommandIndex + 1
      );
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
