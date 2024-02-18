import React from 'react';
import './whatgpt3.css';
import { Feature } from '../../components';

const whatGPT3 = () => {
  return (
    <div className="gpt3_whatgpt3 section_margin"  id="wgpt3">
      <div className="gpt3_whatgpt3-feature">
        <Feature title="What is GPT-3" text="GPT-3 is a decoder-only transformer model of deep neural network, which exceeds prior developed architectures, with a technique massive language model developed by OpenAI in 2020. "/>
      </div>
      <div className="gpt3_whatgpt3-heading">
        <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3_whatgpt3-container">
        <Feature title="Chatbots" text="There's a chatbot function with GPT-3 which ensures top-notch user experience."/>
        <Feature title="Knowledgebase" text="GPT-3 is very knowledgeable about numerous disciplines, and facets of life."/>
        <Feature title="Education" text="GPT-3 has content that is very enlightening and insightful, bringing the full depth of global library at your fingertips."/> 
      </div>
    </div>
  )
}

export default whatGPT3
