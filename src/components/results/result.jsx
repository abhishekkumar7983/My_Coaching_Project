// App.js
import React from "react";
import "../Courses/courses.css";
import CourseCard from "../Courses/courses_card";
import img1 from "../../images/image1.jpg";
import img2 from "../../images/image2.jpg";
import img3 from "../../images/image3.png";

export default function Result() {
  return (
    <div className="courses-section">
      <h2 className="courses-section-heading">Success Stories</h2>
      <div className="course-cards">
        <CourseCard
          title="Result1"
          description="Learn full-stack web development with HTML, CSS, JavaScript, React, Node.js, and more."
          image={img1}
        />
        <CourseCard
          title="Result2"
          description="Master the art of data science with Python, machine learning, data analysis, and visualization."
          image={img2}
        />
        <CourseCard
          title="Result3"
          description="Build mobile apps for iOS and Android using React Native, Swift, and Kotlin."
          image={img3}
        />
        <CourseCard
          title="result4"
          description="Learn full-stack web development with HTML, CSS, JavaScript, React, Node.js, and more."
          image={img1}
        />
      </div>
    </div>
  );
}

// export default App;
