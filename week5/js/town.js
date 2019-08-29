 var Populity = 10000;
 var startYear = 2017;
 var whichYear;

 var i = 0;
 while (i < 100) {
     Populity = Populity * 1.03;
     if (Populity >= 20000) {
         whichYear = startYear + i + 1;
         alert(whichYear);
         break;
     }
     i++;
 }

 var ennyibol = 5000;
 var maradt;

 var napokSzama = 0;
 while (ennyibol >= 0) {
     maradt = ennyibol;
     ennyibol = ennyibol - 500 - (100 * napokSzama);
     napokSzama++;
 }
 alert((napokSzama - 1) + ' napra volt elegendő a pénze.' + '\n' + 'Maradt neki: ' + maradt + ' Ft');


 var hanyLabaVanAPoknak = prompt('Hány lába van a póknak?');
 if (hanyLabaVanAPoknak = 8) {
     alert('Ügyes');
 } else {
     hanyLabaVanAPoknak = prompt('Hány lába van a póknak?');
 }