import React from "react";

type Props = {
  name: string;
  onClick(): void;
};

const Button = ({ name, onClick }: Props) => (
  <button type="button" onClick={onClick} className="button">
    {name}
  </button>
);

export { Button };
