function ProfileForm(props) {
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
  )
}

export default ProfileForm;

