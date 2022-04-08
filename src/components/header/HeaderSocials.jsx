import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { IoMdSchool } from 'react-icons/io';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.instagram.com/">
        <AiOutlineInstagram />
      </a>
      <a href="https://smansatugubug.sch.id/">
        <IoMdSchool />
      </a>
    </div>
  );
};

export default HeaderSocials;
