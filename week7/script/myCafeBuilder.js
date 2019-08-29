function buildTable(coffees) {
    nodeTBody = document.querySelector('#coffeeTable > tbody');
    nodeTBody.innerText = '';
    var nodeTR;
    var nodeTD;

    for (var i = 0; i < coffees.length; i++) {
        var coffee = coffees[i];
        nodeTR = document.createElement('tr');
        nodeTR.setAttribute('data-coffeeid', coffee.id);
        for (var memberName in coffee) {
            nodeTD = document.createElement('td');
            if (memberName === 'inStock' || memberName === 'pricePerKg' || memberName === 'id') {
                continue;
            }
            nodeTD.innerText = coffee[memberName];
            if (memberName == 'pricePerCup') {
                nodeTD.innerText += ' Ft';
            }
            nodeTD.addEventListener('mouseover', changeColorMouseOver, false);  // boxshadow
            nodeTD.addEventListener('mouseout', RemoveColorMouseOut, false);  // boxshadow
            nodeTR.appendChild(nodeTD);
        }
        nodeTD = document.createElement('td');
        nodeTD.innerText = '+ ☕';
        nodeTD.addEventListener('click', coffeeToTheList_ClickHandler);
        nodeTD.addEventListener('mouseover', changeColorMouseOver, false); // boxshadow
        nodeTD.addEventListener('mouseout', RemoveColorMouseOut, false); // boxshadow
        nodeTR.appendChild(nodeTD);
        nodeTBody.appendChild(nodeTR);
    }
}

function buildComboBox(cmb, elemek) {
    var nodeComboBox = cmb;
    var nodeOption;

    for (var i = 0; i < elemek.length; i++) {
        nodeOption = document.createElement('option');
        nodeOption.innerText = elemek[i];
        nodeComboBox.appendChild(nodeOption);
    }
}

function buildBasketTable(coffees) {
    var nodeTBody = document.querySelector('#basketTable > tbody');
    nodeTBody.innerText = '';
    var nodeTR;
    var nodeTD;
    var memberNames = ['coffeeName', 'pricePerCup'];
    var sum = 0;
    var nodeTDSum = document.querySelector('#basketTable > tfoot > tr>td:nth-child(2)');
    nodeTDSum.innerText = '';

    for (var i = 0; i < coffees.length; i++) {
        var coffee = coffees[i];
        nodeTR = document.createElement('tr');
        nodeTR.setAttribute('data-coffeeid', coffee.id);
        for (var j = 0; j < memberNames.length; j++) {
            var nodeTD = document.createElement('td');
            nodeTD.innerText = coffee[memberNames[j]];
            if (memberNames[j] == 'pricePerCup') {
                nodeTD.innerText += ' Ft';
            }
            nodeTR.appendChild(nodeTD);
        }
        var nodeTD = document.createElement('td');
        nodeTD.innerText = '⌫';
        nodeTD.addEventListener('click', remove_ClickHandler);
        nodeTR.appendChild(nodeTD);
        nodeTBody.appendChild(nodeTR);
        sum += coffee.pricePerCup;
        nodeTDSum.innerText = sum + ' Ft';
    }


}

function buildTableForTakeAway(coffees) {
    nodeTBody = document.querySelector('#coffeeTableTakeAway > tbody');
    nodeTBody.innerText = '';
    var nodeTR;
    var nodeTD;

    for (var i = 0; i < coffees.length; i++) {
        var coffee = coffees[i];
        nodeTR = document.createElement('tr');
        nodeTR.setAttribute('data-coffeeid', coffee.id);
        for (var memberName in coffee) {
            nodeTD = document.createElement('td');
            if (memberName === 'pricePerCup' || memberName === 'id') {
                continue;
            }
            nodeTD.innerText = coffee[memberName];
            if (memberName == 'pricePerKg') {
                nodeTD.innerText += ' Ft';
            }
            nodeTR.appendChild(nodeTD);
        }
        nodeTD = document.createElement('td');
        nodeTD.innerText = '+ 👛';
        nodeTD.addEventListener('click', coffeeToTheTakeAwayList_ClickHandler);
        nodeTR.appendChild(nodeTD);
        nodeTBody.appendChild(nodeTR);
    }
}

function buildTableFootForTakeAway(coffees) {
    var nodeTFoot = document.querySelector('#coffeeTableTakeAway > tfoot');
    var nodeTRNew = nodeTFoot.querySelectorAll('.toDeleteWhenNew');
    //console.log(nodeTRNew);
    nodeTRNew.innerText = '';
    //nodeTFoot.innerText = '';
    var nodeTR;
    var nodeTD;
    var memberNames = ['coffeeName', 'pricePerKg'];
    var sum = 0;
    var nodeTDSum = nodeTFoot.querySelector('tr:last-child>td');
    nodeTDSum.innerText = '';

    for (var i = 0; i < coffees.length; i++) {
        var coffee = coffees[i];
        nodeTR = document.createElement('tr');
        nodeTR.setAttribute('class', 'toDeleteWhenNew');
        nodeTR.setAttribute('data-coffeeid', coffee.id);
        for (var j = 0; j < memberNames.length; j++) {
            var nodeTD = document.createElement('td');
            nodeTD.innerText = coffee[memberNames[j]];
            if (memberNames[j] == 'pricePerKg') {
                nodeTD.innerText += ' Ft';
            }
            nodeTR.appendChild(nodeTD);
        }
        var nodeTD = document.createElement('td');
        nodeTD.innerText = '⌫';
        nodeTD.addEventListener('click', removeTakeAway_ClickHandler);
        nodeTR.appendChild(nodeTD);
        //nodeTFoot.appendChild(nodeTR);
        nodeTFoot.insertBefore(nodeTR, nodeTFoot.children[i + 2]);
        sum += coffee.pricePerKg;
        nodeTDSum.innerText = sum + ' Ft';
    }
}