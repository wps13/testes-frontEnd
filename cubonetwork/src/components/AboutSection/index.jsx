import React from "react";

import About from "../About";

import "./style.scss";

const AboutSection = () => {
  return (
    <section className="home-about">
      <div className="home-about-container">
        <About />
      </div>
    </section>
  );
};

export default AboutSection;
