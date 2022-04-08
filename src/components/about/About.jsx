import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg';
import { BiUser } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__card">
            <article className="about__cards">
              <HiUserGroup className="card__icon" />
              <h5>We Are</h5>
              <small>OSIS SMANSAGU</small>
            </article>
            <article className="about__cards">
              <BiUser className="card__icon" />
              <h5>Member</h5>
              <small>20 People</small>
            </article>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore iure recusandae sed nesciunt consequuntur! Ducimus veniam impedit ullam ex sunt, quisquam ea mollitia quod quos perspiciatis quo quam atque. Dolore?</p>
        </div>
      </div>
    </section>
  );
};

export default About;
