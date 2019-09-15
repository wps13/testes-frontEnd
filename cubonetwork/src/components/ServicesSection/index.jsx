import React from "react";

import ServicesArea from "../ServicesArea";

import "./style.scss";

const ServicesSection = () => {
  return (
    <section className="home-services">
      <div className="home-services-container">
        <div className="home-services-container-title">
          <h2>Serviços</h2>
          <p>Alguma descrição aqui</p>
        </div>
        <ServicesArea />
      </div>
    </section>
  );
};

export default ServicesSection;
