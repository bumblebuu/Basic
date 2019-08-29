var t = true;
var f = false;

function writeAnd() {
    alert("true && true = " + (t && t) +
        "\ntrue && false = " + (t && f) +
        "\nfalse && true = " + (f && t) +
        "\nfalse && false = " + (f && f));
}

function writeOr() {
    alert("true || true = " + (t || t) +
        "\ntrue || false = " + (t || f) +
        "\nfalse || true = " + (f || t) +
        "\nfalse || false = " + (f || f));;
}