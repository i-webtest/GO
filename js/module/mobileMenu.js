import scrollController from './scrollController.js';

const burgerBtn = $('.burger');
const navigation = $('.navigation-mobile');
const orderBtn = $('.order-mobile');
const navLink = $('.navigation__link');

// const toggleMenu = () => {
//   navigation.toggle('navigation_active');
// };

const openMenu = () => {
  navigation.slideDown();
  burgerBtn.addClass('burger_active');
  scrollController.disabledScroll();
};

const closeMenu = () => {
  navigation.slideUp();
  burgerBtn.removeClass('burger_active');
  scrollController.enabledScroll();
};

burgerBtn.click(function () {
  if (burgerBtn.hasClass('burger_active')) {
    closeMenu();
    // toggleMenu();
  } else {
    openMenu();
    // toggleMenu();
  }
});

orderBtn.click(function () {
  closeMenu();
});

navLink.click(function () {
  closeMenu();
});

$(document).click(function (e) {
  const target = e.target;

  if (
    !(
      $(target).parents('.navigation__list').length ||
      $(target).hasClass('navigation__list') ||
      $(target).hasClass('burger')
    )
  ) {
    closeMenu();
    // toggleMenu();
  }
});

$(document).on('keyup', function (e) {
  if (e.key == 'Escape') {
    closeMenu();
  }
});
