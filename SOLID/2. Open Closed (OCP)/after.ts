interface OperatingSystemInfo {
  getFilesExtension: () => string;
  getCreator: () => string;
  getBornDate: () => number;
}

class Windows implements OperatingSystemInfo {
  getFilesExtension() {
    return "exe";
  }

  getCreator() {
    return "Bill Gates";
  }

  getBornDate() {
    return 1985;
  };
}

class Linux implements OperatingSystemInfo {
  getFilesExtension() {
    return "deb";
  }

  getCreator() {
    return "Linus Torvalds";
  }

  getBornDate() {
    return 1991;
  };
}

class Macintosh implements OperatingSystemInfo {
  getFilesExtension() {
    return "dmg";
  }

  getCreator() {
    return "Steve Jobs";
  }

  getBornDate() {
    return 1984;
  };
}
