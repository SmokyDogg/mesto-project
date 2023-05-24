(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__form-input",submitButtonSelector:".popup__button",inactiveButtonClass:"button_disabled",inputErrorClass:"popup__form-input_type_error",errorClass:"popup__input-error_active"},t=document.querySelector(".diss"),n=(document.querySelector(".elements"),document.querySelectorAll(".popup"),document.querySelector("#popup-add")),r=document.querySelector("#popup-edit"),o=document.querySelector("#popup-image"),i=document.querySelector("#popup-confirm"),a=document.querySelector("#popup-avatar"),u=(o.querySelector(".popup-image__image"),o.querySelector(".popup-image__title"),document.querySelector(".profile__photo")),c=(document.querySelectorAll(".popup__form-input"),document.querySelector(".popup-add__button"),document.querySelector(".popup-edit__button"),document.querySelector(".popup-avatar__button"),document.querySelector(".profile__add-button")),l=document.querySelector(".profile__edit-button"),s=r.querySelector(".popup__form"),f=n.querySelector(".popup__form"),p=a.querySelector(".popup__form"),h=document.querySelector(".profile__name"),d=document.querySelector(".profile__about"),_=document.querySelector("#name-input"),y=document.querySelector("#about-input");function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector("#card-input"),document.querySelector("#link-input"),document.querySelector(".popup-confirm__button");var v=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLikeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"removeLikeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://nomoreparties.co/v1/plus-cohort-10",headers:{authorization:"007c254b-9caf-4bca-b88e-e37c41d9deeb","Content-Type":"application/json"}});function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){e.target.classList.contains("popup")&&o.close()},(n="_closeOnOverlay")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupElement=t,this._handleCloseEsc=this._handleCloseEsc.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleCloseEsc),window.addEventListener("click",this._closeOnOverlay)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleCloseEsc),window.removeEventListener("click",this._closeOnOverlay)}},{key:"_handleCloseEsc",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".popup__close-button").addEventListener("click",(function(){e.close()}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function L(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e,t){var n,r=t.callBack;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=n._popupElement.querySelector(".popup__form"),n._submitBtn=n._popupElement.querySelector(".popup__button"),n._buttonText=n._submitBtn.textContent,n._inputList=Array.from(n._popupElement.querySelectorAll(".popup__form-input")),n._callBack=r,n}return t=a,(n=[{key:"_getInputValue",value:function(){var e=this;return this._inputValue={},this._inputList.forEach((function(t){e._inputValue[t.name]=t.value})),this._inputValue}},{key:"switchCallBack",value:function(e){var t=e.newCallBack;this._callBack=t}},{key:"setEventListeners",value:function(){var e=this;w(O(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._callBack(e._getInputValue())}))}},{key:"close",value:function(){w(O(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._submitBtn.textContent=e?"Сохранение...":this._buttonText}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(k);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function T(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popupElement.querySelector(".popup-image__image"),t._title=t._popupElement.querySelector(".popup-image__title"),t}return t=a,(n=[{key:"openImage",value:function(e,t){P(A(a.prototype),"open",this).call(this),this._image.src=t,this._image.alt=e,this._title.textContent=e}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(k);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderAll",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(t,n,r,o,i,a,u,c){var l=c.handleClickCard,s=c.handleDeleteCard,f=c.handleLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._link=n,this._likes=r,this._id=o,this._userId=i,this._ownerId=a,this._handleLikeCard=f,this._handleClickCard=l,this._handleDeleteCard=s,this._cardSelector=u}var t,n;return t=e,n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLike",value:function(e){this._likes=e,this._likeCount.textContent=this._likes.length,this.isLiked()?this._addLike():this._removeLike()}},{key:"_addLike",value:function(){this._likeButton.classList.add("element__like_active")}},{key:"_removeLike",value:function(){this._likeButton.classList.remove("element__like_active")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._img=this._element.querySelector(".element__image"),this._title=this._element.querySelector(".element__title"),this._likeButton=this._element.querySelector(".element__like"),this._deleteButton=this._element.querySelector(".element__delete-button"),this._likeCount=this._element.querySelector(".element__counter"),this._img.src=this._link,this._img.alt=this._name,this._title.textContent=this._name,this._setEventListeners(),this.setLike(this._likes),this._ownerId!==this._userId&&(this._deleteButton.style.display="none"),this._element}},{key:"deleteCardHandler",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){return e._handleDeleteCard(e._id)})),this._likeButton.addEventListener("click",(function(){return e._handleLikeCard(e._id)})),this._img.addEventListener("click",this._handleClickCard)}}],n&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._about=n,this._avatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?(t.classList.add(this._inactiveButtonClass),t.disabled=!0):(t.classList.remove(this._inactiveButtonClass),t.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._inputList,e._buttonElement)}))})),this._toggleButtonState(this._inputList,this._buttonElement)}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"removeError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $=new J(h,d,u),F=new x(o),K=new M(e,s),Q=new M(e,f),W=new M(e,p),X="";function Y(e){var t=function(e){var t=new H(e.name,e.link,e.likes,e._id,X,e.ownerId,".elements",{handleClickCard:function(){return F.openImage(e.name,e.link)},handleDeleteCard:function(e){ne.open(),ne.switchCallBack({newCallBack:function(){v.removeCard(e).then((function(e){t.deleteCardHandler(),ne.close()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}})},handleLikeCard:function(e){t.isLiked()?v.removeLikeCard(e).then((function(e){t.setLike(e.likes)})).catch((function(e){console.log("Ошибка: ".concat(e))})):v.addLikeCard(e).then((function(e){t.setLike(e.likes)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});return t.generateCard()}(e);!function(e){Z.addItem(e)}(t)}Promise.all([v.getCards(),v.getProfileInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];X=i._id,$.setUserInfo({name:i.name,about:i.about}),$.setUserAvatar(i.avatar),o.reverse(),Z.renderAll(o)})).catch((function(e){console.log("".concat(e))})),K.enableValidation(),Q.enableValidation(),W.enableValidation();var Z=new U({renderer:function(e){Y({name:e.name,link:e.link,likes:e.likes,_id:e._id,userId:X,ownerId:e.owner._id})}},t),ee=new q(n,{callBack:function(e){ee.renderLoading(!0),v.addCard(e.img,e.link).then((function(e){Y({name:e.name,link:e.link,likes:e.likes,_id:e._id,userId:e._id,ownerId:e.owner._id}),ee.close()})).catch((function(e){console.log("Ошибка с созданием: ".concat(e))})).finally((function(){ee.renderLoading(!1)}))}});c.addEventListener("click",(function(){ee.open(),Q.removeError(),Q.disableSubmitButton()})),ee.setEventListeners();var te=new q(r,{callBack:function(e){te.renderLoading(!0),v.editProfile(e.name,e.about).then((function(e){$.setUserInfo(e),te.close()})).catch((function(e){console.log("".concat("Ошибка: ".concat(e)))})).finally((function(){te.renderLoading(!1)}))}});l.addEventListener("click",(function(){te.open();var e=$.getUserInfo();_.value=e.name,y.value=e.about,K.removeError(),K.disableSubmitButton(),console.log("".concat(e.name," ").concat(e.about))})),te.setEventListeners();var ne=new q(i,{});ne.setEventListeners();var re=new q(a,{callBack:function(e){re.renderLoading(!0),v.updateAvatar(e.ava).then((function(e){$.setUserAvatar(e.avatar),re.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){re.renderLoading(!1)}))}});u.addEventListener("click",(function(){re.open(),W.removeError(),W.disableSubmitButton()})),re.setEventListeners(),F.setEventListeners()})();