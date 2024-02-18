import React from 'react';
import './header.css';
//import people from '../../assets/blog01.svg';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3_header section_padding" id="home">
      <div className="gpt3_header-content">
        <h1 className="gradient_text">Build a Sustainable Brand with GPT-3 OpenAI Today</h1>
        <p>GPT-3 is the AI software that gives you intelligently patterned results. </p>
        <div className="gpt3_header-content_input">
          <input type="email" placeholder="Enter Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3_header-content_realpeople">
          <img scr={ require('../../assets/people.png')} alt=""/>
          <p>1800 people requested access a visit in the last 20 hours.</p>
        </div>
          
      </div>
      <div className="gpt3_header-image">
            <img src={ai} alt="ai"/>
          </div>
    </div>
  )
}


export default Header
