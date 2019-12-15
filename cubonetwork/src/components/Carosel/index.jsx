import React, { useState } from "react";

import "./style.scss";

import { carouselData } from "../../utils/fakeData";
import CaroselItem from "../CaroselItem";

const Carosel = () => {
  let [actualSlide, updateActualSlide] = useState(0);
  let [newSlide, updateNewSlide] = useState(0);
  return (
    <div className="carousel__container">
      {carouselData.map(item => (
        <CaroselItem
          title={item.title}
          text={item.text}
          order={item.order}
          moveLeft={() => {
            updateNewSlide((newSlide = actualSlide + 1));
            updateActualSlide((actualSlide = newSlide));
          }}
          moveRight={() => {
            updateNewSlide((newSlide = actualSlide - 1));
            updateActualSlide((actualSlide = newSlide));
          }}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Carosel;
