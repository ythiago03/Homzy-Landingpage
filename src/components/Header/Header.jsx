import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">

        <img src="src\assets\img\logo.png" alt="Logo" width={100} />

        <nav className="flexCenter h-menu">
          <a href="">Recidencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Start</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </nav>

      </div>
    </section>
  );
};

export default Header;
