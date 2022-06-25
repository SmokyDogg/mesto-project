import './index.css';

import {
  addNewCard,
  renderInitialCards,
  confirmRemove,
  elementDeleteButton
} from '../components/card.js';

import Api from '../components/Api.js'

import {
  openPopup,
  closePopup,
  popupAdd,
  popupEdit,
  popupAvatar,
  profilePhoto,
  popupConfirm,
} from '../components/modal.js';

import {
  openAddButton,
  openEditButton,
  popupFormAdd,
  popupFormEdit,
  popupFormAvatar,
  profileName,
  profileAbout,
  formEdit,
  popupConfirmButton,
  submitEditButton,
  submitAvatarButton,
  elementTemplate
} from '../components/utils.js';

import {
  enableValidation,
} from '../components/validate.js';

export let profileId = "";

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__input-error_active'
});

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-10',
  headers: {
    authorization: '007c254b-9caf-4bca-b88e-e37c41d9deeb',
    "Content-Type": "application/json"
  },
})

Promise.all([getProfileInfo(), getCards()])
  .then(([profile, card]) => {
    profileId = profile._id;
    profileName.textContent = profile.name;
    profileAbout.textContent = profile.about;
    profilePhoto.src = profile.avatar;
    renderInitialCards(card);
  })
  .catch((err) => {
    console.log(err);
  })


function editProfileSubmit(event) {
  event.preventDefault();
  submitEditButton.textContent = 'Сохранение...'
  editProfile(popupFormEdit.elements.name.value, popupFormEdit.elements.about.value)
    .then(() => {
      profileName.textContent = popupFormEdit.elements.name.value;
      profileAbout.textContent = popupFormEdit.elements.about.value;
      closePopup(popupEdit);
      popupFormEdit.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      submitEditButton.textContent = 'Сохранить'
    })
}

function editAvatarSubmit(event) {
  event.preventDefault();
  submitAvatarButton.textContent = 'Сохранение..'
  updateAvatar(popupFormAvatar.elements.ava.value)
    .then(() => {
      profilePhoto.src = popupFormAvatar.elements.ava.value;
      closePopup(popupAvatar);
      popupFormAvatar.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      submitAvatarButton.textContent = 'Сохранить'
    })
}

popupFormAvatar.addEventListener('submit', editAvatarSubmit);
popupFormEdit.addEventListener('submit', editProfileSubmit);
popupFormAdd.addEventListener('submit', addNewCard);

openEditButton.addEventListener('click', function() {
  formEdit.elements.name.value = profileName.textContent;
  formEdit.elements.about.value = profileAbout.textContent;
  openPopup(popupEdit)
})

openAddButton.addEventListener('click', () => openPopup(popupAdd));

profilePhoto.addEventListener('click', () => openPopup(popupAvatar));

popupConfirmButton.addEventListener("click", () => {
  confirmRemove();
  closePopup(popupConfirm)
})