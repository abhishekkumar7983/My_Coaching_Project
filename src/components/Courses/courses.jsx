// App.js
import React from "react";
import "./courses.css";
import CourseCard from "./courses_card";
import img1 from "../../images/image1.jpg";
import img2 from "../../images/image2.jpg";
import img3 from "../../images/image3.png";

export default function Courses() {
  return (
    <div className="courses-section">
      <h2 className="courses-section-heading">Our Courses</h2>
      <div className="course-cards">
        <CourseCard
          title="Web Development"
          description="Learn full-stack web development with HTML, CSS, JavaScript, React, Node.js, and more."
          image={img1}
        />
        <CourseCard
          title="Data Science"
          description="Master the art of data science with Python, machine learning, data analysis, and visualization."
          image={img2}
        />
        <CourseCard
          title="Mobile App Development"
          description="Build mobile apps for iOS and Android using React Native, Swift, and Kotlin."
          image={img3}
        />
        <CourseCard
          title="app Development"
          description="Learn full-stack web development with HTML, CSS, JavaScript, React, Node.js, and more."
          image={img1}
        />
      </div>
    </div>
  );
}

// export default App;
