const cardaBody = $('.card-a .card-body');
const carda = $('.card-a');

// $('.start-animation').click(() => {
//     cardaBody.animate({
//         height: '200px',
//         left: '-1000px',
//         opacity: 0.5
//     }, 1000, 'swing', function () {
//         $(this)
//           .parent()
//           .toggleClass('border-info')
//           .toggleClass('border-primary');
//     });
// });

$('.start-animation').click(() => {
  carda.animate({
    left: '0',
    opacity: 1,
  }, 1000, 'swing');
});

// const text = $('.card-login').text();
// console.log(text);

// const html = $('.card-login').html();
// console.log(html);

// const val = $('.card-login input[type=email]').val();
// console.log(val);

const inputs = $('.card-login form input');
const formValues = {};

for (let i = 0; i < inputs.length; i += 1) {
  formValues[inputs.attr('name')] = inputs.val();
}
// $('.output').html(JSON.stringify(formValues, null, 4));


const form = $('.card-login form');
const label = '<label><input name="agree" type="checkbox"> feltételek</label>';
const content = `<div class="checkbox">${  label  }</div>`;

// Hozzáadás html forrás segítségével
//form.append(content);

// Hozzáadás natív js element segítségével
form.append(document.createElement('hr'));

// Hozzáadás jQuery segítségével
form.append($('<button type="button" class="btn btn-sm btn-primary">tovább</button>'));

// Hozzáadás az elejére
form.prepend($('<li>Kérem figyelmesen töltse ki</li><div>&nbsp;</div>'));

$('.login-group').before(content);

// Elem eltávolítása
$('form hr').remove();