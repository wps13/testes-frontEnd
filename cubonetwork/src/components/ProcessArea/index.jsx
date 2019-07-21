import React from "react";

import ProcessStep from "../ProcessStep";

import { Globe, LikeHand, Cart, Truck } from "../../utils/icons";

import "./style.scss";

const ProcessArea = () => {
  return (
    <div className="processes">
      <ProcessStep
        Icon={Globe}
        title="Passo 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <ProcessStep
        Icon={Cart}
        title="Passo 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <ProcessStep
        Icon={LikeHand}
        title="Passo 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <ProcessStep
        Icon={Truck}
        title="Passo 4"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

export default ProcessArea;
