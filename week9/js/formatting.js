// Dátumformázás

const date = new Date();
console.log(new Intl.DateTimeFormat('hu-HU').format(date));


// Karakterek összehasonlítása, rendezése

const list = ['ä', 'a', 'z'];
const l10nDE = new Intl.Collator('de');
const l10nSV = new Intl.Collator('sv');

console.log(l10nDE.compare('ä', 'z')); // -1
console.log(l10nSV.compare('ä', 'z')); // 1
console.log(list.sort(l10nDE.compare)); // ["a", "ä", "z"]
console.log(list.sort(l10nSV.compare)); // ["a", "z", "ä"]


// Pénznemek

const l10nUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const l10nGBP = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

const l10nEUR = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

console.log(l10nUSD.format(100200300.4)); // $100,200,300.40
console.log(l10nGBP.format(100200300.4)); // £100,200,300.40
console.log(l10nEUR.format(100200300.4)); // 100.200.300,40 €
