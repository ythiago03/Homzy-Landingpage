import React from 'react';

import Stat from '../Stat/Stat';
import {HiLocationMarker} from 'react-icons/hi';
import { motion } from 'framer-motion';

import heroImg from '../../assets/hero-image.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">

        {/* Left Side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>
            <motion.h1
              initial={{y: '2rem', opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{
                duration: 2,
                type: 'spring'
              }}
            >
              Discover <br/>Most Suitable <br/>Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-desc">
            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <Stat 
              start={8000} 
              end={9000} 
              duration={4} 
              desc={'Premium Products'}
            />
            <Stat 
              start={1950} 
              end={2000} 
              duration={4} 
              desc={'Happy Custumers'}
            />
            <Stat  
              end={24} 
              desc={'Award Winning'}
            />
          </div>
        </div>  

        {/* Right Side */}
        <div className="flexCenter hero-right">
          <motion.div 
            className="image-container"
            initial={{x: '7rem', opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              duration: 3,
              type: 'spring'
            }}
          >
            <img src={heroImg} alt="House Image"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
