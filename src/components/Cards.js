export default class Card{
  constructor({ data, userId, handleLikeCard, handleClickCard, handleDeleteCard}, cardSelector ){
    this._data = data;
    this.userId = userId;
    this._handleLikeCard = handleLikeCard;
    this._handleClickCard = handleClickCard;
    this._handleDeleteCard = handleDeleteCard;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    const cardImage = this._element.querySelector('.element__image');
    cardImage.src = this._data.link;
    cardImage.alt = this._data.name;
    this._element.querySelector('.element__title').textContent = this._data.name;
    this._element.querySelector('.element__counter').textContent = this._data.likes.length;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like')
    .addEventListener('click', () => {
      this._handleLikeCard()
    });
    this._element.querySelector('.element__delete-button')
    .addEventListener('click', () => {
      this._handleDeleteCard()
    });
    this._element.querySelector('.element__image')
    .addEventListener('click', () => {
      this._handleClickCard()
    })
  }
}