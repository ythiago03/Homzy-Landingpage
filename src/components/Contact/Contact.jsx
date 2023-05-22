import React from 'react';

import './Contact.css';
import Mode from '../Mode/Mode';

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">We always ready to help by providing the best services for you. We believe a good place to live can make your life better.</span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <Mode 
                iconName={'MdCall'} 
                titleText={'Call'} 
                description={'(88)88888-8888'} 
                buttonText={'Call Now'}
              />
              <Mode 
                iconName={'BsFillChatDotsFill'} 
                titleText={'Chat'} 
                description={'(88)88888-8888'} 
                buttonText={'Chat Now'}
              />
            </div>

            {/* second row */}
            <div className="flexStart row">
              <Mode 
                iconName={'BsFillChatDotsFill'} 
                titleText={'Video Call'} 
                description={'(88)88888-8888'} 
                buttonText={'Video Call Now'}
              />
              <Mode 
                iconName={'HiChatBubbleBottomCenter'} 
                titleText={'Message'} 
                description={'(88)88888-8888'} 
                buttonText={'Message Now'}
              />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="src\assets\img\contact.jpg" alt="House" />
          </div>  
        </div>
      </div>
    </section>
  );
};

export default Contact;
