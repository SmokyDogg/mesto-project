import './index.css';

import { diss, settings } from '../utils/constants.js';

import { api } from '../components/Api.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js'
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo12.js';
import FormValidator from '../components/Validate.js'

import {
  popupAdd,
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
  popupImage,
  nameInput,
  aboutInput
} from '../utils/constants.js';

const user = new UserInfo(profileName, profileAbout, '.profile__photo');
const imagePopup = new PopupWithImage(popupImage);
const editValidate = new FormValidator(settings, popupFormEdit);
const addValidate = new FormValidator(settings, popupFormAdd);
const avatarValidate = new FormValidator(settings, popupFormAvatar);
let userId = '';

Promise.all([api.getCards(), api.getProfileInfo()])
  .then(([cards, userData]) => {
    userId = userData._id;
    user.setUserInfo(userData.name, userData.about);
    user.setUserAvatar(userData.avatar);
    cardItems.renderAll(cards);
  })
  .catch((err) => {console.log(`Ошибка: ${err}`)})

  editValidate.enableValidation();
  addValidate.enableValidation();
  avatarValidate.enableValidation();
  
function loadCard(item) {
  cardItems.addItem(item);
}

function createCard(item) {
  const card = new Card(item.name, item.link, item.likes, item._id, userId, item._ownerId, '.elements',
  {handleClickCard: () => imagePopup.openImage(item.name, item.link),
   handleDeleteCard: (id) =>  {
    confirmDelete.open()
    confirmDelete.switchCallBack({newCallBack: () => {
      api.removeCard(id)
      .then(res => {
        card.deleteCardHandler();
        confirmDelete.close()
      })
      .catch((err) => {console.log(`Ошибка: ${err}`)})
    }})
   },
   handleLikeCard: (id) => {
    if(card.isLiked) {
      api.removeLikeCard(id)
    .then(res => {
      card.setLike(res.likes)
    })
    .catch((err) =>{console.log(`Ошибка: ${err}`)})
    } else {
      api.addLikeCard(id)
    .then(res => {
      card.setLike(res.likes)
    })
    .catch((err) =>{console.log(`Ошибка: ${err}`)})
    }
   }
  })
  const cardElement = card.generateCard();
  return cardElement;
}

function doCard (item) {
  const cardElement = createCard(item);
  loadCard(cardElement);
}

const cardItems = new Section({
  renderer:(item) => {
    doCard({name: item.name, link: item.link, likes: item.likes, _id: item._id, userId: userId, ownerId: item._ownerId._id})
  }
}, diss)

const profile = new PopupWithForm(popupFormEdit, {callBack: (info) => {
  profile.renderLoading(true)
  api.editProfile(info.name, info.about)
  .then(res => {
    user.setUserInfo(res.name, res.about);
    profile.close()
  })
  .catch((err) =>{console.log(`Ошибка: ${err}`)})
  .finally(() => {profile.renderLoading(false)})
}})


openEditButton.addEventListener('click', () => {
  profile.open();
  const userData = user.getUserInfo();
  nameInput.value = userData.name;
  aboutInput.value = userData.about;
  editValidate.removeError();
  editValidate.disableSubmitButton()
})

profile.setEventListeners()

const addingCard = new PopupWithForm(popupAdd, {callBack: (item) => {
    addingCard.renderLoading(true)
    api.addCard(item.place, item.placelink)
    .then(res => {
      doCard({name: res.name, link: res.link, likes: res.likes, _id: res._id, userId: res._id, ownerId: res.owner._id});
      addingCard.close()
    })
}})

openAddButton.addEventListener('click', () => {
  addingCard.open();
  addValidate.removeError();
  addValidate.disableSubmitButton()
});

addingCard.setEventListeners()

const confirmDelete = new PopupWithForm('.popup__confirm', {})

confirmDelete.setEventListeners()

const avatarUpdate = new PopupWithForm('.popup__avatar', {callBack: (info) => {
  avatarUpdate.renderLoading(true);
  api.updateAvatar(info.avatar)
  .then(res=> {
    user.setUserAvatar(res.avatar);
    avatarUpdate.close()
  })
  .catch((err) => { console.log(`Ошибка: ${err}`)})
  .finally(() =>{avatarUpdate.renderLoading(false)})
}})

submitAvatarButton.addEventListener('click', () => {
  avatarUpdate.open();
  avatarValidate.removeError();
  avatarValidate.disableSubmitButton()
})

avatarUpdate.setEventListeners();

imagePopup._setEventListeners()