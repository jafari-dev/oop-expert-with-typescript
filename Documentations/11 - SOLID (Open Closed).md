### 2. Open/Closed (OCP)

> Software entities should be open for extension, but closed for modification.

<img src="https://user-images.githubusercontent.com/37804060/153056325-679b94dc-ea4f-4315-a682-93057845f9d5.jpg"/>

:x: Before following OCP:

```typescript
class OperatingSystem {
  getFilesExtension(os: string): string {
    if (os === "Windows") {
      return "exe";
    } else if (os === "Linux") {
      return "deb";
    } else if (os === "Macintosh") {
      return "dmg";
    } else {
      return "unknown";
    }
  }

  getCreator(os: string): string {
    if (os === "Windows") {
      return "Bill Gates";
    } else if (os === "Linux") {
      return "Linus Torvalds";
    } else if (os === "Macintosh") {
      return "Steve Jobs";
    } else {
      return "Unknown";
    }
  }

  getBornDate(os: string): number {
    if (os === "Windows") {
      return 1985;
    } else if (os === "Linux") {
      return 1991;
    } else if (os === "Macintosh") {
      return 1984;
    } else {
      return 0;
    }
  }
}
```

:heavy_check_mark: After following OCP:

```typescript
interface OperatingSystem {
  getFilesExtension: () => string;
  getCreator: () => string;
  getBornDate: () => number;
}

class Windows implements OperatingSystem {
  getFilesExtension() {
    return "exe";
  }

  getCreator() {
    return "Bill Gates";
  }

  getBornDate() {
    return 1985;
  }
}

class Linux implements OperatingSystem {
  getFilesExtension() {
    return "deb";
  }

  getCreator() {
    return "Linus Torvalds";
  }

  getBornDate() {
    return 1991;
  }
}

class Macintosh implements OperatingSystem {
  getFilesExtension() {
    return "dmg";
  }

  getCreator() {
    return "Steve Jobs";
  }

  getBornDate() {
    return 1984;
  }
}
```
