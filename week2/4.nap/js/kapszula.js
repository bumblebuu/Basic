var colorInput = document.getElementById("color");
var tube = []

function show() {
    alert(tube);
}

function toStart() {
    tube.unshift(colorInput.value);
}

function toEnd() {
    tube.push(colorInput.value);
}

function fromStart() {
    tube.shift();
}

function fromEnd() {
    tube.pop();
}