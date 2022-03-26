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
const popupForm = popupEdit.querySelector('.popup__form');
const popupFormAdd = popupAdd.querySelector('.popup__form');
const popupInputs = popupAdd.querySelectorAll('.popup__form-input');
const nameInput = popupEdit.querySelector("#name");
const aboutInput = popupEdit.querySelector("#about");
const cardInput = popupAdd.querySelector("#card");
const linkInput = popupAdd.querySelector("#link");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const submitAddButton = document.querySelector(".popup-add__button");
const submitEditButton = document.querySelector(".popup-edit__button");

function openPopup(popup) {
  popup.classList.add("popup_opened");
};

function textProfileInput(){
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
};
openEditButton.addEventListener("click", () => {
  openPopup(popupEdit);
  textProfileInput();
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
popupForm.addEventListener('submit', editProfileInfo);

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
