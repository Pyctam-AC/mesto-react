import React from "react";
import { useState } from "react";
import PopupWithForm from './PopupWithForm'
import InputForm from './InputForm'

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleLinkChange = (e) => {
    setLink(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPlace({
      name,
      link
    });
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="place"
      title="Новое место"
      buttonTitle="Создать"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <InputForm
        type="text"
        minLength="2"
        maxLength="30"
        name="name"
        placeholder="Название"
        required
        value={name}
        onChange={handleNameChange}
      />
      <InputForm
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        value={link}
        onChange={handleLinkChange}
      />
    </PopupWithForm>
  );

}

export default AddPlacePopup
