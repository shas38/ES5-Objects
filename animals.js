// https://www.w3schools.com/js/js_objects.asp

const DOG = {
    raining: true,
    noise: 'woof!',
    makeNoise: function(){
        if(this.raining){
            console.log(this.noise);
        }    
    },
}
DOG.makeNoise(); // woof!

let cat = {
    raining: true,
    noise: 'meow!'
}
DOG.makeNoise.call(cat); // meow!

const CAT = {
    raining: false,
    noise: 'meow!',
    makeNoise: function(){
        if(this.raining){
            console.log(this.noise);
        }      
    },
}
CAT.makeNoise(); // ""
CAT.raining = true;
CAT.makeNoise(); // meow!
