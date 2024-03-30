abstract class BaseUnit<T> {
  constructor(
    private readonly id: string,
    private readonly units: BaseUnit<T>[] = []
  ) {}

  getUnit(unitId: string): BaseUnit<T> | null {
    return this.units.find((unit) => unit.id === unitId) ?? null;
  }

  getSalary(): number {
    return this.units.reduce((acc, unit) => acc + unit.getSalary(), 0);
  }

  increaseSalary(percentage: number): void {
    this.units.forEach((unit) => unit.increaseSalary(percentage));
  }
}

class Employee extends BaseUnit<null> {
  private salary: number;

  constructor(id: string, salary: number) {
    super(id);
    this.salary = salary;
  }

  getUnit(): never {
    throw new Error("Employee cannot have sub-units");
  }

  getSalary() {
    return this.salary;
  }

  increaseSalary(percentage: number) {
    this.salary = this.salary + (this.salary * percentage) / 100;
  }
}

class Department extends BaseUnit<Employee> {}

class Faculty extends BaseUnit<Department> {}

class University extends BaseUnit<Faculty> {}

// Usage

const harvardUniversity = new University("Harvard", [
  new Faculty("Engineering", [
    new Department("Computer", [
      new Employee("C1", 6200),
      new Employee("C2", 5400),
      new Employee("C3", 5600),
    ]),
    new Department("Electrical", [
      new Employee("E1", 4800),
      new Employee("E2", 5800),
    ]),
  ]),
  new Faculty("Science", [
    new Department("Physics", [
      new Employee("P1", 3800),
      new Employee("P2", 4600),
    ]),
    new Department("Mathematics", [
      new Employee("M1", 5200),
      new Employee("M2", 5600),
      new Employee("M3", 4600),
    ]),
  ]),
]);

console.log(harvardUniversity.getSalary());
harvardUniversity.increaseSalary(10);
console.log(harvardUniversity.getSalary());

const engineeringFaculty = harvardUniversity.getUnit("Engineering") as Faculty;
console.log(engineeringFaculty.getSalary());
engineeringFaculty.increaseSalary(10);
console.log(engineeringFaculty.getSalary());

const computerDepartment = engineeringFaculty.getUnit("Computer") as Department;
console.log(computerDepartment.getSalary());
computerDepartment.increaseSalary(10);
console.log(computerDepartment.getSalary());

const employee = computerDepartment.getUnit("C1") as Employee;
console.log(employee.getSalary());
employee.increaseSalary(10);
console.log(employee.getSalary());
