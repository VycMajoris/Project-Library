/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
const myLibrary = [
  /*   { title: "Hobbit", author: "Tolkien", pages: 142, read: true },
  { title: "Sherlock", author: "DontKnow", pages: 432, read: false },
  { title: "Cosmos", author: "Carl Sagan", pages: 348, read: false }, */
];

// Constructor
function Book(title, author, pages, read, order) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // the index of an object. This is used to remove an object when remove button is pressed
  this.order = order;
}

const mainSection = document.querySelector("main");
const addBookBtn = document.querySelector(".addBookBtn");
const closeDialog = document.querySelector(".closeDialog");
const addBookDialog = document.querySelector(".addBookDialog");
const dialogSubmitBtn = document.querySelector("#dialogSubmitBtn");

const dialogForm = document.getElementById("dialogForm");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pageInput = document.getElementById("pages");
const isReadInput = document.getElementById("isRead");

// ***** EVENT LISTENERS *****

addBookBtn.addEventListener("click", () => {
  // Reset the form every time the dialog comes up
  dialogForm.reset();
  addBookDialog.showModal();
});

closeDialog.addEventListener("click", () => {
  addBookDialog.close();
});

// eslint-disable-next-line no-use-before-define
dialogSubmitBtn.addEventListener("click", submitFunc);

// ***** SUBMIT FUNCTION *****

function submitFunc(e) {
  e.preventDefault();

  const newBook = new Book();
  newBook.title = titleInput.value;
  newBook.author = authorInput.value;
  newBook.pages = pageInput.value;
  newBook.read = isReadInput.checked ? "I've read" : "Not read yet";
  newBook.order = myLibrary.length;

  myLibrary.push(newBook);

  addBookDialog.close();
  // eslint-disable-next-line no-use-before-define
  addBookCards(newBook);
}

// addBookBtn.addEventListener("click", addBookForm);

function addBookCards(newBook) {
  for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
    const cardDiv = document.createElement("div");

    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const cardPages = document.createElement("p");
    const isReadBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    bookTitle.innerText = `"${myLibrary[i].title}"`;

    bookAuthor.innerText = myLibrary[i].author;
    cardPages.innerText = myLibrary[i].pages;
    isReadBtn.innerText = myLibrary[i].read;
    removeBtn.innerText = "Remove";

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

    cardDiv.style.cssText = `font-size: 24px; display: flex; flex-direction: column; justify-content: stretch; text-align: center; 
                            min-height: fit-content; border: solid 2px; border-radius: 10px; padding: 20px; gap: 10px`;

    bookTitle.style.marginLeft = "auto";
    bookTitle.style.marginRight = "auto";
    bookAuthor.style.marginLeft = "auto";
    bookAuthor.style.marginRight = "auto";
    cardPages.style.marginLeft = "auto";
    cardPages.style.marginRight = "auto";

    bookTitle.style.flex = "1";
    bookAuthor.style.flex = "1";
    cardPages.style.flex = "1";

    isReadBtn.style.height = "15%";
    isReadBtn.style.fontSize = "inherit";

    removeBtn.style.height = "15%";
    removeBtn.style.fontSize = "inherit";

    mainSection.appendChild(cardDiv);

    // To remove a book from myLibrary array
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(newBook.order, 1);

      mainSection.removeChild(cardDiv);
    });
  }
}
