import React from "react";
import home_pic from "../Assets/img/home-pic.jpg";
import Car from "../Components/Car";
import CarForm from "../Components/CarForm";
import Header from "../Components/Header";
import Offer from "../Components/Offer";

const Rent = () => {
  return (
    <div className="Rent">
      <div className="header">
        <Header />
      </div>
      <div className="home-pic-container">
        <img src={home_pic} alt="Background car" id="home-pic" />
      </div>
      <CarForm />
      <div className="content">
        <div className="offers">
          <div className="offers-title">
            <h1>Explorez les offres et produit SEVENT</h1>
          </div>
          <div className="offers-content">
            <Offer OfferId={1} />
            <Offer OfferId={2} />
            <Offer OfferId={3} />
          </div>
        </div>
        <div className="subscription">
          <div className="subscription-title">
            <h1>SEVENT+ votre auto: prix mensuel fixe, sans engagement, tout inclus!</h1>
          </div>
          <div className="subscription-content">
            <Offer OfferId={4} />
            <Offer OfferId={5} />
          </div>
        </div>
        <div className="discovery">
          <div className="discovery-title">
            <h1>Découvrez la flotte de véhicule chez SEVENT</h1>
          </div>
          <div className="discovery-content">
            <Car carId={1} />
            <Car carId={2} />
            <Car carId={3} />
            <Car carId={4} />
            <Car carId={5} />
            <Car carId={6} />
            <Car carId={7} />
          </div>
        </div>
        <div className="world">
          <div className="world-map"></div>
          <div className="world-content"></div>
        </div>
        <div className="footer">
          <div className="first-footer"></div>
          <div className="second-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Rent;
