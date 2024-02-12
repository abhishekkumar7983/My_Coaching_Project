// App.js
import React from "react";
import "./gallery.css";
import img1 from "./GalleryImges/img1.png";
import img2 from "./GalleryImges/img2.png";
import img3 from "./GalleryImges/img3.png";
import img4 from "./GalleryImges/img4.png";
import img5 from "./GalleryImges/img5.png";
import img6 from "./GalleryImges/img6.png";
import img7 from "./GalleryImges/img7.png";
import img8 from "./GalleryImges/img8.png";
import img9 from "./GalleryImges/img9.png";
import img10 from "./GalleryImges/img10.png";
import img11 from "./GalleryImges/img11.png";
import img12 from "./GalleryImges/img12.png";

export default function Gallery() {
  const images = [
    {
      src: img1,
      alt: "Image 1",
      link: "https://www.youtube.com/watch?v=fVEN5ukBOGU&list=PLK58putZjcbxD8Uu76NY5IwfZFQcb8fMN&index=13",
    },
    {
      src: img4,
      alt: "Image 2",
      link: "https://www.youtube.com/watch?v=t9bQUF3qNcM&list=PLK58putZjcbxD8Uu76NY5IwfZFQcb8fMN&index=22",
    },
    {
      src: img3,
      alt: "Image 3",
      link: "https://www.youtube.com/watch?v=KXgdjtJogPI&list=PLK58putZjcbxD8Uu76NY5IwfZFQcb8fMN&index=19",
    },
    {
      src: img2,
      alt: "Image 4",
      link: "https://www.youtube.com/watch?v=uJcciiaJKIo&list=PLK58putZjcbxD8Uu76NY5IwfZFQcb8fMN&index=18",
    },
    {
      src: img5,
      alt: "Image 5",
      link: "https://www.youtube.com/watch?v=oQSf5jN-oc8&list=PLK58putZjcbxD8Uu76NY5IwfZFQcb8fMN&index=26",
    },
    {
      src: img6,
      alt: "Image 6",
      link: "https://www.youtube.com/watch?v=Y2xiFygMQKE&list=PLK58putZjcbxD8Uu76NY5IwfZFQcb8fMN&index=4",
    },
    // { src: img7, alt: "Image 7" ,link:""},
    {
      src: img8,
      alt: "Image 8",
      link: "https://www.youtube.com/watch?v=iqEZFfWiZdc&list=PLK58putZjcbxD8Uu76NY5IwfZFQcb8fMN&index=32",
    },
    {
      src: img9,
      alt: "Image 9",
      link: "https://www.youtube.com/watch?v=SWAgQGXrpd8&list=PLK58putZjcbxD8Uu76NY5IwfZFQcb8fMN&index=36",
    },
    {
      src: img10,
      alt: "Image 10",
      link: "https://www.youtube.com/watch?v=xNzMDoRqYBQ&list=PLK58putZjcbxD8Uu76NY5IwfZFQcb8fMN&index=37",
    },
    {
      src: img11,
      alt: "Image 11",
      link: "https://www.youtube.com/watch?v=TI8u93gabYo&list=PLK58putZjcbxD8Uu76NY5IwfZFQcb8fMN&index=45",
    },
    {
      src: img12,
      alt: "Image 12",
      link: "https://www.youtube.com/watch?v=OQMij2wQAgk&list=PLK58putZjcbxD8Uu76NY5IwfZFQcb8fMN&index=11",
    },
  ];
  return (
    <div className="gallery-section">
      <h2 className="gallery_heading">Gallery (Highlights)</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <a href={image.link} target="blank">
              <img src={image.src} alt={`Image ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// export default App;
