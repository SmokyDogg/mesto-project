const popup = document.querySelectorAll(".popup");
const popupAdd = document.querySelector("#popup-add");
const popupEdit = document.querySelector("#popup-edit");
const popupImage = document.querySelector("#popup-image");
const popupImageImage = popupImage.querySelector(".popup-image__image");
const popupImageTitle = popupImage.querySelector(".popup-image__title");

//Открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEscape);
};

//Закрытие попапа
function closePopup(popupName, evt) {
  popupName.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEscape);
};

//Закрытие попапа Esc
function closeEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};

//Закрытие попапа крестиком и на свободном месте
popup.forEach((item) => {
  item.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(item);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(item)
    }
  });
});

export {
  openPopup,
  closePopup,
  popupAdd,
  popupEdit,
  popupImage,
  popupImageImage,
  popupImageTitle
};