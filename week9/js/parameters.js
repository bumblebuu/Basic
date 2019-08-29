function defaultParameterOld(x, y, z) {
    y = y || 0;
    z = z || 20;
    return x + y + z;
}

console.log(defaultParameterOld(1));
console.log(defaultParameterOld(1, 2));
console.log(defaultParameterOld(1, 2, 3));

function defaultParameterNew(x, y = 0, z = 20) {
    return x + y + z;
}

console.log(defaultParameterNew(1));
console.log(defaultParameterNew(1, 2));
console.log(defaultParameterNew(1, 2, 3));

const args = [0, 1, 2];

function spreadOperator(x, y, z) {
    return x + y + z;
}

//  régen : console.log(spreadOperator.apply(null, args));
console.log(spreadOperator(...args));

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
console.log(...firstArray, ...secondArray);

const word = 'hello';

console.log([...word]);

const params = [true, false, 'hello', 5];

function spreadOperator2(x, y, ...arguments) {
    console.log(x);
    console.log(y);
    console.log(arguments);
}

spreadOperator2(1, 2, ...params);

function restParameters(x, y, ...arguments) {
    return (x + y) * arguments.length;
}

console.log(restParameters(1, 2, 'hello', true, 5));

// `<div>
//      ${people
//         .map(function(person) {
//              return `<p> ${person.firstName} ${person.lastName} </p>`;
//           })
//         .join("")}
// </div>`;

//  ===

// `<div>
//     ${people
//         .map(person => `<p> ${person.firstName} ${person.lastName} </p>`)
//          .join("")}
// </div>`;

let languages = ['java', 'php', 'python'];

let scriptOldStyle = languages.map(function (language) {
    return `${language} script`;
});

console.log(scriptOldStyle);

let scriptNewStyle = languages.map(language => `${language} script`);

console.log(scriptNewStyle);

let languageRank = languages.map((language, i) => `${i+1}. ${language} script`);

console.log(languageRank);

let alertMessage = message => {
    alert(`Alert ${message}`);
    console.log(`Alert ${message}`);
};

alertMessage("Message!");

let infoMessage = () => console.log("Arrow Function");

infoMessage();



// return: undefined
// Üres blokk, implicit return
(firstName => {})()

// return: 'Hello John'
// Nincs blokk, implicit return
(firstName => 'Hello ' + firstName)('John')

// return: undefined
// explicit return kell a blokkon belül, de Helloányzik
(firstName => {'Hello ' + firstName})('John')

// return: 'Hello John'
// explicit return a blokkon belül
(firstName => {return 'Hello ' + firstName})('John')

// return: undefined
// a block egy label-t tartalmaz. Nincs explicit return.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
(firstName => {name: firstName})('John')

// return: {name: 'John'}
// implicit return a ( ) belül, ami egy objektum
(firstName => ({name: firstName}))('John')

// return: name: 'John'
// explicit return a blokkon belül, objektum
(firstName => {return {name: firstName}})('John')