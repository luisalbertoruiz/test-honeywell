import React from "react";
import _ from "lodash";
import { Header } from "../../../../interfaces";

type TableHeadProps = {
  headers: Array<Header>;
};

const TableHead = ({ headers }: TableHeadProps) => (
  <thead>
    <tr>
      {headers.map((header) => (
        <th key={_.uniqueId("header_")}>{header.name}</th>
      ))}
    </tr>
  </thead>
);

export { TableHead };
