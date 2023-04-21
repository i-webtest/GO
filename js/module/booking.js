const bookingTitle = document.querySelector('.booking__title');
const inputTel = document.querySelector('.form__input-phone');
const inputMail = document.querySelector('.form__input-mail');
const justValidate = new JustValidate('.booking__form');

const telMask = new Inputmask('+7 (999)-999-99-99');
telMask.mask(inputTel);

justValidate
  .addRequiredGroup('.form__fieldset_button', 'Выберите зал')
  .addRequiredGroup('.form__fieldset-console', 'Выберите приставку')
  .addRequiredGroup('.form__fieldset-desktop', 'Выберите игру')
  .addRequiredGroup('.form__fieldset-optional', 'Выберите доп. опции')
  .addField('.form__input-date', [
    {
      rule: 'required',
      errorMessage: 'Укажите дату',
    },
  ])
  .addField('.form__input-time', [
    {
      rule: 'required',
      errorMessage: 'Укажите время',
    },
  ])
  .addField('.form__input-name', [
    {
      rule: 'required',
      errorMessage: 'Введите ваше имя',
    },
  ])
  .addField('.form__input-phone', [
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
  .addField('.form__input-surname', [
    {
      rule: 'required',
      errorMessage: 'Введите вашу фамилию',
    },
  ])
  .addField('.form__input-mail', [
    {
      rule: 'required',
      errorMessage: 'Введите ваш E-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Некорректный адрес',
    },
  ])
  .addField('.form__input-count', [
    {
      rule: 'required',
      errorMessage: 'Укажите количество человек',
    },
  ])
  .onSuccess((event) => {
    const target = event.target;

    axios
      .post('https://postman-echo.com/post', {
        hall: target.hall.value,
        console: target.console.value,
        game: target.game.value,
        optional: target.optional.value,
        date: target.date.value,
        time: target.time.value,
        name: target.name.value,
        phone: target.phone.value,
        count: Number(target.count.value),
        surname: target.surname.value,
        mail: target.mail.value,
      })
      .then((response) => {
        target.reset();
      })
      .catch((err) => {
        console.error(err);
        target.reset();
      });
  });
