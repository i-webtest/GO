const inputTel = document.querySelector('.modal__form-input_tel');
const telMask = new Inputmask('+7 (999)-999-99-99');

telMask.mask(inputTel);

const modalTitle = document.querySelector('.modal__title');
const modalFieldset = document.querySelector('.modal__fieldset');
const justValidate = new JustValidate('.modal__form');

justValidate
  .addField('.modal__form-input_name', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваше имя',
    },
  ])
  .addField('.modal__form-input_tel', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваш телефон',
    },
    {
      validator(value) {
        const phone = inputTel.inputmask.unmaskedvalue();
        return !!(Number(phone) && phone.length === 10);
      },
      errorMessage: 'Укажите корректный номер',
    },
  ])
  .onSuccess((event) => {
    const target = event.target;
    axios
      .post('https://postman-echo.com/post', {
        name: target.name.value,
        phone: target.phone.value,
      })
      .then((response) => {
        target.reset();
        modalFieldset.disabled = true;
        modalTitle.textContent = `Спасибо ваша заявка принята, номер заявки ${response.data.id}!`;
      })
      .catch((err) => {
        console.error(err);
        target.reset();
        modalFieldset.disabled = false;
        modalTitle.textContent = 'Что-то пошло не так, попробуйте позже!';
      });
  });
