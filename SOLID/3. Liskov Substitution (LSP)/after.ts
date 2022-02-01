class Tablet {
  readBook(): void {
    console.log("Enjoy reading!");
  }
}

class AdultsTablet extends Tablet {
  openBrowser(): void {
    console.log("Start searching ...");
  }
}
