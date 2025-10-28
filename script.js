const myLibrary = [];

function Book(title, author, haveRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.haveRead = haveRead;
}

function addBookToLibrary(title, author, haveRead) {
    const book = new Book(title, author, haveRead);
    book.id = crypto.randomUUID();
    myLibrary.push(book);
}

