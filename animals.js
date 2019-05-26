// https://www.w3schools.com/js/js_objects.asp

const DOG = {
    raining: true,
    noise: 'woof!',
    makeNoise: function(){
        console.log(this.noise);
    },
}

DOG.makeNoise(); 

const CAT = {
    raining: true,
    noise: 'meow!'
}

DOG.makeNoise.call(CAT);