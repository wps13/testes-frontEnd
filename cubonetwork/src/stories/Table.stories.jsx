import React from "react";

import { storiesOf } from "@storybook/react";
import TableRow from "../components/TableRow";
import Table from "../components/Table";

const fakeData = [
  {
    id: 1,
    name: "Joao",
    lastName: "Silva",
    value: 9000
  },
  {
    id: 2,
    name: "Joao",
    lastName: "Silva",
    value: 9000
  }
];

storiesOf("Table", module)
  .add("Row", () => <TableRow id="" name="User 1" value={1000} />)
  .add("Sample", () => <Table data={fakeData} />);
