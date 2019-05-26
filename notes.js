// An object constructor function is used for creating objects of the same type (have the same properties and methods).
// A constructor is a function used for creating objects with the same functionality.  
// By convention, we capitalise the first letter of the name of the constructor function. 
// Objects of the same type are created by calling the constructor function with the new keyword.
// The value of this inside a function is determined by the object that's calling the function. 
function Book(title, awesome){
    this.title = title;
    this.awesome = awesome;
    this.isAwesome = function(){ // Method
        this.awesome ? console.log(`${this.title} is an awesome!`):
                    console.log(`There is nothing special about ${this.title} :(`);
    }
}

const book1 = new Book('Book One', true);
const book2 = new Book('Book Two', false);

console.log(book1)
book1.isAwesome();
book2.isAwesome();
// All JavaScript objects inherit properties and methods from a prototype.
// If a method is not tightly coupled to an object then it can moved to the prototype.
function BookProto(title, awesome){
    this.title = title;
    this.awesome = awesome;
}

BookProto.prototype.isAwesome = function(){ // Method
    this.awesome ? console.log(`${this.title} is an awesome!`):
                console.log(`There is nothing special about ${this.title} :(`);
}

const book3 = new BookProto('Book Three', true);
book3.isAwesome();
// A new property or method can be added to the object after it has been created
book3.revised = true;
console.log(book3);

// A new object can inherit from an old object
function Magazine(title, awesome, year){
    BookProto.call(this, title, awesome);
    this.year = year;
}

Magazine.prototype = Object.create(BookProto.prototype);

const mag1 = new Magazine('Magazine One', true, '2014');
console.log(mag1);
