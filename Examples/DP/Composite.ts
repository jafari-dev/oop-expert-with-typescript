interface OrganizationUnit {
  readonly id: string;
  getSalary(): number;
  increaseSalary(percentage: number): void;
}

// The type parameter names the kind of child a composite may hold, so nesting
// mistakes (e.g. a faculty inside a department) are caught at compile time.
abstract class CompositeUnit<TChild extends OrganizationUnit> implements OrganizationUnit {
  constructor(
    public readonly id: string,
    private readonly children: ReadonlyArray<TChild> = [],
  ) {}

  getUnit(unitId: string): TChild | null {
    return this.children.find((child) => child.id === unitId) ?? null;
  }

  getSalary(): number {
    return this.children.reduce((total, child) => total + child.getSalary(), 0);
  }

  increaseSalary(percentage: number): void {
    for (const child of this.children) {
      child.increaseSalary(percentage);
    }
  }
}

// The leaf of the tree: it has no children, but exposes the same operations.
class Employee implements OrganizationUnit {
  constructor(
    public readonly id: string,
    private salary: number,
  ) {}

  getSalary(): number {
    return this.salary;
  }

  increaseSalary(percentage: number): void {
    this.salary = this.salary + (this.salary * percentage) / 100;
  }
}

class Department extends CompositeUnit<Employee> {}

class Faculty extends CompositeUnit<Department> {}

class University extends CompositeUnit<Faculty> {}

// Usage

const harvardUniversity = new University("Harvard", [
  new Faculty("Engineering", [
    new Department("Computer", [new Employee("C1", 6200), new Employee("C2", 5400), new Employee("C3", 5600)]),
    new Department("Electrical", [new Employee("E1", 4800), new Employee("E2", 5800)]),
  ]),
  new Faculty("Science", [
    new Department("Physics", [new Employee("P1", 3800), new Employee("P2", 4600)]),
    new Department("Mathematics", [new Employee("M1", 5200), new Employee("M2", 5600), new Employee("M3", 4600)]),
  ]),
]);

// A whole subtree and a single employee are treated exactly the same way.
console.log(harvardUniversity.getSalary()); // Output: 51600
harvardUniversity.increaseSalary(10);
console.log(harvardUniversity.getSalary()); // Output: 56760

// `getUnit` returns the precise child type, so no type assertion is needed.
const engineeringFaculty = harvardUniversity.getUnit("Engineering");

if (engineeringFaculty != null) {
  const computerDepartment = engineeringFaculty.getUnit("Computer");

  if (computerDepartment != null) {
    console.log(computerDepartment.getSalary()); // Output: 18920
    computerDepartment.increaseSalary(10);
    console.log(computerDepartment.getSalary()); // Output: 20812
  }
}
