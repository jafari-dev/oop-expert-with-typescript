class ImageProcessor {
  compress(): void {
    // Compress the image
  }

  enhanceSize(): void {
    // Increase the size of the image
  }

  removeBackground(): void {
    // Remove the background of the image
  }

  enhanceQualityWithAI(): void {
    // Enhance the quality of the image with AI
  }
}

class LimitedImageProcessor extends ImageProcessor {
  override removeBackground(): Error {
    throw Error("You have to buy the premium version to access this feature!");
  }

  override enhanceQualityWithAI(): Error {
    throw Error("You have to buy the premium version to access this feature!");
  }
}
