import React from "react";

import ProcessArea from "../ProcessArea";

import "./style.scss";

const StepsSection = () => {
  return (
    <section className="home-steps">
      <div className="home-steps-container">
        <div className="home-steps-container-title">
          <h2>Como funciona?</h2>
          <p>alguma desc</p>
        </div>
        <ProcessArea />
      </div>
    </section>
  );
};

export default StepsSection;
