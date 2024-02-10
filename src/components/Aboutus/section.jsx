// Section.js
import React from 'react';
import './section.css';

function Section({ image, title, content, reverse }) {
  return (
    <div className={`section ${reverse ? 'reverse' : ''}`}>
      <div className="section-image">
        <img src={image} alt={title} />
      </div>
      <div className="section-content">
        <h2>{title}</h2>
        <p style={{color:"#666"}}>{content}</p>
      </div>
      <div className='Line-break-css'></div>
    </div>
  );
}

export default Section;
