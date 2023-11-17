import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="left-side">
        <ul>
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Rent</li>
          </NavLink>
          <NavLink to="/share" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Share</li>
          </NavLink>
          <NavLink to="/ride" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Ride</li>
          </NavLink>
          <NavLink to="/plus" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>SEVENT+ Abonnement auto</li>
          </NavLink>
        </ul>
      </div>

      <div className="right-side">
        <ul>
          <li>Gérer les réservations</li>
          <li>
            <FontAwesomeIcon icon={faGlobe} style={{ color: "#000000" }} />
            FR | €
          </li>
          <li>Connexion | Inscription</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
