const initialCards = [
  {
    name: "Гатчина",
    link: "https://cdn.fishki.net/upload/post/2018/10/02/2721849/e722087be1cbdcccaed97e053cefa334.jpg",
  },
  {
    name: "Санкт-Петербург",
    link: "https://rustur.ru/wp-content/uploads/2021/09/russia-2396022_1280.jpg",
  },
  {
    name: "Пушкин",
    link: "https://static.gorbilet.com/media/07/2f/77/d443c09a3b9834a53f3f548d1b.jpg",
  },
  {
    name: "Волгоград",
    link: "https://avatars.mds.yandex.net/get-zen_doc/4404559/pub_60214157390eb32b9b82d251_60214600390eb32b9b8ded7b/scale_1200"
  },
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://www.culture.ru/storage/images/c27dd858-4e1c-55a9-8d89-a1c2f0a011f9",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
  {
    name: "Красная Поляна",
    link: "https://cf.youtravel.me/tr:w-800/upload/tours/965/965522135488b52c1e977e417ff0b587.jpg",
  },
  {
    name: "Пермь",
    link: "https://100-faktov.ru/wp-content/uploads/2016/10/971976c62b8f592a5240.jpeg",
  }
];
const elementTemplate = document.querySelector('.elements').content;
const elementsContainer = document.querySelector('.diss');
const openAddButton = document.querySelector(".profile__add-button");
const openEditButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelectorAll(".popup__close-button");
const submitAddButton = document.querySelector(".popup-add__button");
const submitEditButton = document.querySelector(".popup-edit__button");
const popupAdd = document.querySelector("#popup-add");
const popupEdit = document.querySelector("#popup-edit");
const popupImage = document.querySelector("#popup-image");
const popupImageImage = popupImage.querySelector(".popup-image__image");
const popupImageTitle = popupImage.querySelector(".popup-image__title");
const popupInputs = popupAdd.querySelectorAll('.popup__form-input');
const nameInput = popupEdit.querySelector("#name");
const aboutInput = popupEdit.querySelector("#about");
const cardInput = popupAdd.querySelector("#card");
const linkInput = popupAdd.querySelector("#link");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

openEditButton.addEventListener("click", () => {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
});
openAddButton.addEventListener("click", () => {
  openPopup(popupAdd);
});

function closePopup(popupName) {
  popupName.classList.remove('popup_opened')
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
}
submitEditButton.addEventListener('click', editProfileInfo)

function openPopupImage(image, title) {
  popupImageImage.setAttribute('src', image);
  popupImageImage.setAttribute('alt', title);
  popupImageTitle.textContent = title;
  openPopup(popupImage);
}

function createCard(name, link){
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  cardElement.querySelector('.element__title').textContent = name;
  cardImage.setAttribute('src', link)
  cardImage.setAttribute('alt', name);

  cardImage.addEventListener('click', () => {
    openPopupImage(link, name);
  })
  cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active')
  })
  cardElement.querySelector('.element__delete-button').addEventListener('click', function(evt) {
    evt.target.closest('.element').remove();
  })
  return cardElement;
}
initialCards.forEach(item => elementsContainer.append(createCard(item.name, item.link)));

function resetInput () {
  popupInputs.forEach(item => item.value = '');
}

popupAdd.addEventListener('submit', evt => {
  evt.preventDefault();
  elementsContainer.prepend(createCard(cardInput.value, linkInput.value));
  closePopup(popupAdd);
  resetInput();
});
