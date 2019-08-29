var myStringPrimitive = 'string primitive'; // ezt a megadási módot használjuk, ígyisúgyis átalakítja műveletvégzéshez
var myStringObject = new String('string object'); // new Number(), new Boolen()

console.log('Hello'); // konzolra kiírja
console.log(typeof myStringPrimitive);
console.log(typeof myStringObject);

console.log(myStringPrimitive);
console.log(myStringObject);

console.log(myStringPrimitive.length);
console.log(myStringObject.length);

console.log(myStringPrimitive[0]); // bármilyen stringnek elérhetem a karaktereit tömbként indexxel megadva
myStringPrimitive[0] = 'S'; // nem fog megváltozni, stringeknél nem tudjuk 1-1 karakterértékét átírni
console.log(myStringPrimitive);

var peopleArray = ['Gergő', 'Andris', 'Szilvi', 'Dani'];
// = var peopleArray = new Array(); ugyanazt jelenti, de az elsőt használd

// Tömbelemek elérése
console.log(peopleArray[0]);
console.log(peopleArray[4]);

// Tömbelemek módosítása - hozzáadása
peopleArray[1] = 'Norbi'
console.log(peopleArray);
console.log('A tömb hossza: ' + peopleArray.length);
peopleArray[1001] = 1001; // nem szekvenciális, üres elemei is lehetnek
console.log(peopleArray);
console.log(peopleArray.length);

// Tömb metódusok
var numericArray = [1, 2, 3, 4, 5];
console.log(numericArray.push('hello'));
console.log(numericArray);

numericArray.pop();
console.log(numericArray);

numericArray.unshift('nulladik');
console.log(numericArray);

numericArray.shift();
console.log(numericArray);

numericArray.slice(2, 3);
console.log(numericArray); // nem módosítja
// console.log(numericArray = numericArray.slice(2, 3));


numericArray.splice(2, 1);
console.log(numericArray);




// Ctrl + K Ctrl + C - add line comment, kijelölés és billentyűk
/* többsoros komment
2.sor
3.sor*/