// App.js
import React from "react";
import "./aboutus.css";
import Section from "./section";
import img1 from "../../images/image1.jpg";
import img2 from "../../images/image2.jpg";
import img3 from "../../images/image3.png";

export default function AboutUs() {
  return (
    <div className="about-us">
      <Section
        image={img1}
        title="Our Mission"
        content="At Sparkup Classes, our mission is to ignite curiosity, inspire learning, and empower students to reach their full academic potential."
      />
      <Section
        image={img2}
        title="Our Team"
        content="Our dedicated teams at Sparkup Classes are comprised of passionate educators, tech innovators, and support staff, all working collaboratively to deliver exceptional learning experiences."
        reverse
      />
      <Section
        image={img3}
        title="Our Values"
        content="Sparkup Classes values excellence, integrity, and innovation, fostering a collaborative environment where diversity is celebrated and students are empowered to embrace a growth mindset."
        />
    </div>
  );
}
