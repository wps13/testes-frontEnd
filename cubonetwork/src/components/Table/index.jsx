import React from "react";

import TableRow from "../TableRow";

import "./style.scss";

const Table = ({ data }) => {
  return (
    <section className="home-table">
      <TableRow
        id=""
        name="Nome"
        lastName="Sobrenome"
        value="Valor"
        extraClass="header"
      />
      {data.map(userData => (
        <TableRow
          id={userData.id}
          name={userData.name}
          lastName={userData.lastName}
          value={userData.value}
        />
      ))}
    </section>
  );
};

export default Table;
