import React from "react";

function Card (props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (

    <li className="place__item" key={props.card._id}>
      <button type="button" aria-label="Удалить карточку" className="place__trash"></button>
      <img type="button"
        src={props.card.link}
        className="place__img"
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="place__text">
        <h2 className="place__title">{props.card.name}</h2>
        <div className="place__container-like">
          <button type="button" className="like-button" aria-label="Лайк"></button>
          <p className="place__like">{props.card.likes.length}</p>
        </div>
      </div>
    </li>

  )

}

export default Card
