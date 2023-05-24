import React from 'react';

import prologisImg from '../../assets/prologis.png';
import towerImg from '../../assets/tower.png';
import equinixImg from '../../assets/equinix.png';
import realtyImg from '../../assets/realty.png';
import './Companies.css';

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={prologisImg} alt="Prologis Logo" />
        <img src={towerImg} alt="Tower Logo" />
        <img src={equinixImg} alt="Equinix Logo" />
        <img src={realtyImg} alt="Realty Logo" />
      </div>
    </section>
  );
};

export default Companies;
