// In Javascript everything is an object.
// If you call methods on a primitive then javascript will convet them in to an object.

const s1 = 'hi'; // Is a string
const s2 = new String('hi'); // Is an object

console.log({s1: typeof s1});
console.log({s2: typeof s2});

// Window is the parent object of everything.
// A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. 
// Objects can either have property like a string or an array or they can have methods which are fucntions that can exicute.
const book = { //book is an object literal
    title: 'Far Cry', // Property
    awesome: true,  // Property
    isAwesome: function(){ // Method
        this.awesome ? console.log(`${this.title} is an awesome book!`):
                    console.log(`There is nothing special about ${this.title} :(`)
    }
}

console.log(book)
book.isAwesome();
