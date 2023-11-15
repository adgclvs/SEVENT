import React from "react";
import home_pic from "../Assets/img/home-pic.jpg";
import CarForm from "../Components/CarForm";
import Header from "../Components/Header";

const Rent = () => {
  return (
    <div className="Rent">
      <Header />
      <div className="home-pic-container">
        <img src={home_pic} alt="Background car" id="home-pic" />
      </div>
      <CarForm />
    </div>
  );
};

export default Rent;
