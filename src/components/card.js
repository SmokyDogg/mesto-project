import { profileId } from '../pages/index.js';
import {
  closePopup,
  openPopup,
  popupAdd,
  popupConfirm,
  popupImage,
  popupImageImage,
  popupImageTitle
} from '../components/modal.js';
import {
  elementTemplate,
  elementsContainer,
  popupFormAdd,
  submitAddButton
} from '../components/utils.js';
import { addCard, removeCard, addLikeCard, removeLikeCard } from '../components/api.js'

let cardElementDelete;
let cardElementId;


function createCard(cardImage, cardName, cardId, cardOwner, cardLikes) {
  const cardElement = elementTemplate.querySelector(".element").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".element__image");
  const cardLike = cardElement.querySelector(".element__like");
  const cardLikeCount = cardElement.querySelector(".element__counter");
  cardElementImage.src = cardImage;
  cardElementImage.alt = cardName;
  cardElement.querySelector(".element__title").textContent = cardName;

  cardLikeCount.textContent = cardLikes.length;

  if(cardLike) {
    likeCard(cardElement, cardLikeCount, cardId);
    cardLikes.forEach((card) => {
      if (card._id === profileId) {
        cardLike.classList.add('element__like_active');
      }
    })
  } else {
    cardLikeCount.textContent = 0;
  };

  if(cardOwner === profileId) {
    elementDeleteButton(cardElement);

    cardElement.querySelector(".element__delete-button").addEventListener('click', (evt) => {
      cardElementDelete = evt.target.closest('.element');
      cardElementId = cardId;
      openPopup(popupConfirm)
    });
    
    
  }

  cardElementImage.addEventListener('click', function() {
    popupImageImage.src = cardImage;
    popupImageImage.alt = cardName;
    popupImageTitle.textContent = cardName;
    openPopup(popupImage)
  })
  return cardElement;
};

function elementDeleteButton(cardElement) {
  const trashButton = document.createElement('button');
  trashButton.classList.add('element__delete-button');
  trashButton.setAttribute('type', 'button');
  cardElement.prepend(trashButton);
  return elementDeleteButton;
}

function confirmRemove(card) {
  removeCard(cardElementId)
    .then(() => {
      cardElementDelete.remove();
    })
    .catch((err) => {
      console.log(err)
    })
}

function likeCard(cardElement, cardLikeCount, cardId) {
  cardElement.querySelector('.element__like').addEventListener('click', function(event) {
    if(!event.target.classList.contains('element__like_active')) {
      addLikeCard(cardId)
        .then((card) => {
          event.target.classList.toggle('element__like_active');
          cardLikeCount.textContent = card.likes.length;
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      removeLikeCard(cardId)
        .then((card) => {
          event.target.classList.toggle('element__like_active');
          cardLikeCount.textContent = card.likes.length;
        })
        .catch((err) => {
          console.log(err);
        })
    }
  })
}

function renderInitialCards(initialCards) {
    initialCards.forEach((card) => {
      elementsContainer.append(createCard(card.link, card.name, card._id, card.owner._id, card.likes))
    })
}

function addNewCard(evt) {
  evt.preventDefault();
  submitAddButton.textContent = 'Сохранение...'
    addCard(popupFormAdd.elements.img.value, popupFormAdd.elements.link.value)
      .then((card) => {
        elementsContainer.prepend(createCard(popupFormAdd.elements.link.value, popupFormAdd.elements.img.value, card._id, card.owner._id, card.likes));
        closePopup(popupAdd);
        popupFormAdd.reset();
        submitAddButton.classList.add('button_disabled');
        submitAddButton.disabled = true
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        submitAddButton.textContent = 'Создать'
      })
}

export { addNewCard, renderInitialCards, confirmRemove, elementDeleteButton }