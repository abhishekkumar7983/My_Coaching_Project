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
          title="Mathematics"
          description="Unlock the power of numbers and equations with Sparkup Classes' comprehensive mathematics coaching platform."
          image={img1}
        />
        <CourseCard
          title="Physics"
          description="Spark up your understanding of physics with Sparkup Classes' dynamic coaching platform."
          image={img2}
        />
        <CourseCard
          title="Chemistry"
          description="Illuminate the world of chemistry with Sparkup Classes' insightful coaching platform."
          image={img3}
        />
        <CourseCard
          title="Biology"
          description=
          "Embark on a journey through the wonders of life with Sparkup Classes' engaging biology coaching platform."
          image={img1}
        />
      </div>
    </div>
  );
}

// export default App;
