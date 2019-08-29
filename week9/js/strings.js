const firstName = 'John';
const lastName = 'Doe';
const age = 32;

//  Eddig:

console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);


//  Template-es megoldás

console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);


const people = [{
  firstName: 'John',
  lastName: 'Doe',
},
{
  firstName: 'Jane',
  lastName: 'Doe',
},
{
  firstName: 'Jackey',
  lastName: 'Doe',
},
];

const template = `<div>
${people.map(person => `<p>${person.firstName} ${person.lastName}</p>`)
    .join('')}
</div>`;
console.log(template);

const name = 'John Doe';

function tag(text, value) {
  return `Szöveg: ${text[0]}, Változó: ${value}`;
}

console.log(tag`Név ${name}`);

const person = 'John Doe';

function tag2(text, value) {
  return `Szöveg: ${text[0]}, Változó: ${value}`;
}

console.log(tag2`My name is ${person}`);

const personObj = {
  firstName: 'John',
  lastName: 'Doe',
  age: '31',
};

function tag3(texts, ...values) {
  let str = '';
  texts.forEach((text, i) => {
    str += `${text} 
           ${values[i] !== undefined ? `<strong>${values[i].toUpperCase()}</strong>`: "" }`;
  });
  return str;
}

document.write(
  tag3`My name is ${personObj.firstName} ${personObj.lastName}, and I'm ${personObj.age} years old.`,
);
