export default class UserInfo {
  constructor(userNameElement, userAboutElement, userAvatarElement) {
    this._name = userNameElement;
    this._about = userAboutElement;
    this._avatar = userAvatarElement;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent
    };
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
  }

  setUserAvatar(formAvatar) {
    this._avatar.src = formAvatar
  }
}

