import React from "react";
import { Title } from "../../commons";
import { TableHead, TableBody } from "./atoms";
import { Student } from "../../../interfaces";

const headers = ["First Name", "Last Name", "Ph Number", "GPA", "Actions"];

const data: Array<Student> = [
  {
    id: 1,
    firstName: "Alberto",
    lastName: "Ruiz",
    address: "",
    gpa: "4.0",
    phNumber: "5521258963",
  },
];

const Table = () => (
  <div className="container">
    <Title title="Students" />
    <div className="table-container">
      <table>
        <TableHead headers={headers} />
        <TableBody data={data} />
      </table>
    </div>
  </div>
);

export { Table };
