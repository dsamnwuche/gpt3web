import React from 'react';
import './blog.css';
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports';
 

const Blog = () => {
  return (
    <div className="gpt3_blog section_padding" id="blog">
      <div className="gpt3_blog-heading">
        <h1 className="gradient_text">A lot is happening. We are blogging about it.</h1>
      </div>
      <div className="gpt3_blog-container">
        <div className="gpt3_blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 2, 2021" title="GPT-3 for Search Engine Optimization (SEO)"/>
        </div> 
        <div className="gpt3_blog-container_groupB">
          <Article imgUrl={blog02} date="Sep 26, 2020" title="GPT-3 and Open AI  is the future. Let us explore how it is"/>
          <Article imgUrl={blog03} date="Aug 16, 2020" title="College student used GPT-3 to write alluring blog posts and gains accolades. "/>
          <Article imgUrl={blog04} date="Mar 12, 2021" title="What is the future of healthcare with GPT-3 and Open AI"/>
          <Article imgUrl={blog05} date="Nov 6, 2021" title="Using GPT-3 on database schemas in SQL"/>
        </div>
       
      </div>
    </div>
  )
}

export default Blog
