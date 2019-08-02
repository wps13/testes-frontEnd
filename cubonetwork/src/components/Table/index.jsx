import React from "react";

import TableRow from "../TableRow";

const Table = ({ data }) => {
  return (
    <div>
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
    </div>
  );
};

export default Table;
