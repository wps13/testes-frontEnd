import React from "react";

import "./style.scss";

const ProcessStep = ({ Icon, title, description }) => {
  return (
    <div className="process-step">
      <div className="process-step-icon">
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProcessStep;
