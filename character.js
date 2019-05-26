function Character(name, profession, gender, age, strength, hp){
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.printStats = function(){
        console.log(this)
    }
}
// const is blocked scopped
const MICHAEL = new Character('Michael', 'boyscout', 'male', 106, 105, 10);

MICHAEL.printStats();
