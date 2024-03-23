interface MyIterator<T> {
  hasPrevious: () => boolean;
  hasNext: () => boolean;
  previous: () => T;
  next: () => T;
}

class Book {
  readonly title: string;
  readonly author: string;
  readonly isbn: string;

  constructor(title: string, author: string, isbn: string = "") {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class BookShelf {
  private books: Book[] = [];

  getLength(): number {
    return this.books.length;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  getBookAt(index: number): Book {
    return this.books[index];
  }

  createIterator() {
    return new BookShelfIterator(this);
  }
}

class BookShelfIterator implements MyIterator<Book> {
  private bookShelf: BookShelf;
  private currentIndex: number;

  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.currentIndex = 0;
  }

  hasNext() {
    return this.currentIndex < this.bookShelf.getLength();
  }

  hasPrevious() {
    return this.currentIndex > 0;
  }

  next() {
    this.currentIndex += 1;
    return this.bookShelf.getBookAt(this.currentIndex);
  }

  previous() {
    this.currentIndex -= 1;
    return this.bookShelf.getBookAt(this.currentIndex);
  }
}

// Usage
const shelf = new BookShelf();
shelf.addBook(new Book("Design Patterns", "Gang of Four"));
shelf.addBook(new Book("Clean Code", "Robert C. Martin"));
shelf.addBook(new Book("You Don't Know JS", "Kyle Simpson"));

const MyIterator = shelf.createIterator();

while (MyIterator.hasNext()) {
  const book = MyIterator.next();
  console.log(`${book.title} by ${book.author}`);
}
