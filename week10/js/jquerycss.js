$('.start-animation').click(() => {
  // Osztályok váltása
  //   $('.card-login')
  //     .toggleClass('border-info')
  //     .toggleClass('border-warning');

  // az ez alatti, csak úgy működik, ha kiveszed a html-ből a bg beállítást
  //   $('.card-login .card-header').css('background-color', '#000');
  //   const bg = $('.card-login .card-header').css('background-color');
  //   $('.card-login .card-header').text(bg);

  const str = `width: ${$('.card-login').width()}`;
  $('.output').html(str);
});

// SZÜLŐK KIVÁLASZTÁSA
// $('.btn-login').parent().css('background-color', 'aquamarine');

// $('.btn-login').parents().css('background-color', '#eee');

// $('.btn-login').parents('form').css('background-color', 'lightblue');

// GYEREKEK KIVÁLASZTÁSA
// $('form').children().css('background-color', '#eee');
// a kövi akkor jó, ha kimentesz valamit változóban és annak a leszármazottai között akarsz keresni
// $('form').find('input').css('background-color', '#eee');

// TESTVÉREK KIVÁLASZTÁSA
$('.form-group:first-child').siblings().css('background-color', '#eee');