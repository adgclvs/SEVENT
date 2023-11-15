import React from "react";
import { NavLink } from "react-router-dom";

const CarForm = () => {
  return (
    <div className="CarForm">
      <div className="car-or-utilities">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav2-active" : "nav2-inactive")}>
          <button>Véhicules</button>
        </NavLink>
        <NavLink to="/plus" className={(nav) => (nav.isActive ? "nav2-active" : "nav2-inactive")}>
          <button id="utilities">Utilitaires</button>
        </NavLink>
      </div>
      <div className="place">
        <input type="text" />
      </div>

      <div className="business-pricing">
        <p>Appliquer le tarif d'entreprise</p>
      </div>
    </div>
  );
};

export default CarForm;
