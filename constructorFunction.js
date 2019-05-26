// A constructor is a function used for creating objects with the same functionality.  
// By convention, we capitalise the first letter of the name of the constructor function. 
// Objects of the same type are created by calling the constructor function with the new keyword.

function Book(title, awesome, author){
    // this = {};
    this.title = title;
    // this = {title: 'Far Cry'};
    this.awesome = awesome;
    // this = {title: 'Far Cry', awesome: ture};
    this.author = author;
    // this = {title: 'Far Cry', awesome: ture, author: 'James'};
    // return this;
}
// The value of "this" determined by the function that is calling it. 
// The new key world will overwrite "this" and set it to an empty object. 
const farCry = new Book('Far Cry', true, 'James');
// const farCry = {title: 'Far Cry', awesome: ture, author: 'James'};
console.log(farCry);