interface OperatingSystemInfo {
  getFilesExtention: () => string;
  getCreator: () => string;
  getBornDate: () => number;
}

class Windows implements OperatingSystemInfo {
  getFilesExtention() {
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
  getFilesExtention() {
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
  getFilesExtention() {
    return "dmg";
  }

  getCreator() {
    return "Steve Jobs";
  }

  getBornDate() {
    return 1984;
  };
}
