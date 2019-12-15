import React from "react";

import { storiesOf } from "@storybook/react";

import CarouselItem from "../components/CaroselItem";
import ArrowCarosel from "../components/ArrowCarosel";
import Carousel from "../components/Carosel";

storiesOf("Carosel", module)
  .add("Item", () => (
    <CarouselItem
      title="1"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      order="first"
    />
  ))
  .add("Arrow Right", () => (
    <ArrowCarosel
      direction="right"
      click={() => {
        console.log("Next slide");
      }}
    />
  ))
  .add("Arrow Left", () => (
    <ArrowCarosel
      direction="left"
      click={() => {
        console.log("Previous slide");
      }}
    />
  ))
  .add("Carousel", () => <Carousel />);
