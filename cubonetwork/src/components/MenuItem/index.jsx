import React from "react";

import "./style.scss";

const MenuItem = ({ title }) => {
  return (
    <div className="menuItem">
      <p>{title}</p>
    </div>
  );
};

export default MenuItem;
