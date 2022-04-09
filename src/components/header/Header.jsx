import React from 'react';
import './Header.css';
import CTA from './CTA';
import IMG from '../../assets/ketos.png';
import TypeWriter from './TypeWriter';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>OSSMANSAGU</h1>
        <TypeWriter />
        <CTA />
        <div className="header__img">
          <img src={IMG} alt="img" />
        </div>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
