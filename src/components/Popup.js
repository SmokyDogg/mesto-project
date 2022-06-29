export default class Modal{
  constructor(popupElement){
    this._popupElement = popupElement;
    this._handleCloseEsc = this._handleCloseEsc.bind(this)
  }

  open() {
    this._popupElement.classList.add('popup_opened');
   document.addEventListener('keydown', this._handleCloseEsc)
  }
  close() {
    this._popupElement.classList.remove('popup_opened');
   document.removeEventListener('keydown', this._handleCloseEsc)
  }

  _handleCloseEsc(evt) {
    if(evt.key === 'Escape'){
      this.close();
    }
  }

  _setEventListeners() {
    this._popupElement
      .querySelector('.popup__close-button')
      .addEventListener('click', () => {
        this.close()
      })

    this._popupElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup')) {
        this.close()
      }
    })
  }
}