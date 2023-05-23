import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import {BiMenuAltRight} from 'react-icons/bi';


import './Header.css';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800){
      return {right: !menuOpened && '-100%'};
    }
  };

  return (

    <header className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">

        <img src="src\assets\img\logo.png" alt="Logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => setMenuOpened(false)}
        >
          <nav className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <a href="">Recidencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Start</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </nav>
        </OutsideClickHandler>

        <div 
          className="menu-icon" 
          onClick={ () => 
            setMenuOpened( (prev) => !prev)
          }
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
