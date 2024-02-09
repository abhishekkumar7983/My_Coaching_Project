// React component: Carousel.js

import React, { useState, useEffect } from "react";
import "./testimonail.css"; // Make sure the path to your CSS file is correct
import img1 from "../../images/image1.jpg";
import img2 from "../../images/image2.jpg";
import img3 from "../../images/image3.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      src: img1,
      alt: "...",
      caption: {
        title: "First slide label",
        content: "Some representative placeholder content for the first slide.",
      },
      // interval: 1000
    },
    {
      src: img2,
      alt: "...",
      caption: {
        title: "Second slide label",
        content:
          "Some representative placeholder content for the second slide.",
      },
      // interval: 1000
    },
    {
      src: img3,
      alt: "...",
      caption: {
        title: "Third slide label",
        content: "Some representative placeholder content for the third slide.",
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
            <img src={slide.src} className="d-block w-100" alt={slide.alt} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{slide.caption.title}</h5>
              <p>{slide.caption.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
