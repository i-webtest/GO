$('.burger').on('click', function () {
  $('.burger, .navigation').toggleClass('active');
  $('body').toggleClass('lock');
});

const deleteClass = () => {
  if ($('.burger, .navigation').hasClass('active')) {
    $('.burger, .navigation').removeClass('active');
    $('body').removeClass('lock');
  }
};

$('.navigation__link').on('click', deleteClass);

$('.order').on('click', deleteClass);

$(document).on('click', function (e) {
  const target = e.target;

  if ($('.burger, .navigation').hasClass('active')) {
    if (
      !(
        $(target).parents('.navigation__list').length ||
        $(target).hasClass('navigation__list') ||
        $(target).hasClass('burger')
      )
    ) {
      $('.burger, .navigation').removeClass('active');
      $('body').removeClass('lock');
    }
  }
});

$(document).on('keyup', function (e) {
  if (e.key == 'Escape') {
    deleteClass();
  }
});
