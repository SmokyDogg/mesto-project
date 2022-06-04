import { popupEdit, popupAdd, popupAvatar} from './modal.js';

const elementTemplate = document.querySelector(".elements").content;
const elementsContainer = document.querySelector(".diss");
const closeButton = document.querySelectorAll(".popup__close-button");
const popupInputs = document.querySelectorAll(".popup__form-input");
const submitAddButton = document.querySelector(".popup-add__button");
const submitEditButton = document.querySelector(".popup-edit__button");
const openAddButton = document.querySelector(".profile__add-button");
const openEditButton = document.querySelector(".profile__edit-button");
const popupFormEdit = popupEdit.querySelector(".popup__form");
const popupFormAdd = popupAdd.querySelector(".popup__form");
const popupFormAvatar = popupAvatar.querySelector('.popup__form')
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const nameInput = popupEdit.querySelector("#name-input");
const aboutInput = popupEdit.querySelector("#about-input");
const cardInput = popupAdd.querySelector("#card-input");
const linkInput = popupAdd.querySelector("#link-input");
const formEdit = document.forms.edit;
const formAdd = document.forms.add;
const formAvatar = document.forms.avatar;
const popupConfirmButton = document.querySelector('.popup-confirm__button')

const apiConfig = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-10',
  headers: {
    authorization: '007c254b-9caf-4bca-b88e-e37c41d9deeb',
    "Content-Type": "application/json"
  }
}

export {
  elementTemplate,
  elementsContainer,
  closeButton,
  popupInputs,
  submitAddButton,submitEditButton,
  openAddButton,
  openEditButton,
  popupFormEdit,
  popupFormAdd,
  popupFormAvatar,
  profileName,
  profileAbout,
  nameInput,
  aboutInput,
  cardInput,
  linkInput,
  formEdit,
  formAdd,
  formAvatar,
  popupConfirmButton,
  apiConfig
}

