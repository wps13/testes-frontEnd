import React from "react";

import "./style.scss";

const TableRow = ({ id, name, lastName, value, extraClass }) => {
  return (
    <div className={"table-row " + extraClass}>
      <p className="table-row__id">{id}</p>
      <p className="table-row__name">{name}</p>
      <p className="table-row__lastName">{lastName}</p>
      <p className="table-row__value">{value}</p>
    </div>
  );
};

export default TableRow;
