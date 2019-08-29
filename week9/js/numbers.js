let b = 0b1111; // binary
let o = 0o77; //  octal

console.log(b);
console.log(o);
console.log(b === 15);
console.log(o === 63);

console.log(Number.EPSILON);
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
console.log(Math.abs(0.1 + 0.2 - 0.4) < Number.EPSILON);

console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(15));

console.log(isNaN(10)); //  false
console.log(isNaN('10')); //  false
console.log(isNaN('aaa')); //  true
console.log(isNaN(NaN)); //  true
console.log(Number.isNaN(10)); //  false
console.log(Number.isNaN('10')); //  false
console.log(Number.isNaN('aaa')); //  false
console.log(Number.isNaN(NaN)); //  true


console.log('MinSafeInteger: ' + Number.MIN_SAFE_INTEGER);
console.log('MaxSafeInteger: ' + Number.MAX_SAFE_INTEGER);
console.log(Number.isSafeInteger(42));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));


//  Math.sign()  ==  szám előjelére használjuk : 0 , -0 , -1 vagy 1 az értéke

console.log(Math.sign(15));
console.log(Math.sign(-15));
console.log(Math.sign(0));
console.log(Math.sign(-0));


//  Math.trunc()  == lebegő pontos szám egészértékét tudjuk vele lekérdezni

console.log(Math.trunc(32.02));
console.log(Math.trunc('-11.0258'));
// console.log(parseInt(32.02));
