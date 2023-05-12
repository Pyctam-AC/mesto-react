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

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    Promise.all([api.getInfoProfile(), api.getInitialCards()])
      .then(([userInfo, cards]) => {
        setUserInfo(userInfo);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false))
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
    setIsLoading(true)
    api.deleteCard (card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id))
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setIsLoading(false))
  }

  const handleUpdateUser = (dataUser) => {
    setIsLoading(true)
    api.setInfoProfile(dataUser)
      .then((data) => {
        setUserInfo(data);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  };

  const handleUpdateAvatar = (avatar) => {
    setIsLoading(true)
    api.setNewAvatar(avatar)
      .then((data) => {
        setUserInfo(data);
      })
      .then(() => {
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleAddPlaceSubmit = (dataNewPlace) => {
    setIsLoading(true)
    api.setNewCard(dataNewPlace)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const handleOpenNewPlacePopup = () => {
    setNewCardPopupVisible(true);
  };

  const handleOpenEditProfilePopup = () => {
    setProfilePopupVisible(true);
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

  const closeOverlay = (e) => {
    e.stopPropagation()
    if (e.target === e.currentTarget) {
      closeAllPopups()
    }
  }

  useEffect(() => {
    const closeEsc = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };
    if (
      isNewCardPopupVisible ||
      isPhotoCardPopupVisible ||
      isProfilePopupVisible ||
      isAvatarPopupVisible ||
      isDeleteCardPopupVisible
    ) {
      document.addEventListener("keydown", closeEsc)
    }
    return () => {
      document.removeEventListener("keydown", closeEsc);
    };
  }, [
    isNewCardPopupVisible,
    isPhotoCardPopupVisible,
    isProfilePopupVisible,
    isAvatarPopupVisible,
    isDeleteCardPopupVisible,
  ]);

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
            isLoading={isLoading}
          />

          <Footer />

          <EditProfilePopup
            isOpen={isProfilePopupVisible}
            onClose={closeAllPopups}
            closeOverlay={closeOverlay}
            onUpdateUser={(dataUser) => handleUpdateUser(dataUser)}
            isLoading={isLoading}
          />

          <EditAvatarPopup
            isOpen={isAvatarPopupVisible}
            onClose={closeAllPopups}
            closeOverlay={closeOverlay}
            onUpdateAvatar={(avatar) => handleUpdateAvatar(avatar)}
            isLoading={isLoading}
          />

          <AddPlacePopup
            isOpen={isNewCardPopupVisible}
            onClose={closeAllPopups}
            closeOverlay={closeOverlay}
            onAddPlace={(dataNewPlace) => handleAddPlaceSubmit(dataNewPlace)}
            isLoading={isLoading}
          />

          <DeleteCardPopup
            isOpen={isDeleteCardPopupVisible}
            onClose={closeAllPopups}
            closeOverlay={closeOverlay}
            card={deletedCard}
            onDeleteCard={(card) => handleCardDelete(card)}
            isLoading={isLoading}
          />

          <ImagePopup
            isOpen={isPhotoCardPopupVisible}
            card={selectedCard}
            onClose={closeAllPopups}
            closeOverlay={closeOverlay}
          />
        </CardsContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
