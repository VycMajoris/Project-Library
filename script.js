/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
const myLibrary = [
  /*   { title: "Hobbit", author: "Tolkien", pages: 142, read: true },
  { title: "Sherlock", author: "DontKnow", pages: 432, read: false },
  { title: "Cosmos", author: "Carl Sagan", pages: 348, read: false }, */
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
const dialogSubmitBtn = document.querySelector("#dialogSubmitBtn");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pageInput = document.getElementById("pages");
const isReadInput = document.getElementById("isRead");

addBookBtn.addEventListener("click", () => {
  addBookDialog.showModal();
});

closeDialog.addEventListener("click", () => {
  addBookDialog.close();
});

function submitFunc(e) {
  e.preventDefault();
  const newBook = new Book();
  titleInput.value = newBook.title;
  authorInput.value = newBook.author;
  pageInput.value = newBook.pages;
  isReadInput.value = newBook.read;

  myLibrary.push(newBook);
  addBookDialog.close();
  addBookCards();
}

dialogSubmitBtn.addEventListener("click", submitFunc);

// addBookBtn.addEventListener("click", addBookForm);

function addBookCards() {
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
}
