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
