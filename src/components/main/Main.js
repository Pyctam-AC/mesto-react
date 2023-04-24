import React from 'react';
import { useState, useEffect } from "react";
import api from '../../utils/Api';

function Main(props) {

  const [user, setUserInfo] = useState()
  const [card, setCards] = useState()

  useEffect(() => {
    Promise.all([api.getInfoProfile(), api.getInitialCards()])
      .then(([userInfo, cards]) => {
        console.log(userInfo, cards);
        setUserInfo(userInfo)
      })
      .catch((err) => { console.log(err) });
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div
            onClick={props.onEditAvatar}
            type="button"
            className="profile__avatar"
            >
            <img src={user.avatar} className="profile__photo" alt="фото аватара"/>
          </div>
          <div className="profile__text">
            <h1 className="profile__title">{user.name}</h1>
            <p className="profile__subtitle">{user.about}</p>
          </div>
          <button
            onClick={props.onEditProfile}
            type="button"
            className="profile__edit-button"
            >
          </button>
        </div>
          <button
            onClick={props.onAddPlace}
            type="button"
            className="profile__add-button"
            >
          </button>
      </section>

      <section className="place" aria-label="фотографии различных мест России">
        <ul className="place__card">

        </ul>
      </section>

      </main>
  );
}

export default Main;
