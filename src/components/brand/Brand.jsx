import React from 'react';
import './Brand.css';
import { google, dropbox, shopify, slack, atlassianlogo } from './imports';


const Brand = () => {
  return (
    <div className="gpt3_brand section">
      <div>
        <img scr={google.default} alt=""/>
      </div>
      <div>
        <img scr={slack.default} alt=""/>
      </div>
      <div>
        <img scr={dropbox.default} alt=""/>
      </div>
      <div>
        <img scr={atlassianlogo.default} alt=""/>
      </div>
      <div>
        <img scr={shopify.default} alt=""/>
      </div>
    </div>
  )
}

export default Brand
