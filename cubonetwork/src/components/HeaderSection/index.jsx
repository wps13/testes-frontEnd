import React from "react";

import Logo from "../Logo";
import MenuBar from "../MenuBar";

import "./style.scss";

const HeaderSection = () => {
  return (
    <header className="home-header">
      <Logo />
      <MenuBar />
    </header>
  );
};

export default HeaderSection;
