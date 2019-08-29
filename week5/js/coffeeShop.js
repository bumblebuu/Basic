var coffeeArray = [{
    coffeeName: 'Karimikui',
    origin: 'Kenya',
    intensity: 8,
    inStock: 10,
    pricePerCup: 650,
    pricePerKg: 8500
}, {
    coffeeName: 'Monnai',
    origin: 'Colorado',
    intensity: 4,
    inStock: 21,
    pricePerCup: 630,
    pricePerKg: 8000
}, {
    coffeeName: 'Olobaio',
    origin: 'Columbia',
    intensity: 7,
    inStock: 1,
    pricePerCup: 720,
    pricePerKg: 9500
}, {
    coffeeName: 'Purgia',
    origin: 'Brazilia',
    intensity: 9,
    inStock: 18,
    pricePerCup: 600,
    pricePerKg: 7400
}, {
    coffeeName: 'Rebrugo',
    origin: 'Portugal',
    intensity: 5,
    inStock: 4,
    pricePerCup: 790,
    pricePerKg: 9700
}, {
    coffeeName: 'Neykolo',
    origin: 'Brazilia',
    intensity: 3,
    inStock: 6,
    pricePerCup: 680,
    pricePerKg: 8800
}, {
    coffeeName: 'Umbarl',
    origin: 'Nigeria',
    intensity: 1,
    inStock: 2,
    pricePerCup: 670,
    pricePerKg: 9100
}, {
    coffeeName: 'Virraldo',
    origin: 'Yemen',
    intensity: 10,
    inStock: 11,
    pricePerCup: 690,
    pricePerKg: 9200
}, {
    coffeeName: 'Maula',
    origin: 'Kenya',
    intensity: 6,
    inStock: 14,
    pricePerCup: 610,
    pricePerKg: 8100
}, {
    coffeeName: 'Senkero',
    origin: 'Nigeria',
    intensity: 7,
    inStock: 7,
    pricePerCup: 650,
    pricePerKg: 8700
}, {
    coffeeName: 'Bolva',
    origin: 'Nigeria',
    intensity: 5,
    inStock: 8,
    pricePerCup: 670,
    pricePerKg: 8300
}, {
    coffeeName: 'Ferrenika',
    origin: 'Colorado',
    intensity: 9,
    inStock: 15,
    pricePerCup: 570,
    pricePerKg: 7900
}, {
    coffeeName: 'Honka',
    origin: 'Kenya',
    intensity: 2,
    inStock: 12,
    pricePerCup: 730,
    pricePerKg: 9300
}]

function searchingCoffee() {
    var nodeSearched = document.getElementById('searching');
    var searchedCoffee = nodeSearched.value;
    var foundCoffee = [];
    var van = false;

    for (var i = 0; i < coffeeArray.length; i++) {
        if (searchedCoffee === coffeeArray[i].coffeeName) {
            van = true;
            foundCoffee.push(coffeeArray[i]);
            alert('A kávé neve: ' + foundCoffee[0].coffeeName + '\n' +
                'Származási helye: ' + foundCoffee[0].origin + '\n' +
                'Intenzitása: ' + foundCoffee[0].intensity + '\n' +
                'Készleten: ' + foundCoffee[0].inStock + ' kg');
            break;
        }
    }
    if (van == false) {
        alert('Nem kapható!');
    }
}

function searchingCoffeePart() {
    var nodeSearched = document.getElementById('searchingPart');
    var searchedCoffee = nodeSearched.value;
    var foundCoffee = [];
    var van = false;

    for (var i = 0; i < coffeeArray.length; i++) {
        if (coffeeArray[i].coffeeName.toLowerCase().indexOf(searchedCoffee.toLowerCase()) > -1) {
            van = true;
            foundCoffee.push(coffeeArray[i]);
        }
    }
    if (van == true) {
        var j = 0;
        while (j < foundCoffee.length) {
            alert('A kávé neve: ' + foundCoffee[j].coffeeName + '\n' +
                'Származási helye: ' + foundCoffee[j].origin + '\n' +
                'Intenzitása: ' + foundCoffee[j].intensity + '\n' +
                'Készleten: ' + foundCoffee[j].inStock + ' kg');
            j++;
        }
    }
    if (van == false) {
        alert('Nem kapható!');
    }
}

function listOfAlmostOut() {
    var nodeReceivedAmount = document.getElementById('sortByStock');
    var receivedAmount = parseInt(nodeReceivedAmount.value);
    var foundCoffee = [];
    var van = false;

    for (var i = 0; i < coffeeArray.length; i++) {
        if (receivedAmount >= coffeeArray[i].inStock) {
            van = true;
            foundCoffee.push(coffeeArray[i]);
        }
    }
    if (van == true) {
        var j = 0;
        while (j < foundCoffee.length) {
            alert('A kávé neve: ' + foundCoffee[j].coffeeName + '\n' +
                'Származási helye: ' + foundCoffee[j].origin + '\n' +
                'Intenzitása: ' + foundCoffee[j].intensity + '\n' +
                'Készleten: ' + foundCoffee[j].inStock + ' kg');
            j++;
        }
    }
    if (van == false) {
        alert('Nincs ilyen kávé.');
    }
}

function groupsOfIntensities() {
    var receivedIntensityArray = document.querySelectorAll('INPUT[name=sortByIntensity]');
    var receivedIntensity;
    var intensityArray = [];

    for (var i = 0; i < receivedIntensityArray.length; i++) {
        if (receivedIntensityArray[i].checked == true) {
            receivedIntensity = receivedIntensityArray[i].value;
        }
    }
    if (receivedIntensity == 'light') {
        for (var i = 0; i < coffeeArray.length; i++) {
            if (coffeeArray[i].intensity <= 3) {
                intensityArray.push(coffeeArray[i]);
            }
        }
    }
    if (receivedIntensity == 'mid') {
        for (var i = 0; i < coffeeArray.length; i++) {
            if (4 <= coffeeArray[i].intensity && coffeeArray[i].intensity <= 7) {
                intensityArray.push(coffeeArray[i]);
            }
        }
    }
    if (receivedIntensity == 'strong') {
        for (var i = 0; i < coffeeArray.length; i++) {
            if (coffeeArray[i].intensity >= 8) {
                intensityArray.push(coffeeArray[i]);
            }
        }
    }
    var j = 0;
    while (j < intensityArray.length) {
        alert('A kávé neve: ' + intensityArray[j].coffeeName + '\n' +
            'Származási helye: ' + intensityArray[j].origin + '\n' +
            'Intenzitása: ' + intensityArray[j].intensity + '\n' +
            'Készleten: ' + intensityArray[j].inStock + ' kg');
        j++;
    }
}

function MostCosty() {
    var mostCosty = coffeeArray[0];

    for (var i = 0; i < coffeeArray.length; i++) {
        if (mostCosty.pricePerCup < coffeeArray[i].pricePerCup) {
            mostCosty = coffeeArray[i];
        }
    }
    alert('A kávé neve: ' + mostCosty.coffeeName + '\n' +
        'Származási helye: ' + mostCosty.origin + '\n' +
        'Intenzitása: ' + mostCosty.intensity + '\n' +
        'Készleten: ' + mostCosty.inStock + ' kg' + '\n' +
        'Csésze ára: ' + mostCosty.pricePerCup + ' Ft');
}

function LessCosty() {
    var lessCosty = coffeeArray[0];

    for (var i = 0; i < coffeeArray.length; i++) {
        if (lessCosty.pricePerCup > coffeeArray[i].pricePerCup) {
            lessCosty = coffeeArray[i];
        }
    }
    alert('A kávé neve: ' + lessCosty.coffeeName + '\n' +
        'Származási helye: ' + lessCosty.origin + '\n' +
        'Intenzitása: ' + lessCosty.intensity + '\n' +
        'Készleten: ' + lessCosty.inStock + ' kg' + '\n' +
        'Csésze ára: ' + lessCosty.pricePerCup + ' Ft');
}

function AvgCost() {
    var average = 0;
    var sum = 0;
    var part = 0;

    for (var i = 0; i < coffeeArray.length; i++) {
        sum += coffeeArray[i].pricePerCup;
        part = (i + 1);
    }
    average = sum / part;
    alert(parseInt(average) + ' Ft');
}

function ValueInStock() {
    var AllValue = 0;

    for (var i = 0; i < coffeeArray.length; i++) {
        AllValue += (coffeeArray[i].inStock * coffeeArray[i].pricePerKg);
    }
    alert(AllValue + ' Ft-nyi érték van a boltban');
}

function ByCountries() {
    var byCountries = coffeeArray;

    for (var i = 0; i < byCountries.length - 1; i++) {
        for (var j = i + 1; j < byCountries.length; j++) {
            if (byCountries[i].origin > byCountries[j].origin) {
                var temp = [byCountries[i], byCountries[j]];
                temp[0] = byCountries[j];
                temp[1] = byCountries[i];
            }
        }
    }
    var result = '';
    var k = 0;
    while (k < byCountries.length) {
        result += "A kávé neve: " + byCountries[k].coffeeName + "<br>" +
            "Származási helye: " + byCountries[k].origin + "<br>" +
            "Intenzitása: " + byCountries[k].intensity + "<br>" +
            "Készleten: " + byCountries[k].inStock + " kg" + "<br>" +
            "Csésze ára: " + byCountries[k].pricePerCup + " Ft";
        k++;
    }
    document.querySelector("#listByCountries").innerHTML = result;
}

