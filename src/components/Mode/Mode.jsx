import React from 'react';

import { MdCall } from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';

import './Mode.css';

const Mode = ({iconName, titleText, description, buttonText}) => {
  const changeIcon = (iconName) => {
    switch(iconName){
    case 'MdCall':
      return  <MdCall size={25}/>;
      
    case 'BsFillChatDotsFill':
      return  <BsFillChatDotsFill size={25}/>;

    case 'HiChatBubbleBottomCenter':
      return  <HiChatBubbleBottomCenter size={25}/>; 

    }  
  };  

  return (
    <div className="flexColCenter mode">
      <div className="flexStart">
        <div className="flexCenter icon">
          {changeIcon(iconName)}
        </div>
        <div className="flexColStart detail">
          <span className="primaryText">{titleText}</span>
          <p className="secondaryText">{description}</p>
        </div>
      </div>
      <div className="flexCenter button">
        {buttonText}
      </div>
    </div>
  );
};

export default Mode;

Mode.propTypes = {
  iconName: '',
  titleText: '',
  description: '',
  buttonText: ''
}.isRequired;
