import React from 'react';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3_possibility section_padding" id="pssibility">
      <div className="gpt3_possibility-image">
        <img scr={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3_possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient_text">The Possibilities with GPT-3 are Beyond Your Imagination</h1>
        <p>Come on then, give it a try and see for yourself.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility;
