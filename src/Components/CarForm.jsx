import { faCar, faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Date from "./Date";
import Search from "./Search";

const CarForm = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="carForm">
      <div className="carForm-content">
        <div className="car-or-utilities">
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav2-active" : "nav2-inactive")}>
            <button>
              <FontAwesomeIcon icon={faCar} style={{ color: "#ffffff" }} />
              <p>Véhicules</p>
            </button>
          </NavLink>
          <NavLink to="/plus" className={(nav) => (nav.isActive ? "nav2-active" : "nav2-inactive")}>
            <button id="utilities">
              <FontAwesomeIcon icon={faTruckMoving} style={{ color: "#000000" }} />
              <p>Utilitaires</p>
            </button>
          </NavLink>
        </div>
        <div className="choosing">
          <div className="place">
            {!isActive ? <p>Retrait et retour</p> : <p>Prise en charge</p>}

            <Search showStar={false} toggleActiveState={toggleActiveState} />
          </div>
          <div className="diferent-return">
            {isActive ? (
              <div className="diferent-return-active">
                <p>retour</p>
                <div className="text-input">
                  <Search showStar={true} toggleActiveState={toggleActiveState} />
                  <p onClick={toggleActiveState}></p>
                </div>
              </div>
            ) : (
              <div className="diferent-return-inactive">
                <p onClick={toggleActiveState}>+ Lieu de retour différent</p>
              </div>
            )}
          </div>
          <div className="choosing-date">
            <div className="start-date">
              <p>Date de départ</p>
              <Date />
            </div>
            <div className="end-date">
              <p>Date de retour</p>
              <Date />
            </div>
          </div>
          <div className="send-choice">
            <button>Voir les véhicules</button>
          </div>
        </div>

        <div className="business-pricing">
          <p>Appliquer le tarif d'entreprise</p>
        </div>
      </div>
    </div>
  );
};

export default CarForm;
