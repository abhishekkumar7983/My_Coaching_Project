// CourseCard.js
import React from 'react';
import './courses_card.css';

export default function CourseCard({ title, description, image }) {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <div className="course-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


