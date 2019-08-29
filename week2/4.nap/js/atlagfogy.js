var kiloMeter = document.getElementById("km");
var fogyasztas = document.getElementById("fogyasztas");
var elozoKilometerek = 0;
var elozoFogyasztasok = 0;

function calculate() {
    var kiloMeterValue = parseFloat(kiloMeter.value);
    var fogyasztasValue = parseFloat(fogyasztas.value);
    var atlagFogyasztas = fogyasztasValue / kiloMeterValue;
    var osszFogyasztas = calculate2(kiloMeterValue, fogyasztasValue);
    alert(atlagFogyasztas + " " + osszFogyasztas);
}

function calculate2(km, fogyasztas) {
    elozoKilometerek = elozoKilometerek + km;
    elozoFogyasztasok += fogyasztas;
    var osszFogyasztas = elozoFogyasztasok / elozoKilometerek;
    return osszFogyasztas;
}