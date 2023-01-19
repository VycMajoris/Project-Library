/* eslint-disable no-alert */
const myLibrary = [];

// Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = () =>
    `${title} by ${author}, ${pages} pages, ${
      read === true ? "read" : "not read yet"
    }`;
}

// function to add a book to the library
function addBookToLibrary() {
  /*   const title = prompt("What is the title?");
  const author = prompt("Who is the author?");
  const pages = parseInt(prompt("How many pages?"), 10);
  const read = prompt("Have you read it?").toLowerCase() === "yes"; */

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary();
console.log(myLibrary);
