import React from 'react';
import './Menu.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';

const Menu = () => {
  return (
    <section id="menu">
      <h5>What Menu We Have</h5>
      <h2>Our Menu</h2>

      <div className="container menu__container">
        <article className="menu__now">
          <div className="menu__now-img">
            <img src={IMG1} alt="This is Menu 1" />
          </div>
          <h3>This Is Title</h3>
          <p>Rp. xx.xxx/item</p>
          <p>Rp. xx.xxx/3 item</p>
          <div className="menu__now-cta">
            <a href="https://www.instagram.com/ossftune.shop/" className="btn btn-primary" target={'_blank'}>
              Instagram
            </a>
            <a href="https://api.whatsapp.com/" className="btn" target={'_blank'}>
              WhatsApp
            </a>
          </div>
        </article>
        <article className="menu__now">
          <div className="menu__now-img">
            <img src={IMG1} alt="This is Menu 1" />
          </div>
          <h3>This Is Title</h3>
          <p>Rp. xx.xxx/item</p>
          <p>Rp. xx.xxx/3 item</p>
          <div className="menu__now-cta">
            <a href="https://www.instagram.com/ossftune.shop/" className="btn btn-primary" target={'_blank'}>
              Instagram
            </a>
            <a href="https://api.whatsapp.com/" className="btn" target={'_blank'}>
              WhatsApp
            </a>
          </div>
        </article>
        <article className="menu__now">
          <div className="menu__now-img">
            <img src={IMG1} alt="This is Menu 1" />
          </div>
          <h3>This Is Title</h3>
          <p>Rp. xx.xxx/item</p>
          <p>Rp. xx.xxx/3 item</p>
          <div className="menu__now-cta">
            <a href="https://www.instagram.com/ossftune.shop/" className="btn btn-primary" target={'_blank'}>
              Instagram
            </a>
            <a href="https://api.whatsapp.com/" className="btn" target={'_blank'}>
              WhatsApp
            </a>
          </div>
        </article>

        <article className="menu_-coming-soon"></article>
      </div>
    </section>
  );
};

export default Menu;
