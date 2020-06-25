import React from "react";
import _ from "lodash";
import { Student } from "../../../../interfaces";

type TableBodyProps = {
  data: Array<Student>;
};

const TableBody = ({ data }: TableBodyProps) => (
  <tbody>
    {data.map((student) => (
      <tr key={_.uniqueId("student_")}>
        <td>{student.firstName}</td>
        <td>{student.lastName}</td>
        <td>{student.phNumber}</td>
        <td>{student.gpa}</td>
        <td>{student.id}</td>
      </tr>
    ))}
  </tbody>
);

export { TableBody };
