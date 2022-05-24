import getFormattedDateFull from './helpers/date.js';

function setFormattedDate() {
  const element = document.querySelector('.js-app-header__subtitle');
  element.innerText = getFormattedDateFull();
}

setFormattedDate();
