class Animal {
    constructor() {
        this.name = 'Animal';
        this.sound = 'Grrrr';
    };
    toString() {
        return `My name is ${this.name}`;
    };
    getSound() {
        return `${this.name} says ${this.sound}`;
    };
};

var anAnimal = new Animal();
console.log(anAnimal);


class Canine extends Animal { //  örököljön ettől == extends --> vele mindig kell a super kulcsszó legelöl
    constructor() {
        super();
        this.name = 'Canine';
        this.sound = 'canine sound';
    };
};

var myCaninePet = new Canine();
console.log(myCaninePet);

class Wolf extends Canine {
    constructor() {
        super();
        this.name = 'Wolf';
        this.isEatMeat = true;
    };
};

var articWolf = new Wolf();
console.log(articWolf);