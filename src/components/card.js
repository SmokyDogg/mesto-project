export default class Card{
  constructor(name, link, likes, id, userId, ownerId, cardSelector, { handleClickCard, handleDeleteCard, handleLikeCard } ){
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = id;
    this._userId = userId;
    this._ownerId = ownerId
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

  setLike() {
    this._like = newLike;
    this._likeCount.textContent = this._like.length;
  }

  generateCard() {
    this._element = this._getTemplate();

    const cardImage = this._element.querySelector('.element__image');
    cardImage.src = this._data.link;
    cardImage.alt = this._data.name;
    this._element.querySelector('.element__title').textContent = this._data.name;
    this._element.querySelector('.element__counter').textContent = this._data.likes.length;

    this._setEventListeners();
    this.setLike(this._like);


    if (this._id !== this._ownerId) {
      this._deleteButton.style.display = 'none'
    }

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