var db = new dataSource(data);
var basket = [];

window.addEventListener('load', windowLoadHandler);

function windowLoadHandler() {
    var focistak = db.getAllItem();
    var nodeKlubComboBox = document.querySelector('#cmbKlub');
    var nodePosztComboBox = document.getElementById('cmbPoszt');
    var nodeComboBoxMagyKul = document.querySelector('#cmbMagyKul');
    var nodeNameSearchButton = document.querySelector('#nameSearchButton');
    var nodeSzulEvComboBox = document.querySelector('#cmbSzulEv');

    nodeKlubComboBox.addEventListener('change', KlubComboBox_ChangeHandler);
    nodePosztComboBox.addEventListener('change', PosztComboBox_ChangeHandler);
    nodeComboBoxMagyKul.addEventListener('change', MagyKulComboBox_ChangeHandler);
    nodeNameSearchButton.addEventListener('click', NameSearching);
    nodeSzulEvComboBox.addEventListener('change', SzulEvComboBox_ChangeHandler)

    buildComboBox(nodeKlubComboBox, db.getKlubs());
    buildComboBox(nodePosztComboBox, db.getPosztok());
    buildComboBox(nodeComboBoxMagyKul, db.getSzarmazas());
    buildComboBox(nodeSzulEvComboBox, db.getSzulEv());
    buildTable(focistak);
};

function KlubComboBox_ChangeHandler() {
    var cmb = event.target;
    var klub = cmb.value;

    buildTable(db.getFocistakByKlub(klub));
}

function PosztComboBox_ChangeHandler() {
    var cmb = event.target;
    var poszt = cmb.value;

    buildTable(db.getFocistakByPoszt(poszt));
}

function MagyKulComboBox_ChangeHandler() {
    var cmb = event.target;
    var szarmazas = cmb.value;

    buildTable(db.getFocistakBySzarmazas(szarmazas));
}

function NameSearching() {
    var nodeNameInputText = document.querySelector('#nameSearch');
    var inputName = nodeNameInputText.value;
    //console.log(inputName);

    buildTable(db.getFocistakByName(inputName));
}

function SzulEvComboBox_ChangeHandler() {
    var cmb = event.target;
    var szulEv = cmb.value;

    buildTable(db.getFocistakBySzulEv(szulEv));
}

function ShoppingTrolley_ClickHandler() {
    //alert(event.target.parentNode.getAttribute('data-jatekosid'));
    var nodeTD = event.target;
    var nodeTR = nodeTD.parentNode;
    var jatekosID = parseInt(nodeTR.getAttribute('data-jatekosid'));
    var jatekos;

    jatekos = (db.getJatekosByID(jatekosID));
    basket.push(jatekos);
    console.log(basket);
    buildBasketTable(basket);

    var basketTable = document.querySelector('#basketTable');
    basketTable.setAttribute('style', 'display:block');

}

function Remove_ClickHandler() {
    var nodeTD = event.target;
    var nodeTR = nodeTD.parentNode;
    var jatekosID = parseInt(nodeTR.getAttribute('data-jatekosid'));
    var jatekos;

    jatekos = (db.getJatekosByID(jatekosID));
    for (var i = 0; i < basket.length; i++) {
        if (jatekosID == basket[i].id) {
            basket.splice(i, 1);
            break;
        }
    }
    buildBasketTable(basket);
}