import React from 'react';
import headerLogo from '../images/logo_mesto.svg';

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} className="header__logo" alt="логотип Russia" />
    </header>
  );
}

export default Header;
