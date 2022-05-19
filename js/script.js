const elementTemplate = document.querySelector('.elements').content;
const elementsContainer = document.querySelector('.diss');
const openAddButton = document.querySelector(".profile__add-button");
const openEditButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelectorAll(".popup__close-button");

const popupAdd = document.querySelector("#popup-add");
const popupEdit = document.querySelector("#popup-edit");
const popupImage = document.querySelector("#popup-image");
const popupImageImage = popupImage.querySelector(".popup-image__image");
const popupImageTitle = popupImage.querySelector(".popup-image__title");
const popupFormEdit = popupEdit.querySelector('.popup__form');
const popupFormAdd = popupAdd.querySelector('.popup__form');
const popupInputs = document.querySelectorAll('.popup__form-input');
const nameInput = popupEdit.querySelector("#name-input");
const aboutInput = popupEdit.querySelector("#about-input");
const cardInput = popupAdd.querySelector("#card-input");
const linkInput = popupAdd.querySelector("#link-input");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const submitAddButton = document.querySelector(".popup-add__button");
const submitEditButton = document.querySelector(".popup-edit__button");

function openPopup(popup) {
  popup.classList.add("popup_opened");
};

function saveProfileInput(){
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
};
openEditButton.addEventListener("click", () => {
  openPopup(popupEdit);
  saveProfileInput();
});
openAddButton.addEventListener("click", () => {
  openPopup(popupAdd);
});

function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
};

closeButton.forEach(close =>
  close.addEventListener('click', () => {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
  })
);

function editProfileInfo(evt){
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEdit);
};
popupFormEdit.addEventListener('submit', editProfileInfo);

function openPopupImage(image, title) {
  popupImageImage.setAttribute('src', image);
  popupImageImage.setAttribute('alt', title);
  popupImageTitle.textContent = title;
  openPopup(popupImage);
};

function createCard(name, link){
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  cardElement.querySelector('.element__title').textContent = name;
  cardImage.setAttribute('src', link);
  cardImage.setAttribute('alt', name);

  cardImage.addEventListener('click', () => {
    openPopupImage(link, name);
  });
  cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  cardElement.querySelector('.element__delete-button').addEventListener('click', function(evt) {
    evt.target.closest('.element').remove();
  });
  return cardElement;
};
initialCards.forEach(item => elementsContainer.append(createCard(item.name, item.link)));

function resetInput () {
  popupInputs.forEach(item => item.value = '');
};


popupFormAdd.addEventListener('submit', event => {
  event.preventDefault();
  elementsContainer.prepend(createCard(cardInput.value, linkInput.value));
  closePopup(popupAdd);
  resetInput();
});

//Валидация ошибок 
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__form-input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__form-input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = ' ';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  };
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_disabled');
  } else {
    buttonElement.classList.remove('button_disabled');
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__form-input'));
  const buttonElement = document.querySelector('.popup-button');

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(document.querySelectorAll('.popup__form-set'));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });
  });
};
enableValidation();

