import './index.css';

import { diss, popupConfirm, settings } from '../utils/constants.js';

import { api } from '../components/Api.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js'
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/Validate.js'

import {
  popupEdit,
  popupAdd,
  openAddButton,
  openEditButton,
  popupFormAdd,
  popupFormEdit,
  popupFormAvatar,
  popupAvatar,
  profileName,
  profileAbout,
  profilePhoto,
  popupImage,
  nameInput,
  aboutInput
} from '../utils/constants.js';

const user = new UserInfo(profileName, profileAbout, profilePhoto);
const imagePopup = new PopupWithImage(popupImage);
const editValidate = new FormValidator(settings, popupFormEdit);
const addValidate = new FormValidator(settings, popupFormAdd);
const avatarValidate = new FormValidator(settings, popupFormAvatar);
let userId = '';

Promise.all([api.getCards(), api.getProfileInfo()])
  .then(([cards, userData]) => {
    userId = userData._id;
    user.setUserInfo({
      name: userData.name,
      about: userData.about
    });
    profilePhoto.src = userData.avatar;
    user.setUserAvatar(userData.avatar);
    cardItems.renderAll(cards);
  })
  .catch((err) => {console.log(`${err}`)})

  editValidate.enableValidation();
  addValidate.enableValidation();
  avatarValidate.enableValidation();
  
function loadCard(item) {
  cardItems.addItem(item);
}

function createCard(item) {
  const card = new Card(item.name, item.link, item.likes, item._id, userId, item.owner._id, '.elements',
  { handleClickCard: () => imagePopup.openImage(item.name, item.link),
    handleDeleteCard: (id) =>  {
    confirmDelete.open()
    confirmDelete.switchCallBack({newCallBack: () => {
      api.removeCard(id)
      .then(() => {
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
  const newCard = card.generateCard();
  return newCard;
}

function doCard (item) {
  const newCard = createCard(item);
  loadCard(newCard)
}

const cardItems = new Section({
  renderer:(item) => {
    doCard({name: item.name, link: item.link, likes: item.likes, id: item._id, userId: userId, owner: item.owner._id})
  }
}, diss);

const addingCard = new PopupWithForm(popupAdd, {callBack: (item) => {
    addingCard.renderLoading(true)
    api.addCard(item.name, item.link)
    .then(res => {
      doCard({name: res.name, link: res.link, likes: res.likes, id: res._id, userId: res._id, owner: res.owner._id});
      addingCard.close()
    })
    .catch((err) =>{console.log(`Ошибка с созданием: ${err}`)})
    .finally(() =>{addingCard.renderLoading(false)})
}})

openAddButton.addEventListener('click', () => {
  addingCard.open();
  addValidate.removeError();
  addValidate.disableSubmitButton()
});

addingCard.setEventListeners();

const profile = new PopupWithForm(popupEdit, {callBack: (info) => {
  profile.renderLoading(true)
  api.editProfile(
    info.name,
    info.about
  )
  .then(res => {
    user.setUserInfo(res)
    profile.close()
  })
  .catch((err) =>{console.log(`${`Ошибка: ${err}`}`)})
  .finally(() => {profile.renderLoading(false)})
}})


openEditButton.addEventListener('click', () => {
  
  profile.open();
  const userData = user.getUserInfo();
  nameInput.value = userData.name;
  aboutInput.value = userData.about;
  editValidate.removeError();
  editValidate.disableSubmitButton()
  console.log(`${userData.name} ${userData.about}`)
})

profile.setEventListeners()

const confirmDelete = new PopupWithForm(popupConfirm, {});

confirmDelete.setEventListeners()

const avatarUpdate = new PopupWithForm(popupAvatar, {callBack: (info) => {
  avatarUpdate.renderLoading(true);
  api.updateAvatar(info.avatar)
  .then(res=> {
    user.setUserAvatar(res.avatar);
    avatarUpdate.close()
  })
  .catch((err) => { console.log(`Ошибка: ${err}`) })
  .finally(() =>{avatarUpdate.renderLoading(false)})
}})

profilePhoto.addEventListener('click', () => {
  avatarUpdate.open();
  avatarValidate.removeError();
  avatarValidate.disableSubmitButton()
})

avatarUpdate.setEventListeners();

imagePopup.setEventListeners()