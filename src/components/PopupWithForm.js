import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={props.isClose}></button>
        <h3 className="popup__container-title">{props.title}</h3>
        <form name={props.name} className={`popup__form popup__form_${props.name}` } noValidate>
            {props.children}
          <button type="submit" className={`popup__add-button ${props.disabled && 'popup__add-button_disabled'}`}
          onClick={props.isClose}
          >
            {props.buttonTitle}
          </button>
        </form>

      </div>
    </div>
  );
}

export default PopupWithForm;




