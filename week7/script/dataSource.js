function dataSource(baseData) {

    var autoIncrement = function (eredetiFocistak) {
        for (var i = 0; i < eredetiFocistak.length; i++) {
            eredetiFocistak[i].id = (i + 1);
        }
        return eredetiFocistak;
    }

    var items = autoIncrement(baseData);

    this.getAllItem = function () { // ha this-szel kezded akkor látszik kívülről is
        // return items.map(x => x);
        var clone = items.map(x => x);
        return clone;
    }
    this.getKlubs = function () {
        var klubs = [];
        var focista;
        var mindenFocista = this.getAllItem();

        for (var i = 0; i < mindenFocista.length; i++) {
            focista = mindenFocista[i];
            if (klubs.indexOf(focista.klub) == -1) {
                klubs.push(focista.klub);
            }
        }
        return klubs;
    }

    this.getFocistakByKlub = function (klub) {
        var result = [];

        /*for (var i = 0; i < items.length; i++) {
            focista = items[i];
            if (focista.klub === klub) {
                result.push(focista);
            }
        }*/

        result = items.filter(item => item.klub === klub);

        return result;
    }

    this.getPosztok = function () {
        var posztok = [];
        var focista;
        // var mindenFocista = this.getAllItem();

        for (var i = 0; i < items.length; i++) {
            focista = items[i];
            if (posztok.indexOf(focista.poszt) == -1) {
                posztok.push(focista.poszt);
            }
        }
        return posztok;
    }
    this.getFocistakByPoszt = function (poszt) {
        var result = [];

        for (var i = 0; i < items.length; i++) {
            focista = items[i];
            if (focista.poszt === poszt) {
                result.push(focista);
            }
        }
        return result;
    }

    this.getSzarmazas = function () {
        var szarmazas = ['Kettős állampolgár', 'Magyar', 'Külföldi'];
        return szarmazas;
    }

    this.getFocistakBySzarmazas = function (szarmazas) {
        var result = [];

        switch (szarmazas) {
            case 'Kettős állampolgár':
                for (var i = 0; i < items.length; i++) {
                    if (items[i].magyar == true && items[i].kulfoldi == true) {
                        result.push(items[i]);
                    }
                }
                break;
            case 'Magyar':
                for (var i = 0; i < items.length; i++) {
                    if (items[i].magyar == true && items[i].kulfoldi == false) {
                        result.push(items[i]);
                    }
                }
                break;
            case 'Külföldi':
                for (var i = 0; i < items.length; i++) {
                    if (items[i].kulfoldi == true && items[i].magyar == false) {
                        result.push(items[i]);
                    }
                }
                break;
        }
        return result;
    }

    this.getFocistakByName = function (inputName) {
        var result = [];
        var focista;
        var van = false;

        for (var i = 0; i < items.length; i++) {
            focista = items[i];
            if (focista.vezeteknev.toLowerCase().indexOf(inputName.toLowerCase()) > -1 ||
                focista.utonev.toLowerCase().indexOf(inputName.toLowerCase()) > -1) {
                result.push(focista);
                van = true;
            }
        }
        if (van == false) {
            alert('Nincs találat!');
        }
        return result;
    }

    function GetDateOfBirth(baseForm) {
        var dateOfBirth = new Date(baseForm);

        return dateOfBirth;
    }

    function GetYearOfBirth(baseForm) {
        var dateOfBirth = new Date(baseForm);
        var year = dateOfBirth.getFullYear();
        return year;
    }

    this.getSzulEv = function () {
        var szulEvek = [];
        var szulEv;


        for (var i = 0; i < items.length; i++) {
            szulEv = GetYearOfBirth(items[i].szulido)
            if (szulEvek.indexOf(szulEv) == -1) {
                szulEvek.push(szulEv);
            }
        }

        function increasing(szulEvek) {
            for (var i = 0; i < szulEvek.length - 1; i++) {
                for (var j = i + 1; j < szulEvek.length; j++) {
                    if (szulEvek[i] > szulEvek[j]) {
                        temp = [szulEvek[i], szulEvek[j]];
                        szulEvek[j] = temp[0];
                        szulEvek[i] = temp[1];
                    }
                }
            }
        }
        increasing(szulEvek);
        return szulEvek;
    }

    this.getFocistakBySzulEv = function (szulEv) {
        var result = [];
        var szulEvOfFocista;

        for (var i = 0; i < items.length; i++) {
            szulEvOfFocista = GetYearOfBirth(items[i].szulido);
            if (szulEv == szulEvOfFocista) {
                result.push(items[i]);
            }
        }
        return result;
    }


    this.getJatekosByID = function (jatekosID) {
        var result = null;

        for (var i = 0; i < items.length; i++) {
            if (jatekosID === items[i].id) {
                result = items[i];
                break;
            }
        }

        return result;
    }
}