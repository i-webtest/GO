const modalTitle = $('.modal__title');
const modalForm = $('.modal__form');
const formInput = $('.modal__form-input');

modalForm.submit(function (e) {
  e.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    success(data) {
      modalTitle.text('Спасибо ваша заявка принята, номер заявки ' + data.id);
      modalForm.slideUp(300);
    },
    error() {
      modalTitle.text('Что-то пошло не так, попробуйте позже!');
    },
  });
});
