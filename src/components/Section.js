export default class Section {
  constructor(data, selector) {
    this._items = data.items;
    this._renderer = data.renderer;
    this._container = document.querySelector(selector);
  }

  renderAll() {
    console.log(this._items)
    this._items.forEach((item) => {
      this._element = this._renderer(item);
      this.addItem(this._element)
    });
  }

  addItem(domElement) {
    this._container.append(domElement);
  }
}