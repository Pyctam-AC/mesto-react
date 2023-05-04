import React from "react";
import PopupWithForm from './PopupWithForm'

function DeleteCardPopup ({isOpen, onClose, onDeleteCard, card}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    onDeleteCard(card);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="avatar"
      title="Вы уверены?"
      buttonTitle="Да"
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  )
}

export default DeleteCardPopup
