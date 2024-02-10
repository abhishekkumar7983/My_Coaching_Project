// App.js
import React from "react";
import "../Gallery/gallery.css";
import "./freestudy.css";
import img1 from "../../images/image1.jpg";
import img2 from "../../images/image2.jpg";
import img3 from "../../images/image3.png";

export default function Freestudy() {
  const courses = [
    { src: img1, alt: "Image 1", link:"https://www.youtube.com/watch?v=e8qCRsprwFU&list=PLK58putZjcbxG7MMlrnJzWwAvfn_By6r8" ,content:"hii kfejfw khj bjfhb kjsj bgkl kwfkfjfjbwfweu uwfbeuibwf uibuifbuifeuiueiugei" },
    { src: img2, alt: "Image 2" ,link:"https://www.google.com",content:"hii"},
    { src: img3, alt: "Image 3" ,link:"https://www.google.com",content:"hii"},
    { src: img1, alt: "Image 1" ,link:"https://www.google.com",content:"hii"},
    { src: img2, alt: "Image 2" ,link:"https://www.google.com",content:"hii"},
    { src: img3, alt: "Image 3" ,link:"https://www.google.com",content:"hii"},
    { src: img1, alt: "Image 1" ,link:"https://www.google.com",content:"hii"},
    { src: img2, alt: "Image 2",link:"https://www.google.com" ,content:"hii"},
    { src: img3, alt: "Image 3" ,link:"https://www.google.com",content:"hii"},
  ];
  return (
    <div className="gallery-section">
      <h2 className="gallery_heading">Study Free</h2>
      <div className="gallery">
        {courses.map((course, index) => (
          <div className="gallery-item" key={index}>
            <a href={course.link}>
              <img src={course.src} alt={`course ${index + 1}`} />
            </a>
            <div style={{color:"#666",margin:"10px"}}>{course.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// export default App;
