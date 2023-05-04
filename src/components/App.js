import React from 'react';
import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import {CardsContext} from '../contexts/CardsContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPopup'

function App() {
  const [currentUser, setUserInfo] = useState(null);
  const [cards, setCards] = useState([]);

  const [selectedCard, setCardPopup] = useState(null);
  const [deletedCard, deletePopup] = useState(null);

  const [isNewCardPopupVisible, setNewCardPopupVisible] = useState(false);
  const [isPhotoCardPopupVisible, setPhotoCardPopupVisible] = useState(false);
  const [isProfilePopupVisible, setProfilePopupVisible] = useState(false);
  const [isAvatarPopupVisible, setAvatarPopupVisible] = useState(false);
  const [isDeleteCardPopupVisible, deleteCardPopupVisible] = useState(false);

  useEffect(() => {
    Promise.all([api.getInfoProfile(), api.getInitialCards()])
      .then(([userInfo, cards]) => {
        setUserInfo(userInfo);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.setLikeCard(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleCardDelete = (card) => {
    api.deleteCard (card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id))
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleUpdateUser = (dataUser) => {
    api.setInfoProfile(dataUser)
      .then((data) => {
        setUserInfo(data);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateAvatar = (avatar) => {
    api.setNewAvatar(avatar)
      .then((data) => {
        setUserInfo(data);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleAddPlaceSubmit = (dataNewPlace) => {
    api.setNewCard(dataNewPlace)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleOpenEditProfilePopup = () => {
    setProfilePopupVisible(true);
  };

  const handleOpenNewPlacePopup = () => {
    setNewCardPopupVisible(true);
  };

  const handleOpenNewAvatarPopup = () => {
    setAvatarPopupVisible(true);
  };

  const handleOpenPopupImage = (card) => {
    setPhotoCardPopupVisible(true);
    setCardPopup(card);
  };

  const handleOpenPopupDeleteCard = (card) => {
    deleteCardPopupVisible(true);
    deletePopup(card);
  };

  const closeAllPopups = () => {
    setProfilePopupVisible(false);
    setNewCardPopupVisible(false);
    setAvatarPopupVisible(false);
    setPhotoCardPopupVisible(false);
    deleteCardPopupVisible(false);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <CardsContext.Provider value={cards}>

          <Header />

          <Main
            onEditProfile={() => handleOpenEditProfilePopup()}
            onAddPlace={() => handleOpenNewPlacePopup()}
            onEditAvatar={() => handleOpenNewAvatarPopup()}
            onCardClick={(card) => handleOpenPopupImage(card)}
            onLikeClick={(card) => handleCardLike(card)}
            onCardDelete={(card) => handleOpenPopupDeleteCard(card)}
          />

          <Footer />

          <EditProfilePopup
            isOpen={isProfilePopupVisible}
            onClose={closeAllPopups}
            onUpdateUser={(dataUser) => handleUpdateUser(dataUser)}
          />

          <EditAvatarPopup
            isOpen={isAvatarPopupVisible}
            onClose={closeAllPopups}
            onUpdateAvatar={(avatar) => handleUpdateAvatar(avatar)}
          />

          <AddPlacePopup
            isOpen={isNewCardPopupVisible}
            onClose={closeAllPopups}
            onAddPlace={(dataNewPlace) => handleAddPlaceSubmit(dataNewPlace)}
          />

          <DeleteCardPopup
            isOpen={isDeleteCardPopupVisible}
            onClose={closeAllPopups}
            card={deletedCard}
            onDeleteCard={(card) => handleCardDelete(card)}
          />

          <ImagePopup
            isOpen={isPhotoCardPopupVisible}
            card={selectedCard}
            onClose={closeAllPopups}
          />

        </CardsContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
