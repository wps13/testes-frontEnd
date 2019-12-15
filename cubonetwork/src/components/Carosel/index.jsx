import React from "react";

import Slider from "react-slick";

import "./style.scss";

import { carouselData } from "../../utils/fakeData";
import CaroselItem from "../CaroselItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  arrows: true
};

const Carosel = () => (
  <div className="carousel__container">
    <Slider {...settings}>
      {carouselData.map(item => (
        <CaroselItem
          title={item.title}
          text={item.text}
          order={item.order}
          id={item.id}
        />
      ))}
    </Slider>
  </div>
);

export default Carosel;
