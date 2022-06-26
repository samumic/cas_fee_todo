import ListComponent from './components/list/list.js';
import getFormattedDateFull from './helpers/date.js';

class App {
  constructor() {
    this.listComponent = new ListComponent();
  }

  initialize() {
    this.listComponent.initialize();
    document.querySelector('.js-app-header__subtitle').innerHTML = getFormattedDateFull();
  }
}

const application = new App();

application.initialize();
