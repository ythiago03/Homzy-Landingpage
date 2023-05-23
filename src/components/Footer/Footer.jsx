import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="src\assets\logo2.png" width={120} alt="Logo" />

          <p className="secondaryText">
            Our vision is to make all people 
            <br/>
            the best place to live for them.
          </p>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">142 New york, FL 4571, USA</span>

          <nav>
            <ul className="flexCenter f-menu">
              <li><a href="#">Property</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
