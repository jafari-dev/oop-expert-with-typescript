### 3. Liskov Substitution (LSP)

> If `S` is a subtype of `T`, then objects of type `T` in a program may be replaced with objects of type `S` without altering any of the desirable properties of that program.

<img src="https://user-images.githubusercontent.com/37804060/153056329-914cbbba-685b-452b-9dcf-4fcf6a4faabc.jpg"/>

:x: Before following LSP:

```typescript
class Tablet {
  readBook(): void {
    // Read a book
  }

  playMovie(): void {
    // Play a movie
  }

  playCartoon(): void {
    // Play a cartoon
  }

  openBrowser(): void {
    // Open a browser
  }
}

class KidsTablet extends Tablet {
  override openBrowser(): Error {
    throw Error("Kids haven't access to the browser!");
  }

  override playMovie(): Error {
    throw Error("Kids haven't access to the movies!");
  }
}
```

:heavy_check_mark: After following LSP:

```typescript
class Tablet {
  readBook(): void {
    // Read a book
  }

  playCartoon(): void {
    // Play a cartoon
  }
}

class AdultsTablet extends Tablet {
  playMovie(): void {
    // Play a movie
  }

  openBrowser(): void {
    // Open a browser
  }
}
```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)
