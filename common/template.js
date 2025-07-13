function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printTitle = function () {
    console.log(this.title);
  };
}

const book = new Book("JavaScript: The Good Parts", 176, "978-0596805524");

Book.prototype.getPages = function () {
  console.log(this.pages);
};

book.getPages();
book.printTitle();

console.log(`You're reading ${book.title}.
  And this is a new line.
  it is also a new line.`);
