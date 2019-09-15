import React from "react";

import { storiesOf } from "@storybook/react";

import ProcessStep from "../components/ProcessStep";
import ProcessArea from "../components/ProcessArea";

import { Globe } from "../utils/icons";

storiesOf("Process", module)
  .add("Process Item", () => (
    <ProcessStep
      Icon={Globe}
      title="Passo 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
  ))
  .add("All Process", () => <ProcessArea />);
