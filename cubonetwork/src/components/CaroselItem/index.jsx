import React from "react";

import "./style.scss";

const CaroselItem = ({ title, text, order, id }) => {
  return (
    <>
      <div class={"carosel-item " + order} id={id}>
        <div className="carosel-item__text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default CaroselItem;
