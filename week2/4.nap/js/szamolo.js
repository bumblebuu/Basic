var amountInputbox = document.getElementById("amountInput");
var yearInputbox = document.getElementById("year");
var percentageInputbox = document.getElementById("percentage");


function calculate() {
    var amount = parseInt(amountInputbox.value);
    var year = parseInt(yearInputbox.value);
    var percentage = parseFloat(percentageInputbox.value);
    var A = (amount * Math.pow((1 + (percentage / (1 * 100))), (1 * year)));
    var result = A.toFixed(2);
    alert(result);
}