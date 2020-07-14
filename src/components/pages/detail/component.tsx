import React from "react";
import { Title, Card } from "../../commons";
import { Photo } from "./atoms";
const Detail = () => (
  <div className="container">
    <Title title="Detail Student" />
    <Card>
      <Photo />
    </Card>
  </div>
);

export { Detail };
