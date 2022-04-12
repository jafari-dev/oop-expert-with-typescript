interface Movie {
  name: string;
  genres: string[];
  director: string;
  actors: string[];
  duration: number;
  play: () => void;
  stop: () => void;
  showSubtitle: (subtitle: File) => void;
  hideSubtitle: () => void;
}

interface AudioBook {
  name: string;
  categories: string[];
  writer: string;
  speaker: string;
  duration: number;
  play: () => void;
  stop: () => void;
  increaseSpeed: () => void;
  decreaseSpeed: () => void;
}

class AdultsMovie implements Movie {
  // Handle your class here
}

class ChildrenMovie implements Movie {
  // Handle your class here
}

class AdultsAudioBook implements AudioBook {
  // Handle your class here
}

class ChildrenAudioBook implements AudioBook {
  // Handle your class here
}

interface PackageOfferor {
  createVideo: () => Movie;
  createAudioBook: () => AudioBook;
}

class AdultsPackageOfferor implements PackageOfferor {
  getVideo() {
    return new AdultsMovie(/* Arguments */);
  }

  getBook() {
    return new AdultsAudioBook(/* Arguments */);
  }
}

class ChildrenPackageOfferor implements PackageOfferor {
  getVideo() {
    return new ChildrenMovie(/* Arguments */);
  }

  getBook() {
    return new ChildrenAudioBook(/* Arguments */);
  }
}
