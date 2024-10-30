### Builder

> Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

<img src="https://user-images.githubusercontent.com/37804060/165857814-d11b7310-ec21-4596-9d53-26fc2acf1a57.png"/>

#### Example Context

In this example, we illustrate the Builder pattern through the creation of a `Page` object, which can represent different types of web pages with varying headers, bodies, and footers. We utilize builders to construct pages for specific purposes, like a personal blog or an online shop.

- **Main Class:**
  - `Page`: Represents a web page composed of header, body, and footer parts. It provides methods to set these parts.

- **Builder Interface:**
  - `PageBuilder`: Declares the generic methods for constructing different parts of a `Page` object, including the header, body, and footer.

- **Concrete Builders:**
  - `PersonalBlogPageBuilder`: Implements the `PageBuilder` interface to construct a page suitable for a personal blog. The header, body, and footer have blog-specific parts.
  - `OnlineShopPageBuilder`: Another implementation of the `PageBuilder` interface for creating a page suited for an online shop, with distinct sections in the header, body, and footer.

##### Purpose

The Builder pattern is employed here to manage the construction of a `Page` object that may consist of various optional parts, which allows for more flexible and maintainable code. By using different builders, we can easily create different representations of a page without altering the underlying logic and construction process.

##### How It Works

- **Initialization**: Each specific `PageBuilder` implementation initializes a new `Page` object.
- **Building Process**: The client calls the builder's methods to set up each part of the page:
  - `buildHeader()`: Constructs the header based on the page type.
  - `buildBody()`: Adds the body components specific to the page context.
  - `buildFooter()`: Defines the footer layout.

Upon completion, the `getPage()` method is used to retrieve the fully constructed `Page` object.

This organized step-by-step construction process makes it easier to create complex page objects that can be adapted and extended to accommodate new requirements without modifying existing code directly, following SOLID principles effectively.

[EXAMPLE-FILE-ADDRESS](/Examples/DP/Builder.ts)
