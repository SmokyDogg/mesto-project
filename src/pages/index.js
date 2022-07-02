import './index.css';

import { settings } from '../utils/constants.js';

import { api } from '../components/api.js';
import Popup from '../components/Popup.js';
import Card from '../components/Card.js';


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
} from '../utils/constants.js';

import FormValidator from '../components/Validate.js';

import Modal from '../components/Popup.js';

import UserInfo from '../components/UserInfo.js'
const a = {
  userNameSelector: 'profile__name',
  userDescriptionSelector: 'profile__about'
}
const userEx = new UserInfo(a);
//userEx.setUserInfo('Назовитесь', 'Напишите о себе') Пример того, как работает setUserInfo

export let profileId = "";



Promise.all([userEx.getUserInfo(), api.getCards()]) //А тут getUserInfo
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
  api.updateAvatar(popupFormAvatar.elements.ava.value)
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
//popupFormAdd.addEventListener('submit', addNewCard);

openEditButton.addEventListener('click', function() {
  formEdit.elements.name.value = profileName.textContent;
  formEdit.elements.about.value = profileAbout.textContent;
  openPopup(popupEdit)
})

openAddButton.addEventListener('click', () => openPopup(popupAdd));

//profilePhoto.addEventListener('click', () => openPopup(popupAvatar));

popupConfirmButton.addEventListener("click", () => {
  confirmRemove();
  closePopup(popupConfirm)
})