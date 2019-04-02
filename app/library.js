class Library {
  constructor(books) {
    this.books = books;
  }

  add(title, ISBN, author) {
    
     const newBook = {name: title, ISBN: ISBN, author: author, available: true};
     this.books.push(newBook)
  }

  withdraw() {

     const withdrawBook = this.books.filter(function (item) {
     if (item.isbn === 789) return true;
     else if (item.isbn != 789) return false;
});
     this.books = withdrawBook
  }

  checkout() {

    const checkoutBook = this.book
  }

}

module.exports = Library; this.books 
