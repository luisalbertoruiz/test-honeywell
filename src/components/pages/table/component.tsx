import React from "react";
import { Title, Card } from "../../commons";
import { TableHead, TableBody } from "./atoms";
import { Student, Header } from "../../../interfaces";

type Props = {
  isLoading: boolean;
  data: Array<Student>;
  headers: Array<Header>;
};

const Table = ({ isLoading, data, headers }: Props) => {
  return (
    <div className="container">
      <Title title="Students" />
      <Card>
        <div className="table-container">
          <table>
            <TableHead headers={headers} />
            <TableBody data={data} />
          </table>
        </div>
      </Card>
    </div>
  );
};

export { Table };
