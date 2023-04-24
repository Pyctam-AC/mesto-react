import React from 'react';
import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import PopupWithForm from "../components/popupWithForm/PopupWithForm"
import InputForm from '../components/inputForm/InputForm';



function App() {

  const [isNewCardPopupVisible, setNewCardPopupVisible] = useState(false);
  const [isPhotoCardPopupVisible, setPhotoCardPopupVisible] = useState(false);
  const [isProfilePopupVisible, setProfilePopupVisible] = useState(false);
  const [isAvatarPopupVisible, setAvatarPopupVisible] = useState(false);
  const [inputValue, setInputValue] = useState('')


  function closeAllPopups () {
    setProfilePopupVisible(false)
    setNewCardPopupVisible(false)
    setAvatarPopupVisible(false)
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={() => setProfilePopupVisible(true)}
        onAddPlace={() => setNewCardPopupVisible(true)}
        onEditAvatar={() => setAvatarPopupVisible(true)}
      />

      <Footer />

      <PopupWithForm
        isOpen = {isProfilePopupVisible}
        name = 'profile'
        title = 'Редактировать профиль'
        buttonTitle = 'Сохранить'
        disabled = {!inputValue}
        isClose = {() => closeAllPopups()}
      >
        <InputForm type="text" minLength="2" maxLength="40" name="name" placeholder="Введите имя и фамилию"
          required = {true}
          handleChange = {(evt) => setInputValue(evt.target.value)}
        />
        <InputForm type="text" minLength="2" maxLength="200" name="about" placeholder="Введите вашу профессию"
          required = {true}
          handleChange = {(evt) => setInputValue(evt.target.value)}
        />

      </PopupWithForm>


      <PopupWithForm
        isOpen = {isNewCardPopupVisible}
        name = 'place'
        title = 'Новое место'
        buttonTitle = 'Создать'
        disabled = {!inputValue}
        isClose = {() => closeAllPopups()}
      >
        <InputForm type="text" minLength="2" maxLength="30" name="addNamePlace" placeholder="Название"
          required = {true}
          handleChange = {(evt) => setInputValue(evt.target.value)}
        />
        <InputForm type="url" name="addLinkPlace" placeholder="Ссылка на картинку"
          required = {true}
          handleChange = {(evt) => setInputValue(evt.target.value)}
        />

      </PopupWithForm>

      <PopupWithForm
        isOpen = {isAvatarPopupVisible}
        name = 'avatar'
        title = 'Обновить аватар'
        buttonTitle = 'Сохранить'
        disabled = {!inputValue}
        isClose = {() => closeAllPopups()}
      >
        <InputForm type="url" name="avatar" placeholder="Ссылка на картинку"
          required = {true}
          handleChange = {(evt) => setInputValue(evt.target.value)}
        />

      </PopupWithForm>




      <template id="place__item">
        <li className="place__item">
          <button type="button" className="place__trash"></button>
          <img type="button" src="#" className="place__img" alt=""/>
          <div className="place__text">
            <h2 className="place__title"></h2>
            <div className="place__container-like">
              <button type="button" className="like-button"></button>
              <p className="place__like"></p>
            </div>
          </div>
        </li>
      </template>

    </div>
  );
}

export default App;
