import { api } from "./Api.js";

export default class UserInfo {
  constructor(name, about, avatar) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
    };
  }

  setUserInfo(infoName, infoAbout) {
    this._name.textContent = infoName;
    this._about.textContent = infoAbout;
  }

  setUserAvatar(formAvatar) {
    this._avatar.src = formAvatar
  }
}

