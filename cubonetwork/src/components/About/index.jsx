import React from "react";

import "./style.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-img"></div>
      <div className="about-side">
        <h1 className="about-side__title">sobre nós</h1>
        <p className="about-side__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{" "}
        </p>
        <p>Graph 1</p>
        <p>Graph 2</p>
        <p>Graph 3</p>
      </div>
    </div>
  );
};

export default About;
