export default class Popup{
  constructor(popupElement){
    this._popup = document.querySelector(popupElement)
    this._handleCloseEsc = this._handleCloseEsc.bind(this)
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleCloseEsc)
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleCloseEsc)
  }

  _handleCloseEsc(evt) {
    if(evt.key === 'Escape'){
      this.close();
    }
  }

  _setEventListeners() {
    this._popup
      .querySelector('.popup__close-button')
      .addEventListener('click', () => {
        this.close()
      })

    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup')) {
        this.close()
      }
    })
  }
}