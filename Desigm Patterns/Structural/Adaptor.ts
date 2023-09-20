interface StandardUser {
  fullName: string;
  skills: string[];
  age: number;
  contact: {
    email: string;
    phone: string;
  };
}

abstract class ResumeServiceApi {
  static generateResume(data: StandardUser) {
    /* Implementation */
  }
}

class User {
  readonly firstName: string;
  readonly lastName: string;
  readonly birthday: Date;
  readonly skills: Record<string, 1 | 2 | 3 | 4 | 5>;
  readonly email?: string;
  readonly phone?: string;

  constructor({
    firstName,
    lastName,
    birthday,
    skills,
    email,
    phone,
  }: {
    firstName: string;
    lastName: string;
    birthday: Date;
    skills: Record<string, 1 | 2 | 3 | 4 | 5>;
    email?: string;
    phone?: string;
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.skills = skills;
    this.email = email;
    this.phone = phone;
  }
}

class UserAdapter implements StandardUser {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  get fullName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  get skills() {
    return Object.keys(this.user.skills);
  }

  get age() {
    return new Date().getFullYear() - this.user.birthday.getFullYear();
  }

  get contact() {
    return {
      email: this.user.email ?? "",
      phone: this.user.phone ?? "",
    };
  }
}

// Use case

const user = new User({
  firstName: "Ahmad",
  lastName: "Jafari",
  birthday: new Date(1999, 1, 5, 0, 0, 0, 0),
  skills: {
    TypeScript: 5,
    JavaScript: 3,
    OOP: 5,
    CSharp: 2,
    Java: 1
  },
  email: "me@jafari.dev",
  phone: "+98 930 XXXX"
})

// const resume = ResumeServiceApi.generateResume(user); |-> Type Error!

const standardUser = new UserAdapter(user);
const resume = ResumeServiceApi.generateResume(standardUser); // OK!