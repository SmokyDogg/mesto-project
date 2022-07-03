import {api} from './api.js'

export default class UserInfo{
  constructor(settingss) {
    this._userNameSelector = settingss.userNameSelector;
    this._userDescriptionSelector = settingss.userDescriptionSelector;
  }

  async getUserInfo() {
    return await api.getProfileInfo()  
  }

  async setUserInfo(name, about) {
    return await api.editProfile(name, about)
    .then(res => {
      console.log(res)
      document.querySelector(`.${this._userNameSelector}`).textContent = res.name;
      document.querySelector(`.${this._userDescriptionSelector}`).textContent = res.about;
    })
  }

  setUserAvatar(formAvatar) {
    this._avatar.src = formAvatar
  }
}

