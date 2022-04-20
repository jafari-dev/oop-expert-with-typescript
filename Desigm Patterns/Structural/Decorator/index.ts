interface IPhoto {
  getImage: () => File;
}

class Photo implements IPhoto {
  private file: File;

  constructor(file: File) {
    this.file = file;
  }

  public getImage(): File {
    return this.file;
  }
}

class PhotoDecorator implements IPhoto {
  protected photo: IPhoto;

  constructor(photo: IPhoto) {
    this.photo = photo;
  }

  public getImage() {
    return this.photo.getImage();
  }
}

class PhotoCompressorDecorator extends PhotoDecorator {
  public getImage() {
    const newImage = this.photo.getImage();
    // Do some processes on the new image and compress it
    return newImage;
  }
}

class PhotoConverterDecorator extends PhotoDecorator {
  public getImage() {
    const newImage = this.photo.getImage();
    // Do some processes on the new image and convert its format
    return newImage;
  }
}

class PhotoEnhancerDecorator extends PhotoDecorator {
  public getImage() {
    const newImage = this.photo.getImage();
    // Do some processes on the new image and enhance its quality
    return newImage;
  }
}

const myPhoto = new Photo(new File([], "myPhoto.jpg"));

const compressedImage = new PhotoCompressorDecorator(myPhoto);
const convertedImage = new PhotoConverterDecorator(myPhoto);
const enhancedImage = new PhotoEnhancerDecorator(myPhoto);

const compressedConvertedImage = new PhotoConverterDecorator(
  new PhotoCompressorDecorator(myPhoto)
);
const compressedEnhancedImage = new PhotoEnhancerDecorator(
  new PhotoCompressorDecorator(myPhoto)
);
const convertedEnhancedImage = new PhotoEnhancerDecorator(
  new PhotoConverterDecorator(myPhoto)
);

const compressedConvertedEnhancedImage = new PhotoEnhancerDecorator(
  new PhotoConverterDecorator(new PhotoCompressorDecorator(myPhoto))
);
