var stringArray = [
    'hal', 'alma', 'Béla', 'citrom', 'ló', 'Béla', 'hal', 'kecske', 'fa', 'kelkáposzta', 'hal'
];


// LEGRÖVIDEBB SZÖVEG MEGHATÁROZÁSA
function LegrovidebbSzoveg() {
    var result;

    result = stringArray[0];
    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length < result.length) {
            result = stringArray[i];
        }
    }
    return result;
}
console.log(LegrovidebbSzoveg());


// LEGHOSSZABB SZÖVEG MEGHATÁROZÁSA
function LeghosszabbSzoveg() {
    var result;

    result = stringArray[0];
    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > result.length) {
            result = stringArray[i];
        }
    }
    return result;
}
console.log(LeghosszabbSzoveg());


// VAN E BENNE "" ILYEN SZÓ
function VanBenneIlyenSzo(mibenKeressuk, mitKeresunk) {
    var result = false;


    for (var i = 0; i < mibenKeressuk.length; i++) {
        if (mibenKeressuk[i] === mitKeresunk) {
            result = true;
            break;
        }
    }
    return result;
}
console.log(VanBenneIlyenSzo(stringArray, 'pandúr'));
console.log(VanBenneIlyenSzo(stringArray, 'citrom'));


// HOL TALÁLHATÓ EZEN SZÓ - indexét adja vissza
function holTalalhatoEzenSzo(mibenKeressuk, mitKeresunk) {
    var result = -1;

    for (var i = 0; i < mibenKeressuk.length; i++) {
        if (mibenKeressuk[i] === mitKeresunk) {
            result = i;
            break;
        }
    }
    return result;
}
console.log(holTalalhatoEzenSzo(stringArray, 'pandúr'));
console.log(holTalalhatoEzenSzo(stringArray, 'citrom'));

// "" ILYENBŐL HÁNY SZÓ VAN BENNE
function FeltetelnekMegfeleloElemek(mibenKeresunk, mitKeresunk) {
    result = [];

    for (var j = 0; j < mibenKeresunk.length; j++) {
        if (mibenKeresunk[j] === mitKeresunk) {
            result.push(mibenKeresunk[j]);
        }
    }

    return result;
}
console.log(FeltetelnekMegfeleloElemek(stringArray, 'hal'));