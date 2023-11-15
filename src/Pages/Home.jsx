import React from "react";
import home_pic from "../Assets/img/home-pic.jpg";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="home-pic-container">
        <img src={home_pic} alt="Background car" id="home-pic" />
      </div>
    </div>
  );
};

export default Home;
