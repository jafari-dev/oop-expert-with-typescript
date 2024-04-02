### 3. Liskov Substitution (LSP)

#### Original Definition

> If `S` is a subtype of `T`, then objects of type `T` in a program may be replaced with objects of type `S` without altering any of the desirable properties of that program.

#### Simple Definition

> The LSP says that if you have a class, you should be able to use any of its subclasses interchangeably without breaking the program.

<img src="https://user-images.githubusercontent.com/37804060/153056329-914cbbba-685b-452b-9dcf-4fcf6a4faabc.jpg"/>

#### Example

In the initial example, we have an `ImageProcessor` class responsible for various image processing operations such as **compression**, **enhancing size**, **removing background**, and **enhancing quality with AI**. There's also a `LimitedImageProcessor` class that extends `ImageProcessor`, but it overrides the `removeBackground` and `enhanceQualityWithAI` methods to throw errors indicating that these features are only available in the premium version.

This violates the Liskov Substitution Principle because substituting an instance of `LimitedImageProcessor` for an instance of `ImageProcessor` could lead to unexpected errors if code relies on those overridden methods.

To adhere to the LSP, we refactor the classes. We create a `PremiumImageProcessor` class that extends `ImageProcessor` and implements the `removeBackground` and `enhanceQualityWithAI` methods. This way, both classes share a common interface and substituting an instance of `PremiumImageProcessor` for an instance of `ImageProcessor` won't break the program's correctness.

In the refactored version, `ImageProcessor` is now focused on basic image processing operations like compression and enhancing size, while `PremiumImageProcessor` extends it to include premium features like removing background and enhancing quality with AI. This separation allows for better code organization and adherence to the Liskov Substitution Principle.

:x: Before following LSP:

```typescript
class AudioProcessor {
  constructor(protected audioFile: File) {}

  compress() {
    // Compress the size of the audio
  }

  changeTempo() {
    // Increase the size of the audio
  }

  separateMusicAndVocal() {
    // Remove the background of the audio
  }

  enhanceQualityWithAI() {
    // Enhance the quality of the audio with AI
  }
}

class LimitedAudioProcessor extends AudioProcessor {
  constructor(audioFile: File) {
    super(audioFile);
  }

  override separateMusicAndVocal(): Error {
    throw Error("You have to buy the premium version to access this feature!");
  }

  override enhanceQualityWithAI(): Error {
    throw Error("You have to buy the premium version to access this feature!");
  }
}
```

:heavy_check_mark: After following LSP:

```typescript
class AudioProcessor {
  constructor(protected audioFile: File) {}

  compress() {
    // Compress the size of the audio
  }

  changeTempo() {
    // Increase the size of the audio
  }
}

class PremiumAudioProcessor extends AudioProcessor {
  constructor(audioFile: File) {
    super(audioFile);
  }

  separateMusicAndVocal() {
    // Remove the background of the audio
  }

  enhanceQualityWithAI() {
    // Enhance the quality of the audio with AI
  }
}
```
