// Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read === true ? "read" : "not read yet"
    }`;
  };
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

// console.log(hobbit.info());
