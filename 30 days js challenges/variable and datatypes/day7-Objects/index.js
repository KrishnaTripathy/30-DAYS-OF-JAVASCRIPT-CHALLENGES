// Activity 1 : Object Creation and Access

// 1.Create an object representing a book with properties like title, author , and year, and log the object to the console.

const book = {
    title : "the moon",
    author: "mrs. krishna",
    yesr: "2024"
};
console.log(book);

// 2.Access and log the title and author properties of the book object.
const book1 = {
    title : "the moon",
    author: "mrs. krishna",
    yesr: "2024"
};
console.log("Title:",book1.title);
console.log("author:",book1.author);


// Activity 2: Object Methods

// 1.Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

const book2 = {
   title : "the sun",
   author : "krishna",
   year: 1234,
   getInfo: function() {
    return `${this.title} by ${this.author}`;
   }
};
console.log(book2.getInfo());

// 2. Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

const book3 = {
    title : "the sun",
    author : "krishna",
    year: 1234,
    updateYear : function(newYear){
        this.year = newYear;
    }
 };
 book3.updateYear(2024);
 console.log(book3);



//  Activity 3 : Nested Objects

// 1.Create a nested object representing a library with properties like name and books(an array of book objects),and log the library object to the console.

const library = {
    name: "City Library",
    books: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949
      }
    ]
  };
  
  console.log(library);

// 2. Access and log the name of the library and the titles of all the books in the library.

const library1 = {
    name: "City Library",
    books: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949
      }
    ]
  };
  
  console.log("Library Name:", library1.name);
  
  library1.books.forEach(book => {
    console.log("Book Title:", book.title);
  });
  


//   Activity 4 : The this Keyword

// 1. Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.


const book4 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getDetails: function() {
      return `${this.title}, published in ${this.year}`;
    }
  };
  
  console.log(book4.getDetails());


// Activity 5 : Object Iteration 

// 1. Use a for...in loop to iterate over the properties of the book object and log each property and its value.
  
const book5 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  };
  
  for (let key in book5) {
    console.log(`${key}: ${book5[key]}`);
  }
  
// 2.Use Object.keys and Object.values methods to log all the keys and values of the book object.

const book6 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  };
  
  console.log("Keys:", Object.keys(book6));
  console.log("Values:", Object.values(book6));
  
