import React from "react";
import { useState, useEffect, useContext } from "react";
import PopupWithForm from './PopupWithForm'
import InputForm from './InputForm'
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleAboutChange = (e) => {
    setAbout(e.target.value)
  }

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser?.name);
    setAbout(currentUser?.about);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateUser({
      name,
      about
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="profile"
      title="Редактировать профиль"
      buttonTitle="Сохранить"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <InputForm
        type="text"
        minLength="2"
        maxLength="40"
        name="name"
        placeholder="Введите имя и фамилию"
        required
        value={name ?? ''}
        onChange={handleNameChange}
      />
      <InputForm
        type="text"
        minLength="2"
        maxLength="200"
        name="about"
        placeholder="Введите вашу профессию"
        required
        value={about ?? ''}
        onChange={handleAboutChange}
      />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
