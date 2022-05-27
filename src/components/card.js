import {
  openPopup,
  closePopup,
  popupEdit,
  popupImage,
  popupImageImage,
  popupImageTitle
} from './modal.js';
import {
  elementTemplate,
  elementsContainer,
  popupInputs,
  profileName,
  profileAbout,
  nameInput,
  aboutInput,
} from './utils.js';
import {initialCards} from '../js/Cards.js';

function saveProfileInput() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
};
function editProfileInfo(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEdit);
};
function openPopupImage(image, title) {
  popupImageImage.setAttribute("src", image);
  popupImageImage.setAttribute("alt", title);
  popupImageTitle.textContent = title;
  openPopup(popupImage);
};
function createCard(name, link) {
  const cardElement = elementTemplate.querySelector(".element").cloneNode(true);
  const cardImage = cardElement.querySelector(".element__image");
  cardElement.querySelector(".element__title").textContent = name;
  cardImage.setAttribute("src", link);
  cardImage.setAttribute("alt", name);

  cardImage.addEventListener("click", () => {
    openPopupImage(link, name);
  });
  cardElement
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like_active");
    });
  cardElement
    .querySelector(".element__delete-button")
    .addEventListener("click", function (evt) {
      evt.target.closest(".element").remove();
    });
  return cardElement;
};
initialCards.forEach((item) =>
  elementsContainer.append(createCard(item.name, item.link))
);
function resetInput() {
  popupInputs.forEach((item) => (item.value = ""));
};

export {
  saveProfileInput,
  editProfileInfo,
  createCard,
  resetInput
}