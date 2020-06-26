import React from "react";
import { Title } from "../../commons";
import { TableHead, TableBody } from "./atoms";
import { Student, Header } from "../../../interfaces";
import { Card } from "../../commons";

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
