function $(selector) {
    elements = document.querySelectorAll(selector);
    if (elements.length > 1) {
        return elements;
    }
    return document.querySelector(selector);
}

var paragraphElement = $('#text');
console.log(paragraphElement.innerHTML);
console.log(paragraphElement.outerHTML);
console.log(paragraphElement.innerText);
console.log(paragraphElement.outerText);
console.log(paragraphElement.textContent);