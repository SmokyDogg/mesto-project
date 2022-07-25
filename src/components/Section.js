export default class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderAll(items) {
    items.forEach(item => {
      this._renderer(item)
    });
  }

  addItem(domElement) {
    this._container.prepend(domElement);
  }
}