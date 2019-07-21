import React from "react";

import Service from "../ServiceDesc";
import {
  Piggy,
  Creditcard,
  Accounting,
  IncreaseMoney
} from "../../utils/icons";

import "./style.scss";

const ServicesArea = () => {
  return (
    <div className="services-area">
      <Service
        Icon={Piggy}
        title="Service 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
      <Service
        Icon={Creditcard}
        title="Service 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
      <Service
        Icon={Accounting}
        title="Service 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
      <Service
        Icon={IncreaseMoney}
        title="Service 4"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      />
    </div>
  );
};

export default ServicesArea;
