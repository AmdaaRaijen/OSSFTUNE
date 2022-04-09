import React from 'react';
import './Filosofi.css';
import ME from '../../assets/me-about.jpg';

const Filosofi = () => {
  return (
    <section>
      <h5>Logo osis</h5>
      <h2>Filosofi</h2>

      <div className="container filosofi__container">
        <div className="filosofi__lingkaran-penjelasan">
          <article>Logo Lingkaran</article>
          <p>Bentuk organisasi harus dinamis, bergerak, memiliki kecepatan, tidak boleh putus, dapat diandalkan dan sempurna</p>
        </div>
        <div className="filosofi__content">
          <div className="filosofi__logo-lingkaran">
            <img src={ME} alt="Logo osis" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filosofi;
