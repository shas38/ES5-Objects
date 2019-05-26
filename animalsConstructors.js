// https://www.w3schools.com/js/js_object_constructors.asp

// We don't pass argument to constructor functions that does not change between objects.
// Below the makeNoise function is same for all Animal and so we don't pass that function as an argument.
function Animal(raining, noise){
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function(){
        if(this.raining){
            console.log(this.noise);
        }// if
    }// makeNoise
}// Animal

const DOG = new Animal(true, 'woof!');
const CAT = new Animal(false, 'meow!');

DOG.makeNoise(); 
CAT.makeNoise();
CAT.raining = true;
CAT.makeNoise();
