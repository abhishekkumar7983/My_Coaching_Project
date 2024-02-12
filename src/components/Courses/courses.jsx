// App.js
import React from "react";
import "./courses.css";
import CourseCard from "./courses_card";
import img1 from "../../images/mathematics.png";
import img2 from "../../images/img4.png";
import img3 from "../../images/img5.png";

export default function Courses() {
  return (
    <div className="courses-section">
      <h2 className="courses-section-heading">Our Courses</h2>
      <div className="course-cards">
        <CourseCard
          title="Mathematics"
          description="Unlock the power of numbers and equations with Sparkup Classes' comprehensive mathematics coaching platform."
          image={img1}
          link="https://www.youtube.com/watch?v=yEu6-0dPNnM&list=PLK58putZjcbw8CXPeBXlZ9K6GbCcyxiSy"
        />
        <CourseCard
          title="Chemistry"
          description="Illuminate the world of chemistry with Sparkup Classes' insightful coaching platform."
          image={img2}
          link="https://www.youtube.com/watch?v=8laDMcsUCkc&list=PLK58putZjcbwWn-qxyK9_GsSH2bG5oLEG"
        />
        <CourseCard
          title="Biology"
          description="Embark on a journey through the wonders of life with Sparkup Classes' engaging biology coaching platform."
          image={img3}
          link="https://www.youtube.com/watch?v=BH2VCy2IKz4&list=PLK58putZjcbzlGDGtv5GLO-9dvZie98jq"
        />
        <CourseCard
          title="Physics"
          description="Spark up your understanding of physics with Sparkup Classes' dynamic coaching platform."
          image={img1}
          link="https://www.youtube.com/watch?v=e8qCRsprwFU&list=PLK58putZjcbxG7MMlrnJzWwAvfn_By6r8"
        />
      </div>
    </div>
  );
}

// export default App;
