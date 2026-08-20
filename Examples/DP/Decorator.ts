interface ImageProcessor {
  processImage: () => File;
}

class ImageFile implements ImageProcessor {
  private image: File;

  constructor(imageBlobs: Array<Blob>, imageName: string) {
    this.image = new File(imageBlobs, imageName);
  }

  processImage() {
    // Converts the blobs to a visible image
    return this.image;
  }
}

// Every decorator wraps another `ImageProcessor` (not a raw `File`), so decorators
// can be stacked on top of each other in any order and any number of times.
abstract class ImageDecorator implements ImageProcessor {
  protected wrapped: ImageProcessor;

  constructor(wrapped: ImageProcessor) {
    this.wrapped = wrapped;
  }

  abstract processImage(): File;
}

class ImageCompressor extends ImageDecorator {
  processImage(): File {
    const image = this.wrapped.processImage();

    // Compresses image size

    return image;
  }
}

class ImageEnhancer extends ImageDecorator {
  processImage(): File {
    const image = this.wrapped.processImage();

    // Enhances image quality

    return image;
  }
}

class ImageResizer extends ImageDecorator {
  processImage(): File {
    const image = this.wrapped.processImage();

    // Changes image width and height

    return image;
  }
}

// Usage

const image = new ImageFile([], "Picture.jpg");

// Decorators are composed, then the whole stack runs with a single call.
const processedImage = new ImageResizer(new ImageEnhancer(new ImageCompressor(image)));

const result: File = processedImage.processImage();
