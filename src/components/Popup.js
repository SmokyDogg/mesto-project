export default class Popup{
  constructor(popupElement){
    this._popupElement = popupElement;
    this._handleCloseEsc = this._handleCloseEsc.bind(this)
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleCloseEsc);
    window.addEventListener('click', this._closeOnOverlay)
  };

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleCloseEsc);
    window.removeEventListener('click', this._closeOnOverlay)
  };

  _handleCloseEsc(evt) {
    if(evt.key === 'Escape'){
      this.close();
    }
  };

  _closeOnOverlay = (evt) => {
    if(evt.target.classList.contains('popup')){
      this.close();
    }
  };

  setEventListeners() {
    this._popupElement
      .querySelector('.popup__close-button').addEventListener('click', () => {
        this.close()
      })
    }
}