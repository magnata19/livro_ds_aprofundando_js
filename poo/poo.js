class Book {
  // {2}
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }
  printIsbn() {
    console.log(this.isbn);
  }
}

class ITBook extends Book {
  constructor(title, pages, isbn, language) {
    super(title, pages, isbn);
    this.language = language;
  }

  printIsbn() {
    console.log(this.language);
  }
}

const book = new ITBook(
  "JavaScript: The Good Parts",
  176,
  "978-0596805524",
  "TypeScript"
);
book.printIsbn();
