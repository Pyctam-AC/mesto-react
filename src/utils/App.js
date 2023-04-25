import React from 'react';
import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import PopupWithForm from "../components/PopupWithForm"
import InputForm from '../components/InputForm';
import ImagePopup from '../components/ImagePopup';



function App() {

  const [isNewCardPopupVisible, setNewCardPopupVisible] = useState(false);
  const [isPhotoCardPopupVisible, setPhotoCardPopupVisible] = useState(false);
  const [selectedCard, setCardPopup] = useState()
  const [isProfilePopupVisible, setProfilePopupVisible] = useState(false);
  const [isAvatarPopupVisible, setAvatarPopupVisible] = useState(false);
  const [inputValue, setInputValue] = useState('')

  function onPopupImage (card) {
    setPhotoCardPopupVisible(true);
    setCardPopup(card)

  }

  function closeAllPopups () {
    setProfilePopupVisible(false)
    setNewCardPopupVisible(false)
    setAvatarPopupVisible(false)
    setPhotoCardPopupVisible(false)
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={() => setProfilePopupVisible(true)}
        onAddPlace={() => setNewCardPopupVisible(true)}
        onEditAvatar={() => setAvatarPopupVisible(true)}
        onCardClick={(card) =>
          onPopupImage(card)}
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

      <ImagePopup
        isOpen={isPhotoCardPopupVisible}
        card={selectedCard}
        isClose = {() => closeAllPopups()}
      />

    </div>
  );
}

export default App;
