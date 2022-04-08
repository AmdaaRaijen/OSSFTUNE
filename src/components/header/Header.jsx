import React from 'react';
import './Header.css';
import CTA from './CTA';
import IMG from '../../assets/me.png';
import TypeWriter from './TypeWriter';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>OSSFTUNE</h1>
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
