import ListComponent from './components/list/list.js';

class App {
  constructor() {
    this.listComponent = new ListComponent();
  }

  initialize() {
    this.listComponent.initialize();
  }
}

const application = new App();

application.initialize();
