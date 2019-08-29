var numberArray = [
    23, 1, 2, 3, 2, 4, 23, 6, 1, 2, 24, 99, 8, 3
];
// console.log(numberArray);

// AZ ÖSSZEGZÉS TÉTELE - végigszalad egy tömb tagjain és öszeadja őket
function Sum() {
    var osszeg = 0;

    for (var i = 0; i < numberArray.length; i++) {
        osszeg += numberArray[i];
    }
    return osszeg;
}
console.log(Sum());



// AZ SZORZAT TÉTELE - végigszalad egy tömb tagjain és öszeszorozza őket
function Productum() {
    var szorzat = 1;

    for (var i = 0; i < numberArray.length; i++) {
        szorzat *= numberArray[i];
    }
    return szorzat;
}
console.log(Productum());



// AZ MINIMUM MEGHATÁROZÁSA
function Min() {
    var minimum;

    minimum = numberArray[0];
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] < minimum) {
            minimum = numberArray[i];
        }
    }
    return minimum;
}
console.log(Min());



// AZ MAXIMUM MEGHATÁROZÁSA
function Max() {
    var maximum;

    maximum = numberArray[0];
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > maximum) {
            maximum = numberArray[i];
        }
    }
    return maximum;
}
console.log(Max());



// ÖSSZESZÁMLÁLÁS MEGHATÁROZÁSA  ==>  return numberArray.length
function Count() {
    var darab = 0;

    for (var i = 0; i < numberArray.length; i++) {
        darab += 1;
        // darab++;
        // darab = darab + 1;
    }
    return darab;
}
console.log(Count());


// ÁTLAGSZÁMÍTÁS
function Avg() {
    var atlag = 0;
    var osszeg = 0;
    var darab = 0;

    for (var i = 0; i < numberArray.length; i++) {
        darab++;
        osszeg += numberArray[i];
        atlag = osszeg / darab;
    }
    return atlag;
}
console.log(Avg());