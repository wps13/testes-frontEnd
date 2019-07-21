import React from "react";

import "./style.scss";

const ServicesDesc = ({ Icon, title, description }) => {
  return (
    <div className="service">
      <div className="service-icon">
        <Icon />
      </div>
      <div className="service-text">
        <p className="service-text-title">{title}</p>
        <p className="service-text-desc">{description}</p>
      </div>
    </div>
  );
};

export default ServicesDesc;
