interface StandardUser {
  getFullName: () => string;
  getBirthday: () => {
    year: number;
    month: number;
    day: number;
  };
  getSkills: () => [string, 1 | 2 | 3 | 4 | 5][];
}

class User {
  private firstName: string;
  private lastName: string;
  private birthday: Date;
  private skills: Record<string, 1 | 2 | 3 | 4 | 5>;

  constructor(
    firstName: string,
    lastName: string,
    birthday: Date,
    skills: Record<string, 1 | 2 | 3 | 4 | 5>
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.skills = skills;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getBirthday() {
    return this.birthday;
  }

  getSkills() {
    return this.skills;
  }
}

abstract class Services {
  static showResume(user: StandardUser): void {
    const { year, month, day } = user.getBirthday();

    console.log("Hi, my name is ", user.getFullName());
    console.log("I was born on ", `${day}/${month}/${year}.`);
    console.log("I am experienced in the following skills: ");

    user.getSkills().forEach((skill) => {
      const [name, level] = skill;
      console.log(`• ${name}: ${level}/5`);
    });
  }
}

class UserAdapter implements StandardUser {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  getFullName() {
    return `${this.user.getFirstName()} ${this.user.getLastName}`;
  }

  getBirthday() {
    return {
      year: this.user.getBirthday().getFullYear(),
      month: this.user.getBirthday().getMonth() + 1,
      day: this.user.getBirthday().getDate(),
    };
  }

  getSkills() {
    return Object.entries(this.user.getSkills());
  }
}
