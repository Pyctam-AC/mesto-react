import React from 'react';

function FormPopup(props) {
  if (props.name === 'profile') {
    return (
      <form name={props.name} className={`popup__form popup__form_${props.name}`} noValidate>
        <input required type="text" minLength="2" maxLength="40" name="name" placeholder="Введите имя и фамилию"
          className="popup__input popup__input_type_name" />
        <span className="error input-error-name"></span>
        <input required type="text" minLength="2" maxLength="200" name="about" placeholder="Введите вашу профессию"
          className="popup__input popup__input_type_job" />
        <span className="error input-error-about"></span>
        <button type="submit" className="popup__add-button">Сохранить</button>
      </form>
    )}
  if (props.name === 'place') {
    return (
      <form name={props.name} className={`popup__form popup__form_${props.name}`} noValidate>
        <input required type="text" minLength="2" maxLength="30" name="addNamePlace" placeholder="Название"
          className="popup__input popup__input_type_place" />
        <span className="error input-error-addNamePlace"></span>
        <input required type="url" name="addLinkPlace" placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_link-place" />
        <span className="error input-error-addLinkPlace"></span>
        <button type="submit" className="popup__add-button">Создать</button>
      </form>
    )}
  if (props.name === 'avatar') {
    return (
      <form name={props.name} className={`popup__form popup__form_${props.name}`} noValidate>
        <input required type="url" name="avatar" placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_link-avatar" />
        <span className="error input-error-avatar"></span>
        <button type="submit" className="popup__add-button">Сохранить</button>
      </form>
    )}
  if (props.name === 'trash') {
    return (
      <form name={props.name} className={`popup__form popup__form_${props.name}`} noValidate>
        <button type="submit" className="popup__add-button">Да</button>
      </form>
  )}
}

export default FormPopup;
