import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="container container--header">
        <a href="/" className="header__logo">
          <img src="./img/instagram-logo.svg" alt="Instagram Logo" className="header__logo-img" />
        </a>

        <button className="header__button">
          <i className="far fa-paper-plane"></i>
        </button>
      </div>
    </header>
  );
};