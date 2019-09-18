import React from "react";

import AboutGraph from "../AboutGraph";

import "./style.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-img" />
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
        <div className="about-graph__container">
          <div>
            <AboutGraph value={20} type="percentage" />
            <p>percentage</p>
          </div>
          <div>
            <AboutGraph value={400} type="money" />
            <p>Money</p>
          </div>
          <div>
            <AboutGraph value={7} type="time" />
            <p>Hour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
