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

### 1. Single Responsibility (SRP)

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
