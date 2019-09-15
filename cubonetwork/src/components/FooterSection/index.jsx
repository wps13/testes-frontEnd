import React from "react";

import Adress from "../Adress";
import SNSArea from "../SNSArea";
import Copyright from "../Copyright";

import "./style.scss";

const FooterSection = () => {
  return (
    <footer className="home-footer">
      <div className="home-footer-container">
        <div className="home-footer-container-sns">
          <Adress />
          <SNSArea />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default FooterSection;
