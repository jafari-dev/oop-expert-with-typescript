class Page {
  private headerParts: Array<string>;
  private bodyParts: Array<string>;
  private footerParts: Array<string>;

  constructor() {
    this.headerParts = [];
    this.bodyParts = [];
    this.footerParts = [];
  }

  public setHeaderParts(...parts: Array<string>) {
    this.headerParts = parts;
  }

  public setBodyParts(...parts: Array<string>) {
    this.bodyParts = parts;
  }

  public setFooterParts(...parts: Array<string>) {
    this.footerParts = parts;
  }

  public getPage() {
    return {
      headerParts: this.headerParts,
      bodyParts: this.bodyParts,
      footerParts: this.footerParts,
    };
  }
}

interface PageBuilder {
  getPage: () => Page;
  buildHeader: () => void;
  buildBody: () => void;
  buildFooter: () => void;
}

class PersonalBlogPageBuilder implements PageBuilder {
  private page: Page;

  constructor() {
    this.page = new Page();
  }

  public getPage() {
    return this.page;
  }

  public buildHeader() {
    this.page.setHeaderParts("Title", "Author Information");
  }

  public buildBody() {
    this.page.setBodyParts("Recent Posts", "Favorite Posts", "Last Comments");
  }

  public buildFooter() {
    this.page.setFooterParts("CopyRights", "Author Email Address");
  }
}

class OnlineShopPageBuilder implements PageBuilder {
  private page: Page;

  constructor() {
    this.page = new Page();
  }

  public getPage() {
    return this.page;
  }

  public buildHeader() {
    this.page.setHeaderParts("Logo", "Description", "Products Category Menu");
  }

  public buildBody() {
    this.page.setBodyParts("New Products", "Daily Off", "Suggested Products");
  }

  public buildFooter() {
    this.page.setFooterParts("About Us", "Address", "Legal Certificate Link");
  }
}
