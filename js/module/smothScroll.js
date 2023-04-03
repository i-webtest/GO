/*
export const smothScroll = () => {
  const links = document.querySelectorAll('.navigation__link');
  const downBtn = document.querySelector('.hero__down');
  const bookingBtn = document.querySelector('.hero__booking');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const id = link.getAttribute('href').substring(1);
      const section = document.getElementById(id);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
    });
  });

  downBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const id = downBtn.getAttribute('href').substring(1);
    const section = document.getElementById(id);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  });

  bookingBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const id = bookingBtn.getAttribute('href').substring(1);
    const section = document.getElementById(id);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  });
};
*/
