import React from "react";

import { storiesOf } from "@storybook/react";
import UserData from "../components/UserDataSection";

import { userData } from "../utils/fakeData";
import FooterSection from "../components/FooterSection";
import AboutSection from "../components/AboutSection";
import HeaderSection from "../components/HeaderSection";
import MainSection from "../components/MainSection";
import ServicesSection from "../components/ServicesSection";
import StepsSection from "../components/StepsSection";
import SignUpSection from "../components/SignUpSection";

storiesOf("Home Sections", module)
  .add("User Data", () => <UserData data={userData} />)
  .add("Footer", () => <FooterSection />)
  .add("About", () => <AboutSection />)
  .add("Header", () => <HeaderSection />)
  .add("Main", () => <MainSection />)
  .add("Services", () => <ServicesSection />)
  .add("Steps", () => <StepsSection />)
  .add("SignUp", () => <SignUpSection />);
