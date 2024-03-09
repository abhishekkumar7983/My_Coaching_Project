// App.js
import React from "react";
import "../Gallery/gallery.css";
import "./freestudy.css";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";
import img7 from "../../images/img7.png";
import img8 from "../../images/img8.png";
import img9 from "../../images/img9.png";
import img10 from "../../images/img10.png";
import img11 from "../../images/study_more.jpg";
import Carousel from "../testimonial/testimonial";

export default function Freestudy() {
  const courses = [
    {
      src: img1,
      alt: "Image 1",
      link: "https://www.youtube.com/watch?v=yEu6-0dPNnM&list=PLK58putZjcbw8CXPeBXlZ9K6GbCcyxiSy",
      content:
        "hii kfejfw khj bjfhb kjsj bgkl kwfkfjfjbwfweu uwfbeuibwf uibuifbuifeuiueiugei",
    },
    {
      src: img2,
      alt: "Image 2",
      link: "https://www.youtube.com/watch?v=e8qCRsprwFU&list=PLK58putZjcbxG7MMlrnJzWwAvfn_By6r8",
      content: "hii",
    },
    {
      src: img3,
      alt: "Image 3",
      link: "https://www.youtube.com/watch?v=r6jpDKYP30U&list=PLK58putZjcbwQRSGMV9JQufrnpMYkELVL",
      content: "hii",
    },
    {
      src: img4,
      alt: "Image 4",
      link: "https://www.youtube.com/watch?v=8laDMcsUCkc&list=PLK58putZjcbwWn-qxyK9_GsSH2bG5oLEG",
      content: "hii",
    },
    {
      src: img5,
      alt: "Image 5",
      link: "https://www.youtube.com/watch?v=noU8bnCpGBY&list=PLK58putZjcbwBtiv6x6pUnQ1Epr2Q7KFK",
      content: "hii",
    },
    {
      src: img6,
      alt: "Image 6",
      link: "https://www.youtube.com/watch?v=0mY6WL5Ku2Q&list=PLK58putZjcbwQdQZ11yv2OCgcnY42c0M2",
      content: "hii",
    },
    {
      src: img7,
      alt: "Image 7",
      link: "https://www.youtube.com/watch?v=bXsNIADJyl4&list=PLK58putZjcbxztVxQj1MJ6F65dUMUadmR",
      content: "hii",
    },
    {
      src: img8,
      alt: "Image 8",
      link: "https://www.youtube.com/watch?v=Bn9Y4ikKAl0&list=PLK58putZjcbw6LbaeMiD9cEZcKwfSS6oz",
      content: "hii",
    },
    {
      src: img9,
      alt: "Image 9",
      link: "https://www.youtube.com/watch?v=j5gr0bfJMqY&list=PLK58putZjcbxkgRbcsu-FYDVlucwKyc60",
      content: "hii",
    },
    {
      src: img10,
      alt: "Image 10",
      link: "https://www.youtube.com/watch?v=GW3py_Lk3eQ&list=PLK58putZjcbz4yznI8xq-nXNs_G0CS6g0",
      content: "hii",
    },
    // {
    //   src: img10,
    //   alt: "Image 10",
    //   link: "https://www.youtube.com/watch?v=GW3py_Lk3eQ&list=PLK58putZjcbz4yznI8xq-nXNs_G0CS6g0",
    //   content: "hii",
    // },
    {
      src: img11,
      alt: "Image 10",
      link: "https://www.youtube.com/@SparkupClasses",
      content: "hii",
    },
  ];
  return (
    <div className="gallery-section">
      <h2 className="gallery_heading">Study Free</h2>
      <div className="gallery">
        {courses.map((course, index) => (
          <div className="gallery-item" key={index}>
            <a href={course.link} target="blank">
              <img src={course.src} alt={`course ${index + 1}`} />
            </a>
            {/* <div style={{ color: "#666", margin: "10px" }}>
                {course.content}
              </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

// export default App;
