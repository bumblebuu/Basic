var datas = new dataSource(coffeeArray);
var basket = [];
var basketTakeAway = [];

window.addEventListener('load', window_LoadHandler);

function window_LoadHandler() {
    var coffees = datas.getAllItem();

    var nodeShowFilters = document.querySelector('#showFilters');
    var nodeAllCoffeeButton = document.querySelector('#allCoffeeButton');
    var nodeNameSearchButton = document.querySelector('#nameSearchButton');
    var nodeComboBoxOrigin = document.querySelector('#cmbOrigin');
    var nodeRadioBoxIntensity = document.getElementsByName('intensityRadio');
    //console.log(nodeRadioBoxIntensity);
    var nodeBestCoffeeButton = document.querySelector('#bestCoffee');
    var nodeMostCostyButton = document.querySelector('#mostCosty');
    var nodeLessCostyButton = document.querySelector('#lessCosty');
    var nodeStrongestButton = document.querySelector('#strongest');
    var nodeLightestButton = document.querySelector('#lightest');
    var nodeMostInStockButton = document.querySelector('#mostInStock');
    var nodeLessInStockButton = document.querySelector('#lessInStock');

    for (var i = nodeRadioBoxIntensity.length; i--;) { //                       radio button-ok eseménykezelése
        nodeRadioBoxIntensity[i].onclick = radioBoxIntensity_ClickHandler;
    }

    nodeShowFilters.addEventListener('click', showFilters);
    nodeAllCoffeeButton.addEventListener('click', showAllCoffee);
    nodeNameSearchButton.addEventListener('click', findCoffee_ClickHandler);
    nodeComboBoxOrigin.addEventListener('change', comboBoxOrigin_ChangeHandler);
    //nodeRadioBoxIntensity.addEventListener('click', radioBoxIntensity_ClickHandler);
    nodeBestCoffeeButton.addEventListener('click', bestCoffee_ClickHandler);
    nodeMostCostyButton.addEventListener('click', mostCosty_ClickHandler);
    nodeLessCostyButton.addEventListener('click', lessCosty_ClickHandler);
    nodeStrongestButton.addEventListener('click', strongest_ClickHandler);
    nodeLightestButton.addEventListener('click', lightest_ClickHandler);
    nodeMostInStockButton.addEventListener('click', mostInStock_ClickHandler);
    nodeLessInStockButton.addEventListener('click', lessInStock_ClickHandler);

    //nodeBestCoffeeButton.addEventListener('mouseover', changeColorMouseOver, false);
    //nodeBestCoffeeButton.addEventListener('mouseout', RemoveColorMouseOut, false);

    buildComboBox(nodeComboBoxOrigin, datas.getOriginsList());
    buildTable(coffees);
    buildTableForTakeAway(coffees);
}

/*function showFilters(){
    var nodeSearchesDivs = document.querySelectorAll('.searchesDiv');
    nodeSearchesDivs.setAttribute('style', 'display:block');
}*/

function showAllCoffee() {
    buildTable(datas.getAllItem());
}

function findCoffee_ClickHandler() {
    var nodeNameSearch = document.querySelector('#nameSearch');
    var inputName = nodeNameSearch.value;
    //console.log(inputName);

    buildTable(datas.getCoffeesByName(inputName));
}

function comboBoxOrigin_ChangeHandler() {
    var cmb = event.target;
    var origin = cmb.value;

    buildTable(datas.getCoffeesByOrigin(origin));
}

function radioBoxIntensity_ClickHandler() {
    var radio = event.target;
    var intensity = radio.value;

    buildTable(datas.getCoffeesByIntensity(intensity));
}

function mostCosty_ClickHandler() {
    var result = [];
    result.push(datas.getMostCostyCoffee());
    console.log(result);
    buildTable(result);
}

function lessCosty_ClickHandler() {
    var result = [];
    result.push(datas.getLessCostyCoffee());
    console.log(result);
    buildTable(result);
}

function strongest_ClickHandler() {
    var result = [];
    result.push(datas.getStrongestCoffee());
    console.log(result);
    buildTable(result);
}

function lightest_ClickHandler() {
    var result = [];
    result.push(datas.getLightestCoffee());
    console.log(result);
    buildTable(result);
}

function bestCoffee_ClickHandler() {
    console.log(datas.getRandomBest());
    buildTable(datas.getRandomBest());
}

function mostInStock_ClickHandler() {
    var result = [];
    result.push(datas.getMostInStock());
    console.log(result);
    buildTableForTakeAway(result);
}

function lessInStock_ClickHandler() {
    var result = [];
    result.push(datas.getLessInStock());
    console.log(result);
    buildTableForTakeAway(result);
}

function changeColorMouseOver() {
    event.target.style.boxShadow = '5px 5px 5px rgb(85, 84, 84)';

}

function RemoveColorMouseOut() {
    event.target.style.boxShadow = 'none';

}




function coffeeToTheList_ClickHandler() {
    var nodeTD = event.target;
    var nodeTR = nodeTD.parentNode;
    var coffeeID = parseInt(nodeTR.getAttribute('data-coffeeid'));
    var coffee;

    coffee = (datas.getCoffeeById(coffeeID));
    basket.push(coffee);
    //console.log(basket);
    console.log(coffee.inStock);
    buildBasketTable(basket);

    var basketTable = document.querySelector('#basketTable');
    basketTable.setAttribute('style', 'display:block');
}

function remove_ClickHandler() {
    var nodeTD = event.target;
    var nodeTR = nodeTD.parentNode;
    var coffeeID = parseInt(nodeTR.getAttribute('data-coffeeid'));
    var coffee;

    coffee = (datas.getCoffeeById(coffeeID));
    for (var i = 0; i < basket.length; i++) {
        if (coffee == basket[i]) {
            basket.splice(i, 1);
            break;
        }
    }
    buildBasketTable(basket);
    if (basket.length == 0) {
        basketTable.setAttribute('style', 'display:none');
    }

}

function coffeeToTheTakeAwayList_ClickHandler() {
    var nodeTD = event.target;
    var nodeTR = nodeTD.parentNode;
    var coffeeID = parseInt(nodeTR.getAttribute('data-coffeeid'));
    var coffee;

    coffee = (datas.getCoffeeById(coffeeID));
    basketTakeAway.push(coffee);
    // for (var i = 0; i < coffees.length; i++) {
    //     if (coffees[i].id == coffeeID) {
    //         coffee.inStock--;
    //     }
    //     return coffees;
    // }
    // buildTableForTakeAway(coffees);
    //console.log(basket);
    buildTableFootForTakeAway(basketTakeAway);

    var basketTable = document.querySelector('#coffeeTableTakeAway > tfoot');
    basketTable.setAttribute('style', 'display:block');
}

function removeTakeAway_ClickHandler() {
    var nodeTD = event.target;
    var nodeTR = nodeTD.parentNode;
    var coffeeID = parseInt(nodeTR.getAttribute('data-coffeeid'));
    var coffee;

    coffee = (datas.getCoffeeById(coffeeID));
    for (var i = 0; i < basketTakeAway.length; i++) {
        if (coffee == basketTakeAway[i]) {
            basketTakeAway.splice(i, 1);
            break;
        }
    }
    buildTableFootForTakeAway(basketTakeAway);
    if (basketTakeAway.length == 0) {
        basketTakeAway.setAttribute('style', 'display:none');
    }

}