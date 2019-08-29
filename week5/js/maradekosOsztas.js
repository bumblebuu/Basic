function MaradekosOsztas(osztando, oszto) {
    var result = {};

    result.hanyados = Math.floor(osztando / oszto);
    result.maradek = osztando % oszto;
    return result;
}

var x;
x = MaradekosOsztas(100, 3);
console.log(x);