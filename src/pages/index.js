import './index.css';

import {
    createCard,
} from '../components/card.js';

import {
  openPopup,
  closePopup,
  popupAdd,
  popupEdit
} from '../components/modal.js';

import {
  elementsContainer,
  openAddButton,
  openEditButton,
  popupFormAdd,
  popupFormEdit,
  linkInput,
  cardInput,
  popupInputs,
  profileName,
  profileAbout,
  nameInput,
  aboutInput,
} from '../components/utils.js';

import {
  enableValidation,
  toggleButtonState,
} from '../components/validate.js';

import { initialCards } from '../components/Cards.js'

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__input-error_active'
}); 

function saveProfileInput() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
};

function editProfileInfo(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEdit);
};

initialCards.forEach((item) =>
  elementsContainer.append(createCard(item.name, item.link))
);

function resetInput() {
  popupInputs.forEach((item) => (item.value = ""));
};

openEditButton.addEventListener("click", () => {
  openPopup(popupEdit);
  saveProfileInput();
});
openAddButton.addEventListener("click", () => {
  openPopup(popupAdd);
});
popupFormEdit.addEventListener("submit", editProfileInfo);

popupFormAdd.addEventListener("submit", () => {
  elementsContainer.prepend(createCard(cardInput.value, linkInput.value));
  const inputList = Array.from(popupFormAdd.querySelectorAll(".popup__form-input"));
  const buttonElement = popupFormAdd.querySelector(".popup__button");
  closePopup(popupAdd);
  resetInput();
  toggleButtonState(inputList, buttonElement, { inactiveButtonClass: "button_disabled" });
});

