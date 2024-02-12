// React component: Carousel.js

import React, { useState, useEffect } from "react";
import "./testimonail.css"; // Make sure the path to your CSS file is correct
import img1 from "../../images/Physics.png";
import img2 from "../../images/biology.png";
import img3 from "../../images/chmistry.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      src: img1,
      alt: "...",
      caption: {
        title: "Physics",
        content:
          "Unlock the mysteries of the universe: Physics for JEE and NEET - where curiosity meets determination for boundless discovery.",
      },
      // interval: 1000
    },
    {
      src: img3,
      alt: "...",
      caption: {
        title: "Chemistry",
        content:
          "Dive into the elements of success: Chemistry for JEE and NEET - where reactions fuel aspirations and bonds form brighter futures.",
      },
      // interval: 1000
    },
    {
      src: img2,
      alt: "...",
      caption: {
        title: "Biology",
        content:
          "Dive into the wonders of life: Biology for NEET and boards - where exploration fuels the journey to unravel nature's secrets.",
      },
      // interval: 1000
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, slides[currentIndex].interval || 5000); // If interval is not defined, use 5000 milliseconds as default

    return () => clearInterval(interval);
  }, [currentIndex, slides]);

  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        {/* {slides.map((slide, index) => (
          // <button
          //   key={index}
          //   type="button"
          //   onClick={() => setCurrentIndex(index)}
          //   className={index === currentIndex ? "active" : ""}
          //   aria-current={index === currentIndex ? "true" : "false"}
          //   aria-label={`Slide ${index + 1}`}
          // ></button>
        ))} */}
      </div>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
            data-interval={slide.interval || 5000}
          >
            <img src={slide.src} className="test_img" alt={slide.alt} />
            <div className="carousel-caption d-none d-md-block">
              <h3>{slide.caption.title} :</h3>
              <p className="test_content">{slide.caption.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
