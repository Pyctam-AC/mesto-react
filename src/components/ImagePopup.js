function ImagePopup(props) {
  return (
    <div className={`popup popup_img ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container-image">
        <button
          type="button"
          className="popup__close-button popup__close-button_img"
          onClick={props.isClose}
        ></button>
        <figure className="popup__figure">
          <img
            className="popup__image"
            src={props.card?.link}
            alt={props.card?.name}
          />
          <figcaption className="popup__figurcap">
            {props.card?.name}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
