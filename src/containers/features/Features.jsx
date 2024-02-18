import React from 'react';
import './features.css';
import {Feature} from '../../components';

const featuresData = [
  {
    title: 'Code Generation',
    text: "GPT-3, particularly the Codex model is used for generating clear-cut, efficient code in the best IDE's."
  },
  {
    title: 'SQL Queries',
    text: 'This is very accurate in producing SQL queries for individual and business purposes.'
  },
  {
    title: 'Copywriting',
        text: 'The best sales and email copies are developed with this awesome piece of AI'
  },
  {
    title: 'Clinical Diagnosis',
    text: "GPT-3 is a systematic model utilized in the detection of Alzheimer's disease and related disorders."
  }

]

const Features = () => {
  return (
    <div className="gpt3_features section_padding" id="features">
      <div className="gpt3_features-heading">
        <h1 className="gradient_text">The Future is Now. Realize and Explore its Application.</h1>
      <p>Request Early Access To Get Started</p>
      </div>
      <div className="gpt3_features-container">
       {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
       ))}
      </div>
    </div>
  )
}

export default Features
