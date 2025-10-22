const myLibrary = [];

function Book(id, author, title, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    
}