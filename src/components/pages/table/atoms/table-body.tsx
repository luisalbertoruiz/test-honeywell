import React from "react";
import _ from "lodash";
import { Student } from "../../../../interfaces";
import detailIcon from "../../../../assets/detail.svg";
import deleteIcon from "../../../../assets/delete.svg";

type TableBodyProps = {
  data: Array<Student>;
};

const TableBody = ({ data }: TableBodyProps) => (
  <tbody>
    {data.map((student) => (
      <tr key={_.uniqueId("student_")}>
        <td>{student.firstName}</td>
        <td>{student.lastName}</td>
        <td className="text-center">{student.phNumber}</td>
        <td className="text-center">{student.gpa}</td>
        <td className="text-center">
          <img
            src={detailIcon}
            alt="Detail"
            title="Detail"
            onClick={() => console.log(student.id)}
          />
          <img
            src={deleteIcon}
            alt="Delete"
            title="Delete"
            onClick={() => console.log(student.id)}
          />
        </td>
      </tr>
    ))}
  </tbody>
);

export { TableBody };
