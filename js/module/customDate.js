new AirDatepicker('.form__input-date', {
  minDate: new Date(),
  dateFormat: 'dd.MM',
  autoClose: true,
  startDate: new Date(),
  keyboardNav: true,
  // inline: true,
});

$('.form__input-time').timepicker({
  timeFormat: 'HH:mm',
  interval: 120,
  minTime: '10:00',
  maxTime: '18:00',
  startTime: '10:00',
  dropdown: true,
  scrollbar: true,
});
