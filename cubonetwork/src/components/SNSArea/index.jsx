import React from "react";

import SNSIcon from "../SNSIcon";

import "./style.scss";

const SNSArea = () => {
  return (
    <div className="sns-area">
      <SNSIcon name="facebook" />
      <SNSIcon name="google-plus" />
      <SNSIcon name="twitter" />
      <SNSIcon name="youtube" />
    </div>
  );
};

export default SNSArea;
