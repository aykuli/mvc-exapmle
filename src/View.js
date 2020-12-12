import Img from './assets/0.jpg';

export default class View {
  constructor() {
    this.page = document.getElementById('root');
    this.btn = this.createElement('button', 'btn', this.page);
  }

  createElement(tag, className, appendPoint) {
    const el = document.createElement(tag);
    el.classList.add(className);
    appendPoint.append(el);
    return el;
  }

  createList(data) {
    const ul = this.createElement('ul', 'list', this.page);

    data.forEach(item => {
      const li = this.createElement('li', 'item', ul);
      const text = `${new Date(item.Date)}   |    ${item.Cases}`;
      this.addText(li, text);
    });
  }

  addText(pointToAdd, text) {
    pointToAdd.innerText = text;
  }

  showImg() {
    const img = this.createElement('img', 'img-class', this.page);
    img.setAttribute('src', Img);

    img.style.width = '200px';
    img.style.height = '200px';
  }
}
