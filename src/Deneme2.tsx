import React from "react";

interface Props {
  /**
   * Data the chart will receive to render.
   */
  name: string;
  /**
   * Color
   */
  color: string;
}

// Notice here we're using the function declaration with the interface Props
const Heading = ({ name = "Denemeler", color = "black" }: Props) => {
  return <div style={{ fontSize: 16, color }}>{name}</div>;
};

export default Heading;
