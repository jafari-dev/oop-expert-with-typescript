### Abstract Factory

> Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes. This pattern is particularly useful when a system needs to be independent of the way its products are created, composed, and represented. It also helps in enforcing that a set of products follow a consistent theme across different platforms.

<img src="https://user-images.githubusercontent.com/37804060/165858016-40c37caf-d0c4-421c-8fca-a423d5add360.png"/>

#### Example Context

In this example, we demonstrate the Abstract Factory pattern through a media API system where different types of API providers (`Normal` and `Premium`) can be generated for movies and audio tracks. Each provider offers multiple ways to search within its respective domain.

- **Interfaces Defined:**
  - `Movie`: Represents the structure of a movie object.
  - `AudioTrack`: Represents the structure of an audio track object.
  - `MovieApi` and `AudioApi`: Define the set of operations available for interacting with movies and audio tracks, respectively.

- **Concrete Implementations:**
  - `NormalMovieApiProvider` and `NormalAudioApiProvider`: Implement the `MovieApi` and `AudioApi` interfaces with standard search operations.
  - `PremiumMovieApiProvider` and `PremiumAudioApiProvider`: Similar to the normal providers but designed to represent premium service capabilities.

- **Factory Interfaces and Implementations:**
  - `ApiProviderFactory`: Defines the methods for creating movie and audio API providers.
  - `NormalApiProviderFactory` and `PremiumApiProviderFactory`: Implementations of the factory interface that create instances of normal and premium API providers.

##### Purpose

This pattern allows for the dynamic creation of `MovieApi` and `AudioApi` services that adhere to whether the user has access to normal or premium features. The flexibility provided by the Abstract Factory pattern makes it easier to extend and maintain the system, as new provider types can be added with minimal changes to existing code.

##### How It Works

- A client first decides on the type of factory to use (`NormalApiProviderFactory` or `PremiumApiProviderFactory`).
- The factory then creates instances of `MovieApi` and `AudioApi` providers based on the chosen type.
- From there, the client can utilize these providers to perform various search operations tailored to their specific needs.

By abstracting the creation process, the code is cleaner and adheres to SOLID principles, making it a flexible solution for varying user tiers in media applications.

[EXAMPLE-FILE-ADDRESS](/Examples/DP/AbstractFactory.ts)
