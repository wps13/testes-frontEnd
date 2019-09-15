import React from "react";

import Table from "../Table";
import UserGraph from "../UserGraph";

import "./style.scss";

const UserDataSection = ({ data }) => {
  return (
    <div className="home-graph-container">
      <div className="home-graph__title">
        <h2>Dados</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor..
        </p>
      </div>
      <div className="home-graph__data">
        <Table data={data} />
        <div className="home-graph__graph">
          <UserGraph userData={data} />
        </div>
      </div>
    </div>
  );
};

export default UserDataSection;
