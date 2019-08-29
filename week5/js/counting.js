'use strict'

// ALAPOK

for (var ciklusValtozo = 0; ciklusValtozo < 10; ciklusValtozo++) // ciklus vezérlés
{
    console.log((ciklusValtozo + 1) + '. alkalommal léptünk be a ciklusba');
}

for (var i = 10; i < 100; i += 10) {
    console.log(i);
}

for (var j = 10; j > 0; j--) {
    console.log(j);
}

for (var k = 1; k < 10; k += 2) {
    console.log(k);
}

var szamokTombje = [1, 3, 5, 2, 8, 9, 6, 7];
szamokTombje.push(4);
for (var index = 0; index < szamokTombje.length; index++) {
    console.log(szamokTombje[index]);
}

for (var i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log('Még dolgozok')
}

for (var i = 0; i < 10; i++) {
    console.log(i + '. alkalommal elkezdtemdolgozni');
    if (i % 2 == 0) {
        continue;
    }
    console.log(i + '. alkalommal befejeztem a dolgozást');
}

// ALAPOK VÉGE

function a() {
    var outcomeOfA = '';
    for (var i = 1; i <= 10; i++) {
        outcomeOfA += i + '\n'
    }
    alert(outcomeOfA)
}

function b() {
    var outcomeOfB = '';
    for (var i = 10; i >= 1; i--) {
        outcomeOfB += i + '\n'
    }
    alert(outcomeOfB)
}

function c() {
    var outcomeOfC = '';
    for (var i = 13; i <= 20; i = i + 2) {
        outcomeOfC += i + '\n'
    }
    alert(outcomeOfC)
}

function MultiplicationTable() {
    var receivedNumber = document.getElementById('number');
    var myNumber = parseInt(receivedNumber.value);
    var gotNumber = 0;
    var outcomeOfMultiplicationTable = '';

    for (var i = 1; i <= 10; i++) {
        gotNumber = i * myNumber;
        outcomeOfMultiplicationTable += i + ' ' + '*' + ' ' + myNumber + '=' + i * gotNumber + '\n';
    }
    alert(outcomeOfMultiplicationTable);
}

function MultiplicationTable2(hanyasSzorzotabla) { // Imivel
    var s = '';

    for (var rowIndex = 1; rowIndex < 11; rowIndex++) {
        s += rowIndex + '*' + hanyasSzorzotabla + '=' + (rowIndex * hanyasSzorzotabla);
        s += '\n';
    }
    return s;
}
alert(MultiplicationTable2(7))

// - innen kezdődik amit Mező Imivel írtunk, azért ilyen profi. Ez nem te voltál! Ilyen legyél!

var nodePrintTeglalapButton = document.querySelector('#btnPrintTeglalap');
nodePrintTeglalapButton.addEventListener('click', printTeglalap, false);

function printTeglalap() {
    var nodeOldal_ANumberBox = document.querySelector('#txtOldal_A');
    var nodeOldal_BNumberBox = document.querySelector('#txtOldal_B');
    var userInput;
    var oldal_A;
    var oldal_B;
    var s = '';

    userInput = parseInt(nodeOldal_ANumberBox.value);
    if (isNaN(userInput)) {
        throw new Error('Az A oldal nem szám');
    }
    oldal_A = userInput;
    userInput = parseInt(nodeOldal_BNumberBox.value);
    if (isNaN(userInput)) {
        throw new Error('A B oldal nem szám');
    }
    oldal_B = userInput;
    for (var rowIndex = 0; rowIndex < oldal_A; rowIndex++) {
        for (var columnIndex = 0; columnIndex < oldal_B; columnIndex++) {
            s += '*';
        }
        s += '\n';
    }
    alert(s);

}

// - eddig tart. Látod mennyivel hosszabb.

function e() {
    var nodeSquareSide = document.getElementById('squareSide');
    var squareSide = parseInt(nodeSquareSide.value);
    var outcomeOfSquare = '';

    for (var a = 0; a < squareSide; a++) {
        for (var b = 0; b < squareSide; b++) {
            outcomeOfSquare += '*';
        }
        outcomeOfSquare += '\n';
    }
    alert(outcomeOfSquare);
}

function f() {
    var nodePineHeight = document.getElementById('pineHeight');
    var pineHeight = parseInt(nodePineHeight.value);
    var outcomeOfPine = '';

    for (var a = 0; a < pineHeight; a++) {
        for (var b = 0; b < (pineHeight - a - 1); b++) {
            outcomeOfPine += '-';
        }
        for (var b = 0; b < (a + 1); b++) {
            outcomeOfPine += '*';
        }
        for (var b = 0; b < a; b++) {
            outcomeOfPine += '*';
        }
        for (var b = 0; b < (pineHeight - a - 1); b++) {
            outcomeOfPine += '-';
        }
        outcomeOfPine += '\n';
    }
    alert(outcomeOfPine);
}

function DrawAPine() {
    var nodePre = document.getElementById('rajzlap');
    // nodePre.innerText = 'Hello World';

    var Height = 20;
    var outcomeOfDraw = '';

    for (var y = 0; y < Height; y++) {
        for (var x = 0; x < (Height - y - 1); x++) {
            outcomeOfDraw += '&nbsp';
        }
        for (var x = 0; x < (y + 1); x++) {
            outcomeOfDraw += '/';
        }
        for (var x = 0; x < (y + 1); x++) {
            outcomeOfDraw += '\\';
        }
        for (var x = 0; x < (Height - y - 1); x++) {
            outcomeOfDraw += '&nbsp';
        }
        outcomeOfDraw += '\n';
    }
    nodePre.innerHTML = outcomeOfDraw;
}