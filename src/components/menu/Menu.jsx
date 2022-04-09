import React from 'react';
import './Menu.css';
import KETOS from '../../assets/ketos.jfif';
import WAKETOS from '../../assets/waketos1.jpg';
import WAKTETOS2 from '../../assets/waketos2.jpg';

const Menu = () => {
  return (
    <section id="menu">
      <h5>Our organizational structure</h5>
      <h2>Structure</h2>

      <div className="container menu__container">
        <article className="menu__now">
          <div className="menu__now-img">
            <img src={KETOS} alt="This is Menu 1" />
          </div>
          <h3>Ketua</h3>
          <h4>Khoiruman Asy'ari</h4>
          <div className="menu__now-cta">
            <a href="https://www.instagram.com/p/CaKZs-BpblZ/" className="btn btn-primary">
              Instagram
            </a>
          </div>
        </article>
        <article className="menu__now">
          <div className="menu__now-img">
            <img src={WAKTETOS2} alt="This is Menu 1" />
          </div>
          <h3>Wakil Ketua 2</h3>
          <h4>Qanita Salsabela</h4>
          <div className="menu__now-cta">
            <a href="https://www.instagram.com/p/CaKZjfipb_H/" className="btn btn-primary">
              Instagram
            </a>
          </div>
        </article>
        <article className="menu__now">
          <div className="menu__now-img">
            <img src={WAKETOS} alt="This is Menu 1" />
          </div>
          <h3>Wakil Ketua 1</h3>
          <h4>Myke Ardianti</h4>
          <div className="menu__now-cta">
            <a href="https://www.instagram.com/p/CaKR1hKJlSE/" className="btn btn-primary">
              Instagram
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Menu;
