import './index.css';
import {
    saveProfileInput,
    editProfileInfo,
    createCard,
    resetInput
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
  cardInput
} from '../components/utils.js';
import {
  enableValidation,
  toggleButtonState,
} from '../components/validate.js';

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__input-error_active'
}); 

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

