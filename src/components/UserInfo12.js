export default class UserInfo {
  constructor(userNameElement, userAboutElement, userAvatarElement) {
    this._name = userNameElement;
    this._about = userAboutElement;
    this._avatar = userAvatarElement;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src,
      userId: this._id
    };
  }

  setUserInfo(infoName, infoAbout) {
    this._name.textContent = infoName;
    this._about.textContent = infoAbout;
  }

  setUserAvatar(formAvatar) {
    this._avatar = formAvatar
  }

  setUserId(id){
    this._id = id
  }
}

