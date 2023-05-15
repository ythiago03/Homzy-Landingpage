import React from 'react';
import CountUp from 'react-countup';
import './Stat.css';

const Stat = ({ start, end, duration, desc }) => {
  return (
    <div className="flexColCenter stat">
      <span>
        <CountUp start={start} end={end} duration={duration} />
        <span>+</span>
      </span>
      <span className="secondaryText">{desc}</span>
    </div>
  );
};

export default Stat;

Stat.propTypes = {
  start: 0,
  end: 0,
  duration: 0,
  desc: ''
}.isRequired;
