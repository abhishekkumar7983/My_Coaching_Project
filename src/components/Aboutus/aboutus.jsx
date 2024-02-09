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
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales aliquam tincidunt. Donec auctor purus vel quam sagittis, vitae viverra sem tempor."
      />
      <Section
        image={img2}
        title="Our Team"
        content="Vestibulum condimentum, enim id congue aliquet, elit tortor faucibus augue, non dictum metus mauris eget risus. Quisque nec ipsum mauris."
        reverse
      />
      <Section
        image={img3}
        title="Our Values"
        content="Nullam vel dui at nisi tempus aliquet id et enim. Ut eget purus non neque eleifend finibus nec id metus. Sed at pretium orci."
      />
    </div>
  );
}
