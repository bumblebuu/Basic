var numbersArray = [124, 786];

numbersArray[10] = 10;

// ha egy tömb nem szekvenciális, for looppal sokszor lefuthat a fgvény feleslegesen

// TÖMB bejárása for looppal
//                    for (ciklusváltozó = kezdőérték; feltétel, léptetés) {
//                       ciklusmag;
//                    }

console.log('For ciklus');
for (var i = 0; i < numbersArray.length; i += 1) {
    console.log(numbersArray[i]);
}

// TÖMB bejárása while cilkussal
//              cilusváltozó = kezdőérték
//              while (feltétel){
//                  ciklusmag;
//                  léptetés
//              }

console.log('While ciklus');
i = 0;
while (i < numbersArray.length) {
    console.log(numbersArray[i]);
    i += 1;
}



// létrehoztam prototype után, mostmár ott van a metódusai között az összes tömbnek
Array.prototype.test = function () {
    console.log('My custom array method');
};

//numbersArray.test();
var arr = [];
///arr.test();


// TÖMB bejárása for-in ciklussal
// for-in esetében nem fogja megjeleníteni az undefined-okat
// az i helyére az indexeket helyettesíti be

console.log('For-in ciklus');
for (i in numbersArray) {
    if (numbersArray.hasOwnProperty(i)) {
        console.log(numbersArray[i]);
    }
}

// TÖMB bejárása for-of ciklussal
// az i helyére az értékeket helyettesíti be

console.log('For-of ciklus');
for (i of numbersArray) {
    console.log(i);
}

// For-each ciklus : mindegyik elemre meghív egy fgv-t
console.log('forEach metódus');
numbersArray.forEach(function (item, index) {
    console.log(item, index);
})

console.log('My forEach fgv');

function myForEach(item) {
    console.log(item);
}

for (i = 0; i < numbersArray.length; i += 1) {
    myForEach(numbersArray[i]);
}

console.log('My forEach fgv for-innel');
for (i in numbersArray) {
    if (numbersArray.hasOwnProperty(i)) {
        myForEach(numbersArray[i]);
    }
}