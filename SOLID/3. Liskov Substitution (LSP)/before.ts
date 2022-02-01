class Tablet {
  readBook(): void {
    console.log("Enjoy reading!");
  }

  openBrowser(): void {
    console.log("Start searching ...");
  }
}

class KidsTablet extends Tablet {
  override openBrowser(): Error {
    throw Error("Kids haven't access to the browser!");
  }
}
