window.addEventListener('load', Window_Loadhandler, false); //üzenet amikor felépült a "fa", amit a window-loadhandler fogja elinditani a függvéynünket

function Window_Loadhandler() {
    // alert('Ez egy boszantó dolog');
    var nodeFiatalokFilterButtom = document.querySelector('#btnFiatalok');
    var nodeClearFilterButtom = document.querySelector('#btnClearFilter');

    nodeFiatalokFilterButtom.addEventListener('click', FiatalokFilterButton_ClickHandler, false);
    nodeClearFilterButtom.addEventListener('click', ClearFilterButtom_ClickHandler, false);

    //Idosek
    var nodeIdosekFilterButtom = document.querySelector('#btnIdosek');
    nodeIdosekFilterButtom.addEventListener('click', IdosekFilterButtom_ClickHandler, false);

    //Nem szerint rendez:

    var nodeLanyokFilterButtom = document.querySelector('#btnlanyok');
    nodeLanyokFilterButtom.addEventListener('click', lanyokFilterButtom_ClickHandler, false);

    var nodeFiuk = document.querySelector('#btnfiuk');
    nodeFiuk.addEventListener('click', FiukFilterButtom_Clickhandler, false);

    buildTable(csoport);
}

//fiatalok
function FiatalokFilterButton_ClickHandler() {
    var q = csoport.filter(item => item.kor <= 22);
    buildTable(q);
}

function ClearFilterButtom_ClickHandler() {
    buildTable(csoport);

}
//Idosek
function IdosekFilterButtom_ClickHandler() {
    var q = csoport.filter(item => item.kor >= 23);

    // lanyokFilterButtom_ClickHandler();    //nem mukodik 
    buildTable(q);
}

//Lányok
function lanyokFilterButtom_ClickHandler() {
    var q = csoport.filter(item => item.nem == 'lány');
    buildTable(q);
}
//Fiúk

function FiukFilterButtom_Clickhandler() {
    var q = csoport.filter(item => item.nem == 'fiú');
    buildTable(q);
}




//Hallgatokat tartalmazó tömb
function buildTable(tomb) {
    // console.log(csoport);
    
    //Megpróbálok színezni is:)))
      /* var evenRows = [];
        evenRows=document.querySelectorAll('tr:nth-child(even)');
        for(i = 0; i < evenRows.length; i++){
        evenRows[i].style.background = '#ccc';
        }*/

    var nodeTbody = document.querySelector('#tblCsoport>TBODY');

    nodeTbody.innerText = ''; //kitörli a tbody tartalmát és csak akkor jelenik meg amikor megnyomom a gombot!!
    for (var row = 0; row < tomb.length; row++) {
        var nodeTR = document.createElement('TR');
        var Hallgato = tomb[row];
        for (var propName in tomb[row]) {
            var nodeTD = document.createElement('TD');
            nodeTD.innerText = tomb[row][propName];
            nodeTR.appendChild(nodeTD);
        }
        nodeTbody.appendChild(nodeTR);
    }
}