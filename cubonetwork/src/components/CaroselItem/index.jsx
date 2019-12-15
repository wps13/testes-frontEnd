import React from "react";

import "./style.scss";
import ArrowCarosel from "../ArrowCarosel";

const CaroselItem = ({ title, text, order, moveLeft, moveRight, id }) => {
  return (
    <>
      <div class={"carosel-item " + order} id={id}>
        <div className="carosel-item__arrow-center">
          <ArrowCarosel direction="left" click={() => moveLeft()} />
        </div>
        <div className="carosel-item__text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="carosel-item__arrow-center">
          <ArrowCarosel direction="right" click={() => moveRight()} />
        </div>
      </div>
    </>
  );
};

export default CaroselItem;
