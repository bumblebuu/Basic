'use strict';

function CountFactorial() {
    var nodeReceivedNumber = document.getElementById('factorial');
    var receivedNumber = parseInt(nodeReceivedNumber.value);
    var factorial = 1;

    for (var i = 1; i < receivedNumber + 1; i++) {
        factorial = factorial * i;
    }

    alert('A(z) ' + receivedNumber + ' faktoriálisa: ' + factorial);
}


function CountTheLetters() {
    var nodeReceivedText = document.getElementById('countTheLettersText');
    var receivedText = nodeReceivedText.value;
    var nodeReceivedLetter = document.getElementById('countTheLettersLetter');
    var receivedLetter = nodeReceivedLetter.value;

    var countedLetters = 0;

    for (var i = 0; i < receivedText.length; i++) {
        if (receivedText[i].toLowerCase().indexOf(receivedLetter.toLowerCase()) > -1) {
            countedLetters++;
        }
    }
    alert(countedLetters + ' ilyen betű van a szövegben!');

}