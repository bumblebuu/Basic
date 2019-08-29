var textElements = Array.from(document.querySelectorAll('.text'));

// textElements.forEach(function (textElement, index) {
//   textElement.addEventListener('click', function () {
//     console.log(textElement, index);
//   });
// });

function addCustomEventListener(i) {
  textElements[i].addEventListener('click', function clickHandler() {
    console.log(textElements[i], i);
  });
}

for (var i = 0; i < textElements.length; i += 1) {
  addCustomEventListener(i);
}
