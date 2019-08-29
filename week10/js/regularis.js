const malac = '3 kismalac 3';
const reg = /[^0-9]*/g; // nem 0-9 , ezt jelenti a házikó, a []-felsorolást jelent, g= global
malac.replace(reg, '');

malac.replace(/[^0-9]*/g);
parseInt(malac.replace(/[^0-9]*/g));

console.log(malac); // 3 kismalac 3
console.log(malac.replace(reg, '')); //  33


parseInt(malac.replace(reg, ''));
console.log(parseInt(malac.replace(reg, '')));
