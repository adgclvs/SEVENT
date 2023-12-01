import React from "react";
import home_pic from "../Assets/img/home-pic.jpg";
import Car from "../Components/Car";
import CarForm from "../Components/CarForm";
import Description from "../Components/Description";
import Header from "../Components/Header";
import Offer from "../Components/Offer";

const Rent = () => {
  return (
    <div className="Rent">
      <Header />
      <div className="start">
        <div className="home-pic-container">
          <img src={home_pic} alt="Background car" id="home-pic" />
        </div>
        <div className="form">
          <CarForm />
        </div>
      </div>
      <div className="content">
        {/* <div className="offers">
          <div className="offers-title">
            <h1>Explorez les offres et produit SEVENT</h1>
          </div>
          <div className="offers-content">
            <Offer OfferId={1} />
            <Offer OfferId={2} />
            <Offer OfferId={3} />
          </div>
        </div> */}
        <div className="subscription">
          <div className="subscription-title">
            <h2>SEVENT+ votre auto: prix mensuel fixe, sans engagement, tout inclus!</h2>
          </div>
          <div className="subscription-content">
            <div className="subscription-content-left">
              <Offer OfferId={4} />
            </div>
            <div className="subscription-content-right">
              <Offer OfferId={5} />
            </div>
          </div>
        </div>
        {/* <div className="discovery">
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
          <div className="world-title">
            <h1>Les agences SEVENT dans le monde</h1>
          </div>
          <div className="world-map">
            <div className="left">
              <h1>2000+</h1>
              <h3>Agences dans le monde</h3>
            </div>
            <img src="./Assets/img/world-map.png" alt="" />
            <div className="right">
              <h1>105+</h1>
              <h3>Pays</h3>
            </div>
          </div>
          <div className="world-content">Trouver une agence</div>
        </div>
        <div className="footer">
          <div className="first-footer">
            <div className="first-footer-header">
              <ul>
                <li>SEVENT en France</li>
                <li>SEVENT en Europe et dans le Monde</li>
                <li>Services proposés par SEVENT</li>
              </ul>
            </div>
            <div className="frist-footer-description">
              <Description id={1} />
            </div>
          </div>
          <div className="second-footer"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Rent;
