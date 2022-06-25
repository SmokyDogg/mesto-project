export default class Api{
  constructor(settings){
    this._url = settings.baseUrl;
    this._headers = settings.headers;
  }
  _checkResponse(res) {
    if (res.ok){
      return(res.json())
    } else {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  }
  getProfileInfo() {
    return fetch(`${this.settings.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.settings.headers
    }).then(this._checkResponse)
  }
  getCards() {
    return fetch(`${this.settings.baseUrl}/cards`, {
      method: 'GET',
      headers: this.settings.headers
    }).then(this._checkResponse)
  }
  addCard(){
    return fetch(`${this.settings.baseUrl}/cards`, {
      method: 'POST',
      headers: this.settings.headers,
      body: JSON.stringify({
        name,
        link
      })
    }).then(this._checkResponse)
  }
  editProfile(name, about) {
    return fetch(`${this.settings.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.settings.headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._checkResponse)
  }
  updateAvatar(link) {
    return fetch(`${this.settings.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.settings.headers,
      body: JSON.stringify({
        link
      }),
    }).then(this._checkResponse);
  }
  
  removeCard(cardId) {
    return fetch(`${this.settings.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.settings.headers
    }).then(this._checkResponse);
  };
  addLikeCard(cardId) {
    return fetch(`${this.settings.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this.settings.headers
    }).then(this._checkResponse)
  };
  removeLikeCard(cardId) {
    return fetch(`${this.settings.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this.settings.headers
    }).then(this._checkResponse)
  }
}