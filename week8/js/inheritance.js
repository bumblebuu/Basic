function Animal() {
    this.name = 'Animal';
};

Animal.prototype.toString = function () {
    return `My name is ${this.name}`;
};
Animal.prototype.sound = 'Grrrr';
Animal.prototype.getSound = function () {
    return `${this.name} says ${this.sound}`;
};

function Canine() {
    this.name = 'Canine';
    this.sound = 'canine sound';
};

function Wolf() {
    this.name = 'Wolf';
    this.isEatMeat = true;
};


// var anAnimal = new Animal();
// console.log(anAnimal);

//   Prototype felülírása
Canine.prototype = new Animal();
Canine.prototype.constructor = Canine;


var myCaninePet = new Canine();
console.log(myCaninePet);
console.log(myCaninePet.name);
console.log(myCaninePet.getSound());


Wolf.prototype = new Canine();
Wolf.prototype.constructor = Wolf;

var arcticWolf = new Wolf();
console.log(arcticWolf);
console.log(arcticWolf.sound);
console.log(arcticWolf.getSound());
console.log(arcticWolf.toString());