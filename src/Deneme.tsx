import React from "react";

type OtherProps = {
  name: string; //Data the chart will receive to render.
  color: string;
};

const Deneme: React.FC<OtherProps> = ({
  name = "Denemeler",
  color = "black"
}) => <div style={{ fontSize: 16, color }}>{name}</div>;

export default Deneme;
