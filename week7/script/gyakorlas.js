function buildTable(focistak) {
    var nodeTBody;
    var nodeTR;
    var nodeTD;

    nodeTBody = document.querySelector('#focistakTablazat > tbody');
    nodeTBody.innerText = '';
    for (var i = 0; i < focistak.length; i++) {
        var focista = focistak[i];
        nodeTR = document.createElement('tr');
        nodeTR.setAttribute('data-jatekosid', focista.id);
        for (var memberName in focista) { //memberName=key->data.utonev,data.szulido...
            nodeTD = document.createElement('td');
            if (memberName === 'id') {
                continue;
            }
            switch (memberName) {
                case 'magyar':
                    var nodeCheckBox = document.createElement('input');
                    nodeCheckBox.setAttribute('type', 'checkbox');
                    nodeCheckBox.checked = focista[memberName];
                    nodeCheckBox.setAttribute('disabled', true);
                    nodeTD.appendChild(nodeCheckBox);
                    break;
                case 'kulfoldi':
                    var nodeCheckBox = document.createElement('input');
                    nodeCheckBox.setAttribute('type', 'checkbox');
                    nodeCheckBox.checked = focista[memberName];
                    nodeCheckBox.setAttribute('disabled', true);
                    nodeTD.appendChild(nodeCheckBox);
                    break;
                default:
                    nodeTD.innerText = focista[memberName];
                    break;
            }
            nodeTR.appendChild(nodeTD);
        }
        nodeTD = document.createElement('td');
        nodeTD.innerText = '🛒';
        nodeTD.addEventListener('click', ShoppingTrolley_ClickHandler);
        nodeTR.appendChild(nodeTD);
        nodeTBody.appendChild(nodeTR);
    }

}

/*
function buildComboBox1(elemek) {
    var nodeKlubComboBox = document.querySelector('#cmbKlub');
    var nodeOption;

    for (var i = 0; i < elemek.length; i++) {
        nodeOption = document.createElement('option');
        nodeOption.innerText = elemek[i];
        nodeKlubComboBox.appendChild(nodeOption);
    }
}

function buildComboBox2(elemek) {
    var nodePosztComboBox = document.querySelector('#cmbPoszt');
    var nodeOption;

    for (var i = 0; i < elemek.length; i++) {
        nodeOption = document.createElement('option');
        nodeOption.innerText = elemek[i];
        nodePosztComboBox.appendChild(nodeOption);
    }
}*/

/*
function buildComboBoxMagyKul(elemek) {
    var nodeComboBoxMagyKul = document.querySelector('#cmbMagyKul');
    var nodeOption;

    for (var i = 0; i < elemek.length; i++) {
        nodeOption = document.createElement('option');
        nodeOption.innerText = elemek[i];
        nodeComboBoxMagyKul.appendChild(nodeOption);
    }

}*/

function buildComboBox(cmb, elemek) {
    var nodeComboBox = cmb;
    var nodeOption;

    for (var i = 0; i < elemek.length; i++) {
        nodeOption = document.createElement('option');
        nodeOption.innerText = elemek[i];
        nodeComboBox.appendChild(nodeOption);
    }
}

function buildBasketTable(basket) {
    var nodeTBodyBasket = document.querySelector('#basketTable > tbody');
    nodeTBodyBasket.innerText = '';
    var memberNames = ['vezeteknev', 'utonev', 'poszt', 'ertek'];
    var sum = 0;
    var nodeTDSum = document.createElement('td');
    nodeTRSum = document.querySelector('#basketTable > tfoot > tr');
    nodeTDSum.innerText = '';
    nodeTRSum.appendChild(nodeTDSum);

    for (var i = 0; i < basket.length; i++) {
        var focista = basket[i];
        nodeTR = document.createElement('tr');
        nodeTR.setAttribute('data-jatekosid', focista.id);
        for (var j = 0; j < memberNames.length; j++) {
            /*for (var memberName in focista){
            switch (memberName) {
                case 'vezeteknev':
                    var nodeTD = document.createElement('td');
                    nodeTD.innerText = focista.vezeteknev + ' ' + focista.utonev;
                    nodeTR.appendChild(nodeTD);
                    continue;
                case 'poszt':
                    var nodeTD = document.createElement('td');
                    nodeTD.innerText = focista.poszt;
                    nodeTR.appendChild(nodeTD);
                    continue;
                case 'ertek':
                    var nodeTD = document.createElement('td');
                    nodeTD.innerText = focista.ertek;
                    nodeTR.appendChild(nodeTD);
                    continue;
            }
            }*/
            var nodeTD = document.createElement('td');
            nodeTD.innerText = focista[memberNames[j]];
            nodeTR.appendChild(nodeTD);
        }

        var nodeTD = document.createElement('td');
        nodeTD.innerText = '⌫';
        nodeTD.addEventListener('click', Remove_ClickHandler);
        nodeTR.appendChild(nodeTD);
        nodeTBodyBasket.appendChild(nodeTR);
        sum += focista.ertek;
        nodeTDSum.innerText = sum;
    }
}