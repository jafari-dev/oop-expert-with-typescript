interface Visitor {
  visitDesigner(manager: Designer): void;
  visitDeveloper(developer: Developer): void;
}

interface Employee {
  accept(visitor: Visitor): void;
}

class Designer implements Employee {
  name: string;
  numberOfDesignedPages: number;

  constructor(name: string, numberOfDesignedPages: number) {
    this.name = name;
    this.numberOfDesignedPages = numberOfDesignedPages;
  }

  accept(visitor: Visitor): void {
    visitor.visitDesigner(this);
  }
}

class Developer implements Employee {
  name: string;
  baseSalary: number;
  storyPoints: number;

  constructor(name: string, baseSalary: number, storyPoints: number) {
    this.name = name;
    this.baseSalary = baseSalary;
    this.storyPoints = storyPoints;
  }

  accept(visitor: Visitor): void {
    visitor.visitDeveloper(this);
  }
}

class SalaryCalculator implements Visitor {
  totalSalary: number = 0;

  visitDesigner(manager: Designer): void {
    this.totalSalary += manager.numberOfDesignedPages * 200;
  }

  visitDeveloper(developer: Developer): void {
    this.totalSalary += developer.baseSalary + developer.storyPoints * 30;
  }
}

// Usage
const employees: Array<Employee> = [
  new Designer("Alice", 15),
  new Designer("James", 20),
  new Developer("Ahmad", 3000, 40),
  new Developer("Kate", 2000, 60),
];

const salaryCalculator = new SalaryCalculator();

for (const employee of employees) {
  employee.accept(salaryCalculator);
}

console.log("Total salary:", salaryCalculator.totalSalary);
