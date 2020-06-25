import React from "react";
import _ from "lodash";

type TableHeadProps = {
  headers: string[];
};

const TableHead = ({ headers }: TableHeadProps) => (
  <thead>
    <tr>
      {headers.map((header) => (
        <th key={_.uniqueId("header_")}>{header}</th>
      ))}
    </tr>
  </thead>
);

export { TableHead };
