import React from "react";

type Props = {
  name: string;
};

const Input = ({ name }: Props) => (
  <div className="form-container">
    <input type="text" className="form-input" />
    <label className="form-label">{name}</label>
  </div>
);

export { Input };
