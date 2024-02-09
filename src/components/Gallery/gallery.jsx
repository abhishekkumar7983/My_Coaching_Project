// App.js
import React from "react";
import "./gallery.css";
import img1 from "../../images/image1.jpg";
import img2 from "../../images/image2.jpg";
import img3 from "../../images/image3.png";

export default function Gallery() {
  const images = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
  ];
  return (
    <div className="gallery-section">
      <h2 className="gallery_heading">Gallery</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

// export default App;
