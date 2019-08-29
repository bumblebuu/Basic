function Jutalek() {
    var bekertEladasiOsszeg = document.getElementById('bekertEladasiOsszeg');
    var eladasiOsszeg = parseInt(bekertEladasiOsszeg.value);
    var kapnak = eladasiOsszeg * 0.1;
    if (eladasiOsszeg >= 1000000) {
        alert(kapnak + 'FT-ot kapnak');
    } else {
        alert('Lóf*szt sem kapnak!');
    }
}

function JutalekPlusz() {
    var bekertEladasiOsszegPlusz = document.getElementById('bekertEladasiOsszegPlusz');
    var eladasiOsszegPlusz = parseInt(bekertEladasiOsszegPlusz.value);
    var kapnakPlusz = eladasiOsszegPlusz * 0.1;
    var kapnakPlusz5 = eladasiOsszegPlusz * 0.05;
    if (eladasiOsszegPlusz >= 1000000) {
        alert(kapnakPlusz + 'FT-ot kapnak');
    } else if (eladasiOsszegPlusz >= 500000) {
        alert(kapnakPlusz5 + 'FT-ot kapnak');
    } else {
        alert('Lóf*szt sem kapnak!');
    }
}

function VillanySzamla() {
    /* var nodeElozoAllas = document.getElementById('elozoAllas');
     var nodeJelenlegiAllas = document.getElementById('jelenlegiAllas');
     var elozoAllas = parseInt(nodeElozoAllas.value);
     var jelenlegiAllas = parseInt(nodeJelenlegiAllas.value);*/

    while (true) {
        jelenlegiAllas = parseInt(prompt("Add meg a villanyóra jelenlegi állását!", 1111));
        elozoAllas = parseInt(prompt("Add meg a villanyóra előző állását!", 1111));
        if ((jelenlegiAllas >= 0 && jelenlegiAllas <= 9999) && (elozoAllas >= 0 && elozoAllas <= 9999)) {
            break;
        }
        alert("Hibás érték!")
    }
    /*var valtozas;
    var osszeg;*/

    var egyseg = 37.5;
    var villanySzamlaAfaNelkul = Math.abs(jelenlegiAllas - elozoAllas) * egyseg;
    var VillanySzamla = villanySzamlaAfaNelkul * 1.27;
    alert(VillanySzamla);
}