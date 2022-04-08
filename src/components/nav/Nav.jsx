import React from 'react';
import './Nav.css';
import { AiOutlineHome, AiOutlineTeam } from 'react-icons/ai';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { BiFoodMenu } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineTeam />
      </a>
      <a href="#menu" onClick={() => setActiveNav('#menu')} className={activeNav === '#menu' ? 'active' : ''}>
        <BiFoodMenu />
      </a>
      <a href="#developer" onClick={() => setActiveNav('#developer')} className={activeNav === '#developer' ? 'active' : ''}>
        <MdOutlineDeveloperMode />
      </a>
    </nav>
  );
};

export default Nav;
