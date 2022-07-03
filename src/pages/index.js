import './index.css';

import { settings } from '../utils/constants.js';

import { api } from '../components/Api.js';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithImage from '../components/PopupWithImage';


import {
  openAddButton,
  openEditButton,
  popupFormAdd,
  popupFormEdit,
  popupFormAvatar,
  profileName,
  profileAbout,
  popupConfirmButton,
  submitEditButton,
  submitAvatarButton,
  elementTemplate
} from '../utils/constants.js';

import FormValidator from '../components/Validate.js';

const editValidate = new FormValidator(settings, popupFormEdit);
editValidate.enableValidation();

const addValidate = new FormValidator(settings, popupFormAdd);
addValidate.enableValidation();

const avatarValidate = new FormValidator(settings, popupFormAvatar);
avatarValidate.enableValidation();



import UserInfo from '../components/UserInfo.js'
const a = {
  userNameSelector: 'profile__name',
  userDescriptionSelector: 'profile__about'
}
const userEx = new UserInfo(a);
//userEx.setUserInfo('Назовитесь', 'Напишите о себе') Пример того, как работает setUserInfo
//нихрена у меня не работало, я пытался сам что-то перебрать
//но не пошло, не фартануло

export let profileId = "";

const popupWithForm = new PopupWithForm();
const popupWithImage = new PopupWithImage();



Promise.all([userEx.getUserInfo(), api.getCards()]) //А тут getUserInfo
  .then(([profile, card]) => {
    profileId = profile._id;
    user.setUserInfo(profile.name, profile.about);
    user.setUserAvatar(profile.avatar);
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
  open(popupEdit)
})

openAddButton.addEventListener('click', () => popup.open(popupAdd));

//profilePhoto.addEventListener('click', () => openPopup(popupAvatar));

popupConfirmButton.addEventListener("click", () => {
  confirmRemove();
  closePopup(popupConfirm)
})