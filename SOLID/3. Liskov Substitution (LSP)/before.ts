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
