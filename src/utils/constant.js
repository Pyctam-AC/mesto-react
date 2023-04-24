//коннтейнер с карточками мест
export const cardsContainer = document.querySelector('.place__card');

//редактирование профиля
export const profileAvatar = document.querySelector('.profile__avatar'); //фото аватара
export const avatarChangeForm = document.querySelector('.popup__form_avatar'); //модалка замены аватара
//export const nameTitle = document.querySelector('.profile__title'); //поле имени на главной странице
//export const job = document.querySelector('.profile__subtitle'); //поле профессии на главной странице

//export const popupProfile = document.querySelector('.popup_profile'); //страница модалки профиля
export const profileForm = document.querySelector('.popup__form_profile'); //обёртка формы в профиля
export const profileOpenButton = document.querySelector('.profile__edit-button'); //кнопка открытия модалки профиля
export const nameInput = profileForm.querySelector('.popup__input_type_name'); //поле ввода имени в модалке профиля
export const jobInput = profileForm.querySelector('.popup__input_type_job'); //поле ввода професии в модалке профиля
//export const buttonClosePopupProfile = document.querySelector('.popup__close-button_profile'); //крестик - кнопка закрытия модалки профиля

//добавления карточки места
export const placeOpenButton = document.querySelector('.profile__add-button'); //кнопка открытия модалки место
//export const popupPlace = document.querySelector('.popup_place'); //страница модалки место
export const placeForm = document.querySelector('.popup__form_place'); //обёртка формы в место
//export const placeInput = placeForm.querySelector('.popup__input_type_place'); //поле ввода названия места в модалке профиля
//export const placeLink = placeForm.querySelector('.popup__input_type_link-place'); //поле ввода ссылки места в модалке профиля
//export const buttonClosePopupPlace = document.querySelector('.popup__close-button_place'); //крестик - кнопка закрытия модалки места

//popup картинки
//export const popupImage = document.querySelector('.popup_img'); //попап с картинкой
//export const popupImg = popupImage.querySelector('.popup__image'); //фото в попап
//export const popupFugureCap = popupImage.querySelector('.popup__figurcap'); //подпись под картинкой в попап
//export const buttonClosePopupImg = document.querySelector('.popup__close-button_img'); //крестик - кнопка закрытия попап с картинкой

//export const buttonAddPopup = document.querySelector('.popup__add-button'); //кнопка сохранения во всех попап


export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    likes: '6'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    likes: '6'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    likes: '6'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    likes: '6'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    likes: '6'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    likes: '6'
  }
];

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  invalidInputClass:'popup__input_invalid',
  inputErrorClassTemplate: '.input-error-',
  formSubmitBtnSelector: '.popup__add-button',
  disableFormBtnClass: 'popup__add-button_disabled'
};

const brom = [1, 2]
