import React from 'react';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext'
import {CardsContext} from '../contexts/CardsContext';
import Spinner from './Spinner';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onLikeClick,
  onCardDelete,
  isLoading}) {

  const currentUser = React.useContext(CurrentUserContext);
  const cards = React.useContext(CardsContext);


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div onClick={onEditAvatar} className="profile__avatar">
          {isLoading
            ? <Spinner />
            : <img
                src={currentUser?.avatar}
                className="profile__photo"
                alt="фото аватара"
              />
          }

          </div>
          <div className="profile__text">
            <h1 className="profile__title">{isLoading? "" : currentUser?.name}</h1>
            <p className="profile__subtitle">{isLoading? "" : currentUser?.about}</p>
          </div>
          <button
            onClick={onEditProfile}
            type="button"
            className="profile__edit-button"
          ></button>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-button"
        ></button>
      </section>

      <section className="place" aria-label="фотографии различных мест России">
        <ul className="place__card">
          <CurrentUserContext.Provider value={currentUser}>
            {cards?.map((item) => (
              <Card
                card={item}
                key={item._id}
                onCardClick={onCardClick}
                onLikeClick={onLikeClick}
                onCardDelete={onCardDelete}
              />
            ))}
          </CurrentUserContext.Provider>
        </ul>
      </section>
    </main>
  );
}

export default Main;
