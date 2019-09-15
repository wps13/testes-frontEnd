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

export const carouselData = [
  {
    title: " 1",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    order: "first"
  },
  {
    title: " 2",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    order: "second"
  }
];

export const userData = [
  {
    id: 1,
    name: "Joao",
    lastName: "Silva",
    value: 25
  },
  {
    id: 2,
    name: "Joao",
    lastName: "Melo",
    value: 20
  },
  {
    id: 3,
    name: " Maria",
    lastName: "Pinheiros",
    value: 30
  },
  {
    id: 4,
    name: " Maria",
    lastName: "da Silva",
    value: 5
  },
  {
    id: 5,
    name: " Zé",
    lastName: "Maria",
    value: 20
  }
];
