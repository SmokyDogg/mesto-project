export default class Section {
  constructor({renderer}, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  clear() {
    this._element = null;
  }

  renderAll(items) {
    this.clear();

    items.forEach(item => {
      this._renderer(item)
    });
  }

  addItem(domElement) {
    this._container.prepend(domElement);
  }
}