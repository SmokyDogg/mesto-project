import {
  openPopup,
  popupImage,
  popupImageImage,
  popupImageTitle
} from './modal.js';
import {
  elementTemplate,
} from './utils.js';

function openPopupImage(image, title) {
  popupImageImage.setAttribute("src", image);
  popupImageImage.setAttribute("alt", title);
  popupImageTitle.textContent = title;
  openPopup(popupImage);
};
function handleElementLike(evt) {
  evt.target.classList.toggle("element__like_active");
}
function handleDeleteCard(evt) {
  evt.target.closest(".element").remove();
}

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
    .addEventListener("click", handleElementLike);
  cardElement
    .querySelector(".element__delete-button")
    .addEventListener("click", handleDeleteCard);
  return cardElement;
};



export { createCard }