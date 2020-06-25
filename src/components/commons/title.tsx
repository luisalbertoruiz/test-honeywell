import React from "react";

type TitleProps = { title: string };

const Title = ({ title }: TitleProps) => <h1 className="title">{title}</h1>;

export { Title };
