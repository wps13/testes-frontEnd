import React, { useState } from "react";

import UserDataSection from "../../components/UserDataSection";
import FooterSection from "../../components/FooterSection";
import ServicesSection from "../../components/ServicesSection";
import AboutSection from "../../components/AboutSection";
import StepsSection from "../../components/StepsSection";
import MainSection from "../../components/MainSection";
import SignUpSection from "../../components/SignUpSection";

import "./style.scss";

import { userData } from "../../utils/fakeData";
import HeaderSection from "../../components/HeaderSection";

const Home = () => {
  const [inputs, onChangeInput] = useState({});
  const handleInput = e => {
    onChangeInput(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
  };
  const sendData = () => inputs;

  return (
    <div className="home">
      <HeaderSection />
      <MainSection />
      <ServicesSection />
      <AboutSection />
      <StepsSection />
      <SignUpSection inputChange={handleInput} btnClick={sendData} />
      <UserDataSection data={userData} />
      <FooterSection />
    </div>
  );
};

export default Home;
