import React from 'react';
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm"
import InputForm from './InputForm';
import ImagePopup from './ImagePopup';



function App() {
  const [isNewCardPopupVisible, setNewCardPopupVisible] = useState(false);
  const [isPhotoCardPopupVisible, setPhotoCardPopupVisible] = useState(false);
  const [selectedCard, setCardPopup] = useState(null);
  const [isProfilePopupVisible, setProfilePopupVisible] = useState(false);
  const [isAvatarPopupVisible, setAvatarPopupVisible] = useState(false);

  const handleOpenEditProfilePopup = () => {
    setProfilePopupVisible(true);
  };

  const handleOpenNewPlacePopup = () => {
    setNewCardPopupVisible(true);
  };

  const handleOpenNewAvatarPopup = () => {
    setAvatarPopupVisible(true);
  };

  const handleOpenPopupImage = (card) => {
    setPhotoCardPopupVisible(true);
    setCardPopup(card);
  };

  function closeAllPopups() {
    setProfilePopupVisible(false);
    setNewCardPopupVisible(false);
    setAvatarPopupVisible(false);
    setPhotoCardPopupVisible(false);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={() => handleOpenEditProfilePopup()}
        onAddPlace={() => handleOpenNewPlacePopup()}
        onEditAvatar={() => handleOpenNewAvatarPopup()}
        onCardClick={(card) => handleOpenPopupImage(card)}
      />

      <Footer />

      <PopupWithForm
        isOpen={isProfilePopupVisible}
        name="profile"
        title="Редактировать профиль"
        buttonTitle="Сохранить"
        isClose={() => closeAllPopups()}
      >
        <InputForm
          type="text"
          minLength="2"
          maxLength="40"
          name="name"
          placeholder="Введите имя и фамилию"
          required={true}
        />
        <InputForm
          type="text"
          minLength="2"
          maxLength="200"
          name="about"
          placeholder="Введите вашу профессию"
          required={true}
        />
      </PopupWithForm>

      <PopupWithForm
        isOpen={isNewCardPopupVisible}
        name="place"
        title="Новое место"
        buttonTitle="Создать"
        isClose={() => closeAllPopups()}
      >
        <InputForm
          type="text"
          minLength="2"
          maxLength="30"
          name="name"
          placeholder="Название"
          required={true}
        />
        <InputForm
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required={true}
        />
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAvatarPopupVisible}
        name="avatar"
        title="Обновить аватар"
        buttonTitle="Сохранить"
        isClose={() => closeAllPopups()}
      >
        <InputForm
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку"
          required={true}
        />
      </PopupWithForm>

      <ImagePopup
        isOpen={isPhotoCardPopupVisible}
        card={selectedCard}
        isClose={() => closeAllPopups()}
      />
    </div>
  );
}

export default App;
