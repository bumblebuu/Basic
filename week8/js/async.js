console.log(0);

setTimeout(function () { // x idő múlva futtatja le (1000 = 1 sec), de csak a többi után (x idő múlva vagy amikor tudsz)
    console.log(1);
}, 0);

console.log(2);