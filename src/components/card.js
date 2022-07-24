export default class Card {
  constructor(
    name, link, likes, id, userId, owner, cardSelector,
    { handleClickCard, handleDeleteCard, handleLikeCard }
  ) {
    this._name = name;
    this._link = link;
    this._like = likes;
    this._id = id;
    this._userId = userId;
    this._owner = owner;
    this._handleLikeCard = handleLikeCard;
    this._handleClickCard = handleClickCard;
    this._handleDeleteCard = handleDeleteCard;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  isLiked() {
    const userLikedCard = this._like.find(user => user._id === this._userId);
    return userLikedCard;
  }

  setLike(newLike) {
    this._like = newLike;
    this._likeCount.textContent = this._like.length;

    if (!this.isLiked()) {
      this._addLike();
    } else {
      this._removeLike();
    }
  }

  _addLike() {
    this._likeButton.classList.add("photo__like_active");
  }
  _removeLike() {
    this._likeButton.classList.remove("photo__like_active");
  }

  generateCard() {
    this._element = this._getTemplate();
    this._img = this._element.querySelector(".element__image");
    this._title = this._element.querySelector(".element__title");
    this._likeButton = this._element.querySelector(".element__like");
    this._deleteButton = this._element.querySelector(".element__delete-button");
    this._likeCount = this._element.querySelector(".element__counter");
    this._img.src = this._link;
    this._img.alt = this._name;
    this._title.textContent = this._name;

    this._setEventListeners();
    this.setLike(this._like);

    if (this._owner !== this._userId) {
      this._deleteButton.style.display = "none";
    }

    return this._element;
  }

  deleteCardHandler() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => this._handleDeleteCard(this._id));
    this._likeButton.addEventListener("click", () => this._handleLikeCard(this._id));
    this._img.addEventListener("click", this._handleClickCard);
  }
}
