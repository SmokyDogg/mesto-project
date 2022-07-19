import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement){
    super(popupElement);
    this._image = this._popupElement.querySelector('.popup-image__image');
    this._title = this._popupElement.querySelector('.popup-image__title')
  }

  openImage(name, link) {
    super.open();
    this._image.src = link;
    this._title.textContent = name;
    this._image.alt = name;
  }
}