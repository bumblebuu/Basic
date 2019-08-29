const familyLI = Array.from(document.querySelectorAll('li'));

console.log(familyLI);

const family = Array.from(document.querySelectorAll('li')).map(item => item.textContent);

console.log(family);


const data = [{
  firstName: 'Kiss',
  lastName: 'József',
  age: 18,
},
{
  firstName: 'Horváth',
  lastName: 'Péter',
  age: 34,
},
{
  firstName: 'Kováts',
  lastName: 'Ilona',
  age: 24,
},
{
  firstName: 'Nagy',
  lastName: 'Antal',
  age: 66,
},
];

console.log(data.find(item => item.age > 18));
console.log(data.findIndex(item => item.age > 18));
console.log(data.some(item => item.age > 18));
console.log(data.some(item => item.age < 18));
console.log(data.every(item => item.age > 17));
console.log(data.every(item => item.age > 18));


const myMap = new Map();

myMap.set('foo', 123);
myMap.set('boo', 456);
myMap.set('moo', 789);

console.log(myMap.get('foo'));
// console.log(myMap.get('boo'));
// console.log(myMap.get('moo'));

console.log(myMap.has('foo'));

console.log(myMap.keys());

console.log(myMap.values());

myMap.delete('foo');

console.log(myMap.has('foo'));

console.log(myMap.size);

myMap.forEach((value, key) => console.log(value, key));

myMap.clear();
console.log(myMap.size);


const sampleWeakMap = new WeakMap();
let sampleObject = {
  sample: 'value',
};
sampleWeakMap.set(sampleObject, 'sampleValue');

console.log(sampleWeakMap.get(sampleObject));

sampleObject = {
  sample2: 'newValue',
};

console.log(sampleWeakMap.get(sampleObject));
