import React from 'react';
import './Developer.css';
import { FaUserTie } from 'react-icons/fa';

const Developer = () => {
  return (
    <section id="developer">
      <h5>About me</h5>
      <h2>The Developer</h2>

      <div className="container developer__container">
        <article className="about__developer">
          <div className="developer__avatar">
            <FaUserTie />
          </div>
          <h5>You can find me on: </h5>
          <a href="mailto:bintangtriadmaja@gmail.com">email</a>
          <a href="https://github.com/AmdaaRaijen">github</a>
          <a href="https://www.linkedin.com/in/bintang-triadmaja-a21783220/">linkedin</a>
          <a href="https://www.instagram.com/amda.raijen/">Instagram</a>
        </article>
      </div>
    </section>
  );
};

export default Developer;
