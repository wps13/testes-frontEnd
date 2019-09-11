import React from "react";

import "./style.scss";

const ArrowCarosel = ({ direction, click }) => {
  return (
    <i className={"arrow-carosel " + direction} onClick={() => click()}>
    </i>
  );
};

export default ArrowCarosel;
