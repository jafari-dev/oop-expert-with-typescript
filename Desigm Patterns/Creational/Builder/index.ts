interface IBuilder {
  buildGallery: () => void;
  buildPayment: () => void;
  buildNews: () => void;
}

class Page implements IBuilder {
  private fixedSections: string[];
  private dynamicSections: string[];

  constructor() {
    this.fixedSections = ["HEADER", "BODY", "FOOTER", "MENU", "ABOUT_US"];
    this.dynamicSections = [];
  }

  public buildGallery(): void {
    this.dynamicSections = [...this.dynamicSections, "GALLERY"];
  }

  public buildPayment(): void {
    this.dynamicSections = [...this.dynamicSections, "PAYMENT"];
  }

  public buildNews(): void {
    this.dynamicSections = [...this.dynamicSections, "NEWS"];
  }
}
