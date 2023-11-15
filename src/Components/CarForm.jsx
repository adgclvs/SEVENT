import { faCar, faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const CarForm = () => {
  return (
    <div className="carForm">
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
          <p>Retrait et retour</p>
          <Search />
        </div>
      </div>

      <div className="business-pricing">
        <p>Appliquer le tarif d'entreprise</p>
      </div>
    </div>
  );
};

export default CarForm;
