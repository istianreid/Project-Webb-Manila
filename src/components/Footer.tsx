import React from "react";
import Line from "./elements/line";
import Typography from "./elements/Typography";

export default function Footer() {
  return (
    <div className="container mx-auto">
      <Line variant="horizontal" />

      <div className=" flex justify-between p-10">
        <Typography variant="md"> @All Rights Reserved 2020-2024</Typography>
        <Typography variant="md"> Designed by Richard Reid</Typography>
      </div>
    </div>
  );
}
