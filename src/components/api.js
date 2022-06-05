import { apiConfig } from "../components/utils.js";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const getProfileInfo = () => {
  return fetch(`${apiConfig.baseUrl}/users/me`, {
    method: "GET",
    headers: apiConfig.headers,
  })
  .then(checkResponse);
};

const getCards = () => {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    method: "GET",
    headers: apiConfig.headers,
  }).then(checkResponse);
};

const addCard = (nameCard, linkCard) => {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: nameCard,
      link: linkCard,
    }),
  })
  .then(checkResponse);
};

const editProfile = (name, about) => {
  return fetch(`${apiConfig.baseUrl}/users/me`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(checkResponse);
};

const updateAvatar = (link) => {
  return fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: link,
    }),
  }).then(checkResponse);
};

const removeCard = (cardId) => {
  return fetch(`${apiConfig.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then(checkResponse);
};

const addLikeCard = (cardId) => {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: apiConfig.headers,
  }).then(checkResponse);
};

const removeLikeCard = (cardId) => {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then(checkResponse);
};

export {
  getProfileInfo,
  getCards,
  addCard,
  editProfile,
  updateAvatar,
  removeCard,
  addLikeCard,
  removeLikeCard,
};
