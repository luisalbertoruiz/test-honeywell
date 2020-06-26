import React from "react";
import { Title, Card, Input, Button } from "../../commons";

const Add = () => (
  <div className="container">
    <Title title="New Student" />
    <Card>
      <Input name="First Name" />
      <Input name="Last Name" />
      <Input name="Address" />
      <Input name="Phone Number" />
      <Input name="GPA" />
      <Button name="Save" onClick={() => {}} />
    </Card>
  </div>
);

export { Add };
