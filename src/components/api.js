export default class Api{
  constructor({baseUrl, headers}){
    this._url = baseUrl;
    this._headers = headers;
  }
  _checkResponse(res) {
    if (res.ok){
      return(res.json())
    } else {
     return Promise.reject(res.status)
    }
  }
  getProfileInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    }).then(this._checkResponse)
  }
  getCards() {
     return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    }).then(this._checkResponse)
  }
  addCard(name, link){
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    }).then(this._checkResponse)
  }
  editProfile(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      }),
    }).then(this._checkResponse)
  }
  updateAvatar(link) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        link
      }),
    }).then(this._checkResponse);
  }
  
  removeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._checkResponse);
  };
  addLikeCard(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers
    }).then(this._checkResponse)
  };
  removeLikeCard(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    }).then(this._checkResponse)
  }
}

export const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-10',
  headers: {
    authorization: '007c254b-9caf-4bca-b88e-e37c41d9deeb',
    "Content-Type": "application/json"
  },
})