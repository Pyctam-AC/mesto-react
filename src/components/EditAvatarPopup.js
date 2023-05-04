import React from "react";
import PopupWithForm from './PopupWithForm'
import InputAvatarForm from './InpuAvatartForm'

function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar}) {

  const avatarRef = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }
  return (
    <PopupWithForm
      isOpen={isOpen}
      name="avatar"
      title="Обновить аватар"
      buttonTitle="Сохранить"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <InputAvatarForm
        type="url"
        name="avatar"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
      />
    </PopupWithForm>
  )
}

export default EditAvatarPopup
