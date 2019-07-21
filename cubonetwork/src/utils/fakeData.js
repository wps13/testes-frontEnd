import React from "react";
import { Piggy, Accounting, IncreaseMoney, Creditcard } from "../utils/icons";

export const services = () => [
  {
    title: "Serviço 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: <Piggy />
  },
  {
    title: "Serviço 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: <Accounting />
  },
  {
    title: "Serviço 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: <Creditcard />
  },
  {
    title: "Serviço 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: <IncreaseMoney />
  }
];
