export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => this.getCovidData());

    this.view.btn.addEventListener('click', () => {
      console.log('click my btn');
    });

    this.view.showImg();
  }

  async getCovidData() {
    const data = await this.model.getCovidData();
    this.view.createList(data);
    console.log('data: ', data);
  }
}
