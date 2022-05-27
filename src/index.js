import './pages/index.css';
import {
    saveProfileInput,
    editProfileInfo,
    createCard,
    resetInput
} from './components/card.js';

import {
  openPopup,
  closePopup,
  popupAdd,
  popupEdit
} from './components/modal.js';

import {
  openAddButton,
  openEditButton,
  popupFormAdd,
  popupFormEdit,
  linkInput,
  cardInput
} from './components/utils.js';
import {
  enableValidation
} from './components/validate.js';

openEditButton.addEventListener("click", () => {
  openPopup(popupEdit);
  saveProfileInput();
});
openAddButton.addEventListener("click", () => {
  openPopup(popupAdd);
});
popupFormEdit.addEventListener("submit", editProfileInfo);

popupFormAdd.addEventListener("submit", (event) => {
  event.preventDefault();
  elementsContainer.prepend(createCard(cardInput.value, linkInput.value));
  closePopup(popupAdd);
  resetInput();
});
enableValidation();