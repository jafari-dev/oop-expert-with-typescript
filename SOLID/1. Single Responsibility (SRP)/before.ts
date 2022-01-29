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
