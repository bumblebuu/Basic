const cat = Symbol('animal');
const dog = Symbol('animal');
console.log(cat === dog);
console.log(cat == dog);
console.log(Symbol.for('sample') === Symbol.for('sample'));
console.log(Symbol.for('cat') === Symbol.for('dog')); // false


const glob = Symbol.for('global');
console.log(Symbol.keyFor(glob));


const people = {
  [Symbol('john')]: {
    firstName: 'John',
    lastName: 'Doe',
  },
  [Symbol('jane')]: {
    firstName: 'Jane',
    lastName: 'Doe',
  },
  [Symbol('jane')]: {
    firstName: 'Janey',
    lastName: 'DOOH',
  },
};

console.log(people);
console.log(Object.getOwnPropertySymbols(people).map(symbol => people[symbol]));


const MY_KEY = Symbol();
const obj = {};
obj[MY_KEY] = 123;
console.log(obj[MY_KEY]);

const MY_KEY2 = Symbol();
const obj2 = {
  [MY_KEY2]: 123,
};
console.log(obj2[MY_KEY2]);

const FOO = Symbol();
const obj3 = {
  [FOO]() {
    return 'bar';
  },
};

console.log(obj3[FOO]());


