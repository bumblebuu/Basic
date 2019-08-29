var autoink = [{
        markaID: 1,
        markaNev: 'Ford',
        tipusok: [{
            tipusID: 1,
            tipusNev: 'Mondeo',
        }, {
            tipusID: 2,
            tipusNev: 'Focus'
        }]
    },
    {
        markaID: 2,
        markaNev: 'Opel',
        tipusok: [{
            tipusID: 3,
            tipusNev: 'Astra'
        }, {
            tipusID: 4,
            tipusNev: 'Corsa'
        }]
    }
];


function getAutoMarkak() {
    var result = [];

    result = autoink.map(item => {
        return {
            markaID: item.markaID,
            markaNev: item.markaNev
        };
    });
    /*for (var i = 0; i < autoink.length; i++) {
        result.push({
            markaID: autoink[i].markaID,
            markaNev: autoink[i].markaNev
        });
    }*/
    return result;
}


window.addEventListener('load', Window_LoadHandler, false);

function Window_LoadHandler() {
    var nodeAutoMarkakComboBox = document.querySelector('#Markak');

    FillAutoMarkakComboBox();
    nodeAutoMarkakComboBox.addEventListener('change', AutoMarkakComboBox_ChangeHandler, false);
}

function AutoMarkakComboBox_ChangeHandler() {
    var cmb = event.target;

    alert(cmb.value);
}

function FillAutoMarkakComboBox() {
    var nodeAutoMarkakComboBox = document.querySelector('#Markak');
    var markak = getAutoMarkak();

    for (var i = 0; i < markak.length; i++) {
        var nodeOption = document.createElement('option');
        nodeOption.innerText = markak[i].markaNev;
        nodeOption.setAttribute('value', markak[i].markaID);
        nodeAutoMarkakComboBox.appendChild(nodeOption);
    }
}