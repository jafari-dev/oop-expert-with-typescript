### Encapsulation

> Encapsulation is defined as the wrapping up of data under a single unit. It is the mechanism that binds together code and the data it manipulates. In Encapsulation, the variables or data of a class are hidden from any other class and can be accessed only through any member function of their class in which they are declared. As in encapsulation, the data in a class is hidden from other classes, so it is also known as data-hiding.

Let's consider a simple example where encapsulation is used to control access to sensitive data. Imagine we have a `User` class representing users in a system, and we want to ensure that the user's password is not directly accessible from outside the class.

```typescript
class User {
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  // Method to authenticate user
  authenticate(enteredPassword: string): boolean {
    return enteredPassword === this.password;
  }

  // Method to change password
  changePassword(newPassword: string): void {
    this.password = newPassword;
  }
}

// Create a user
const user = new User("Ahmad Jafari", "abcd1234");

console.log(user.authenticate("12345678")); // Output: false
console.log(user.authenticate("abcd1234")); // Output: true

user.changePassword("Ab1234!?");

console.log(user.authenticate("abcd1234")); // Output: false
console.log(user.authenticate("Ab1234!?")); // Output: true
```

In this example:

- We define a `User` class with a private property `password`.
- `password` property is encapsulated and cannot be directly accessed.
- We provide public methods `authenticate()` to verify the user's password and `changePassword()` to allow users to change their password.
- Accessing or modifying the password property directly from outside the class is not allowed due to its private access modifier.
- Encapsulation ensures that sensitive data (password) is hidden and can only be accessed or modified through controlled methods, enhancing security and preventing unauthorized access or manipulation.

[`⬆ BACK TO TOP ⬆`](#table-of-contents)
