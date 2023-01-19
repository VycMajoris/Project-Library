/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
const myLibrary = [
  { title: "Hobbit", author: "Tolkien", pages: 142, read: true },
  { title: "Sherlock", author: "DontKnow", pages: 432, read: false },
  { title: "Cosmos", author: "Carl Sagan", pages: 348, read: false },
];

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

/* function addBookToLibrary() {
  const title = prompt("What is the title?");
  const author = prompt("Who is the author?");
  const pages = parseInt(prompt("How many pages?"), 10);
  const read = prompt("Have you read it?").toLowerCase() === "yes";

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
} */

/* addBookToLibrary();
console.log(myLibrary); */

// const addBookBtn = document.getElementsByClassName("addBookBtn");

/* function addBookCard() {
  // create Div to store book info
  const cardDiv = document.createElement("div");

  // create info fields.
  const bookTitle = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const cardPages = document.createElement("p");
  const isReadBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  const bookFieldsArr = [
    bookTitle,
    bookAuthor,
    cardPages,
    isReadBtn,
    removeBtn,
  ];

  for (let i = 0; i < 5; i++) {
    cardDiv.appendChild(bookFieldsArr[i]);
  }

  bookTitle.innerText = myLibrary.title;
  bookAuthor.innerText = myLibrary.author;
  cardPages.innerText= myLibrary.pages;
  isReadBtn.innerText = 
}
 */

// addBookBtn.addEventListener("click", addBookCard);

const mainSection = document.querySelector("main");

for (let i = 0; i < myLibrary.length; i++) {
  const cardDiv = document.createElement("div");

  const bookTitle = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const cardPages = document.createElement("p");
  const isReadBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  bookTitle.innerText = myLibrary[i].title;
  bookAuthor.innerText = myLibrary[i].author;
  cardPages.innerText = myLibrary[i].pages;
  isReadBtn.innerText = myLibrary[i].read;
  removeBtn.innerText = "remove";

  const bookFieldsArr = [
    bookTitle,
    bookAuthor,
    cardPages,
    isReadBtn,
    removeBtn,
  ];

  for (let j = 0; j < bookFieldsArr.length; j++) {
    cardDiv.appendChild(bookFieldsArr[j]);
  }

  cardDiv.style.height = "300px";
  cardDiv.style.padding = "20px";
  bookTitle.style.padding = "20px";
  bookAuthor.style.padding = "20px";
  cardPages.style.padding = "20px";
  isReadBtn.style.display = "block";
  isReadBtn.style.padding = "20px";
  isReadBtn.style.marginBottom = "20px";
  removeBtn.style.padding = "20px";

  mainSection.appendChild(cardDiv);
}
