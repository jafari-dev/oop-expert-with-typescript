### Builder

> Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

<img src="https://user-images.githubusercontent.com/37804060/165857814-d11b7310-ec21-4596-9d53-26fc2acf1a57.png"/>

```typescript
class Page {
  private headerParts: string[];
  private bodyParts: string[];
  private footerParts: string[];

  constructor() {
    this.headerParts = [];
    this.bodyParts = [];
    this.footerParts = [];
  }

  public setHeaderParts(...parts: string[]) {
    this.headerParts = parts;
  }

  public setBodyParts(...parts: string[]) {
    this.bodyParts = parts;
  }

  public setFooterParts(...parts: string[]) {
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
```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)