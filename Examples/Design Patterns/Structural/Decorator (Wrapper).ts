interface ImageProcessor {
  processImage: () => File;
}

class ImageFile implements ImageProcessor {
  private image: File;

  constructor(imageBlobs: Blob[], imageName: string) {
    this.image = new File(imageBlobs, imageName);
  }

  processImage() {
    // Converts the blobs to a visible image
    return this.image;
  }
}

abstract class ImageDecorator implements ImageProcessor {
  protected image: File;

  constructor(image: File) {
    this.image = image;
  }

  abstract processImage(): File;
}

class ImageCompressor extends ImageDecorator {
  processImage(): File {
    // Compresses image size
    return this.image;
  }
}

class ImageEnhancer extends ImageDecorator {
  processImage(): File {
    // Enhances image quality
    return this.image;
  }
}

class ImageResizer extends ImageDecorator {
  processImage() {
    // Changes image width and height
    return this.image;
  }
}

// Usage

const image = new ImageFile([], "Picture.jpg").processImage();
const compressedImage = new ImageCompressor(image).processImage();
const enhancedImage = new ImageCompressor(compressedImage).processImage();
const resizedImage = new ImageResizer(enhancedImage).processImage();
