// App.js
import React from "react";
import "../Courses/courses.css";
import CourseCard from "../Courses/courses_card";
import img1 from "../../images/galler_img4.png";
import img2 from "../../images/galler_img2.png";
import img3 from "../../images/galler_img3.png";
import img4 from "../../images/galler_img1.png";
export default function Result() {
  return (
    <div className="courses-section">
      <h2 className="courses-section-heading">Success Stories</h2>
      <div className="course-cards">
        <CourseCard
          // title="Result1"
          description="Congratulations Sarthak on acing the JEE with SparkUp Classes - your dedication and hard work have truly paid off!"
          image={img1}
          link="https://www.youtube.com/watch?v=gsKvSM-07Yw&list=PLK58putZjcbxD8Uu76NY5IwfZFQcb8fMN&index=5"
        />
        <CourseCard
          // title="Result2"
          description="Congratulations to all our students at SparkUp Classes! Your hard work and dedication have paid off. Here's to your continued success and growth!"
          image={img2}
          link="https://www.youtube.com/watch?v=VKN-Cc-wWtE&list=PLK58putZjcbxD8Uu76NY5IwfZFQcb8fMN&index=2"
        />
        <CourseCard
          // title="Result3"
          description=
          "Congratulations, Rishab Rai, on your JEE qualification! Your success, achieved with guidance rather than coaching, is a testament to your determination and potential."
          image={img3}
          link="https://www.youtube.com/watch?v=HVbK3Jx3F4c&list=PLK58putZjcbxD8Uu76NY5IwfZFQcb8fMN&index=29"
        />
        <CourseCard
          // title="result4"
          description="Hey there! At SparkUp Classes, we believe in your potential to shine bright.Your future is full of possibilities, and we're here to help you unlock every opportunity along the way."
          image={img4}
          link="https://www.youtube.com/watch?v=lcq_q59msdk&list=PLK58putZjcbxD8Uu76NY5IwfZFQcb8fMN&index=3"
        />
      </div>
    </div>
  );
}

// export default App;
