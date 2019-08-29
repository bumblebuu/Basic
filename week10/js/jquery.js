setTimeout(() => {
  $('h1').hide();
}, 3000);

$('h2').hide();
setTimeout(() => {
  $('h2')
    .show()
    .css('color', 'red');
}, 3000);

$('.btn-info').on('click', function () {
  console.log(this);
});

// $('button').click(function () {
//   console.log(this);
// });

$('.btn-secondary').on('click', function () {
  // $(this).off('click');
  console.log(this);
});

// $('.btn-switch').on('click', function () {
//   if (this.classList.contains('btn-light')) {
//     this.classList.remove('btn-light');
//     this.classList.add('btn-dark');
//   } else {
//     this.classList.remove('btn-dark');
//     this.classList.add('btn-light');
//   }
// });

// $('.btn-switch').on('click', function () {
//   this.classList.toggle('btn-light');
//   this.classList.toggle('btn-dark');
// });

$('.btn-switch').on('click', function () {
  $(this).toggleClass('btn-light');
  $(this).toggleClass('btn-dark');
});

$('.card-fade').click(() => {
  $('.card-1').fadeOut(1000, function () {
    $(this).fadeIn(1000);
  });
});

$('.card-toggle').click(() => {
  $('.card-2').fadeToggle(1000);
});

$('.card-fadeto').click(() => {
  const opvalue = Math.random();
  $('.op-span').text(opvalue);
  $('.card-3').fadeTo(250, opvalue, () => {
    //
  });
});

$('.card-slide').click(() => {
  $('.card-4').slideUp(500, function () {
    $(this).slideDown(500);
  });
});

setInterval(() => {
  $('.height-span').text(
    Math.round($('.card-4').height()),
  );
}, 10);

$('.card-slidetoggle').click(() => {
    $('.card-5').slideToggle(500);
});
