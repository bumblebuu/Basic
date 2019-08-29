let a;
let //    let a, b;   - csak ezt mentéskor átjavítja
  b;

[a, b] = [1, 2];
console.log(a);
console.log(b);

let c;
let
  d;

[c = 5, d = 7] = [1];
console.log(c);
console.log(d);

let e = 'E értéke';
let f = 'F értéke';

[e, f] = [f, e];
console.log(e);
console.log(f);

const foo = ['one', 'two', 'three'];

const [first, second, third] = foo;
console.log(first);
console.log(second);
console.log(third);

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 31,
};

// const {
//   firstName,
//   lastName,
// } = person;
// console.log(`${firstName} ${lastName}`);

const {
  firstName: fn,
  lastName: ln,
} = person;
console.log(`${fn} ${ln}`);


const styles = {
  align: 'left',
  background: 'white',
  color: 'red',
  display: 'none',
};

// const {
//   align = 'right',
//   background, color = 'blue',
//   display, visibility,
// } = styles;

// console.log(align, background, color, display, visibility);

const {
  align: al = 'right',
  background: bg,
  color: cl = 'blue',
  display: dp,
  visibility: vis,
} = styles;

console.log(al, bg, cl, dp, vis);

function convertLength(meter) {
  const british = {
    inch: (meter * 100 / 2.54).toFixed(2),
    feet: (meter * 100 / 2.54 / 12).toFixed(2),
    yard: (meter * 100 / 2.54 / 36).toFixed(2),
    mile: (meter / 1609.344).toFixed(2),
  };
  return british;
}

console.log(convertLength(10));

const {
  feet,
  yard,
} = convertLength(1);
console.log(`Feet: ${feet}, Yard: ${yard}`);

function priceCalc({
  price = 100,
  tax = 27,
  inward = 4,
} = {}) {
  return price * (1 + tax / 100 + inward / 100);
}

const money = priceCalc();
console.log(money);
