class OperatingSystemInfo {
  getFilesExtension(os: string): string {
    if (os === "Windows") {
      return "exe";
    }
    else if (os === "Linux") {
      return "deb";
    }
    else if (os === "Macintosh") {
      return "dmg";
    }
    else {
      return "unknown!";
    }
  }

  getCreator(os: string): string {
    if (os === "Windows") {
      return "Bill Gates";
    }
    else if (os === "Linux") {
      return "Linus Torvalds";
    }
    else if (os === "Macintosh") {
      return "Steve Jobs";
    }
    else {
      return "Unknown!"
    }
  }

  getBornDate(os: string): number {
    if (os === "Windows") {
      return 1985;
    }
    else if (os === "Linux") {
      return 1991;
    }
    else if (os === "Macintosh") {
      return 1984;
    }
    else {
      return -1;
    }
  }
}
