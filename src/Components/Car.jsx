import React, { useState } from "react";
import { CarsData } from "../Data/CarsData";

const Car = ({ carId }) => {
  const [currentCar] = useState(CarsData[carId - 1]);

  return (
    <div className="Car">
      <img src={currentCar.img} alt="" />
      <h3>{currentCar.text}</h3>
    </div>
  );
};

export default Car;
