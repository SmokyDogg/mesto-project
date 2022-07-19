import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, { callBack }) {
    super(popupElement);
    this._form = this._popupElement.querySelector('.popup__form');
    this._submitBtn = this._popupElement.querySelector('.popup__button');
    this._buttonText = this._submitBtn.textContent;
    this._inputList = this._popupElement.querySelectorAll('.popup__input')
    this._callBack = callBack;
  }

  _getInputValue() {
    this._inputValue = {};
    this._inputList.forEach((item) => {
      this._inputValue[item.name] = item.value;

    });

    return this._inputValue;
  }
  
  switchCallBack(newCallBack) {
    this._callBack = newCallBack
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListeners('submit', (evt) => {
      evt.preventDefault();
      this._callBack(this._getInputValue())
    })
  }

  close() {
    super.close();
  }

  renderLoading(isLoading) {
    if(isLoading){
      this._submitBtn.textContent = "Сохранение...";
    } else {
      this._submitBtn.textContent = this._submitBtn.text;
    }

  }
}