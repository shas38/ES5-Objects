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


const massHysteria = function(DOG, CAT){
    if(DOG.raining && CAT.raining){
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}

massHysteria(DOG, CAT);