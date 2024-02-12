// CourseCard.js
import React from 'react';
import './courses_card.css';

export default function CourseCard({ title, description, image,link }) {
  return (
    <div className="course-card">
     <a href={link} target='blank'><img src={image} alt={title} /></a>
      <div className="course-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


