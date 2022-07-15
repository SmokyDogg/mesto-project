export default class Card {
  constructor(name, link, likes, id, userId, ownerId,
    cardSelector, { handleClickCard, handleDeleteCard, handleLikeCard }
  ) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = id;
    this._userId = userId;
    this._ownerId = ownerId;
    this._handleLikeCard = handleLikeCard;
    this._handleClickCard = handleClickCard;
    this._handleDeleteCard = handleDeleteCard;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  isLiked() {
    const userLikedCard = this._like.find((user) => user._id === this._userId);
    return userLikedCard;
  }

  setLike(newLike) {
    this._like = newLike;
    // this._likeCount.textContent = this._like.length;
    // this._likeCounter = document.querySelector(".element__counter");
    this._likeCounter.textContent = this._like.length;

    if (this.isLiked()) {
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

    const cardImage = this._element.querySelector(".element__image");
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._deleteButton = this._element.querySelector('.element__delete-button')
    this._element.querySelector(".element__title").textContent = this._name;
    this._element.querySelector(".element__counter").textContent =
      this._likes.length;

    this._setEventListeners();
    this.setLike(this._like);

    if (this._id !== this._ownerId) {
      this._deleteButton.style.display = "none";
    }

    return this._element;
  }

  deleteCardHandler() {
    this._element.remove();
    this._element = null;
  };

  _setEventListeners() {
    this._element
      .querySelector(".element__like")
      .addEventListener("click", () => {
        this._handleLikeCard();
      });
    this._element
      .querySelector(".element__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleClickCard();
      });
  }
}
