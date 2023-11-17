import React from "react";
import home_pic from "../Assets/img/home-pic.jpg";
import CarForm from "../Components/CarForm";
import Header from "../Components/Header";
import Offer from "../Components/Offer";

const Rent = () => {
  return (
    <div className="Rent">
      <Header />
      <div className="home-pic-container">
        <img src={home_pic} alt="Background car" id="home-pic" />
      </div>
      <CarForm />
      <div className="content">
        <div className="offers">
          <h1>Explorez les offres et produit SEVENT</h1>
          <div className="offers-content">
            <Offer OfferId={1} />
            <Offer OfferId={2} />
            <Offer OfferId={3} />
          </div>
        </div>
        <div className="subscription">
          <h1>SEVENT+ votre auto: prix mensuel fixe, sans engagement, tout inclus!</h1>
          <div className="subscription-content">
            <Offer OfferId={4} />
            <Offer OfferId={5} />
          </div>
        </div>
        <div className="discovery"></div>
      </div>
    </div>
  );
};

export default Rent;
