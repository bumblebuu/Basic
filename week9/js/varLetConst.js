const myString = 'hoppárécska!';
const myNumber = 9;


if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {


    if (typeof start !== 'number') {
      start = 0;
    }
    if (Number.isNaN(search) || start + search.length > this.length) {
      return false;
    }
    return this.indexOf(search, start) !== -1;
  };
}

console.log(myString.includes('w'));
console.log(myString.includes('p'));

Number.isNaN = Number.isNaN || function (value) {
  return value !== value;
};


console.log(myNumber.isNaN);


class A {} // eredeti kód

// function _classCallCheck(instance, constructor) { //   transzportált
//     if (instance instanceof constructor) {
//         throw new TypeError("Cannot call a class as a function");
//     }
// }

// var A = function A() {
//     _classCallCheck(this, A);
// }

{
  var x = 10;
  console.log(x);
}
var x = 20;
console.log(x);


{
  const y = 10;
  console.log(y);
  // let y = 20;  //  Uncaught SyntaxError: Identifier 'y' has already been declared
}
// console.log(y); //  numbers.js:53 Uncaught ReferenceError: y is not defined at numbers.js:53
const y = 20;
console.log(y);

{
  // console.log(tdz);  //   TDZ === TEMPORARY DEAD ZONE
  const tdz = 0;
}

// for (let i = 0; i <= 5; i += 1) {
//   setTimeout(function () {
//     console.log(i);   //  0  1  2  3  4  5
//   },
//   i * 1000);
// }

// let i = 0;
// for (i = 0; i <= 5; i += 1) {
//   setTimeout(function () {
//     console.log(i);  //  6  6  6  6  6  6
//   },
//   i * 1000);
// }

const pElements = document.getElementsByTagName('p');

for (let i = 0; i < pElements.length; i += 1) {
  pElements[i].addEventListener('click', () => {
    console.log(pElements[i], i);
  });
}

// const myConst = 'Ez konstans';
// console.log(myConst);
// myConst = 'Változik?';
// console.log(myConst); //  Uncaught TypeError: Assignment to constant variable.


const Person = {
  fn: 'Gergő',
  ln: 'Kovács',
  age: 20,
};
Person.age = 30;
console.log(Person);

// Person = {
//   fn: 'Gergő',
//   ln: 'Kovács',
//   age: 40
// }
// console.log(Person);  //  Uncaught TypeError: Assignment to constant variable.

Object.freeze(Person);
Person.age = 50;
console.log(Person);
