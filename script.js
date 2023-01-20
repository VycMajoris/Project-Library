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

/* addBookToLibrary();
console.log(myLibrary); */

const mainSection = document.querySelector("main");
const addBookBtn = document.querySelector(".addBookBtn");
const closeDialog = document.querySelector(".closeDialog");
const addBookDialog = document.querySelector(".addBookDialog");

addBookBtn.addEventListener("click", () => {
  addBookDialog.showModal();
});

closeDialog.addEventListener("click", () => {
  addBookDialog.close();
});

// addBookBtn.addEventListener("click", addBookForm);

/* for (let i = 0; i < myLibrary.length; i++) {
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
} */
