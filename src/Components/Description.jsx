import React, { useState } from "react";
import { DescriptionData } from "../Data/DescriptionData";

const Description = ({ id }) => {
  const [currentDescription] = useState(DescriptionData[id - 1]);
  return (
    <div className="Description">
      <div className="title">{currentDescription.title}</div>
      <div className="text">{currentDescription.text}</div>
    </div>
  );
};

export default Description;
