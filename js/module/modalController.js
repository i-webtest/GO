import scrollController from './scrollController.js';

const overlay = $('.modal');
const modal = $('.modal__main');
const modalBtn = $('.order');
const modalClose = $('.modal__close');

const openModal = () => {
  overlay.show(500);
  scrollController.disabledScroll();
};

const closeModal = () => {
  overlay.hide(500);
  scrollController.enabledScroll();
};

modalBtn.click(function () {
  openModal();
});

modalClose.click(function () {
  closeModal();
});

overlay.click(function (e) {
  if (!($(e.target).parents('.modal__main').length || $(e.target).hasClass('modal__main'))) {
    closeModal();
  }
});

$(document).on('keyup', function (e) {
  if (e.key == 'Escape') {
    closeModal();
  }
});
