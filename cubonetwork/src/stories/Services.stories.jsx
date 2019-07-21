import React from "react";

import { storiesOf } from "@storybook/react";

import Services from "../components/ServiceDesc";

import { Piggy } from "../utils/icons";
import ServicesArea from "../components/ServicesArea";

storiesOf("Services", module)
  .add("Service Item", () => (
    <Services
      Icon={Piggy}
      title="Service 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    />
  ))
  .add("Services Area", () => <ServicesArea />);
