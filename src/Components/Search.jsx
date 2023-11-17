import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Search = ({ showStar, toggleActiveState }) => {
  const handleClick = () => {
    if (showStar) {
      toggleActiveState();
    }
  };

  return (
    <div className="search">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        rotation={90}
        size="l"
        style={{ color: "#121212" }}
      />
      <div className="input-cross">
        <input type="text" placeholder="Aéroport, ville ou adresse" />
        <p onClick={handleClick}>
          {showStar ? <FontAwesomeIcon icon={faXmark} style={{ color: "#000000" }} /> : ""}
        </p>
      </div>
    </div>
  );
};

export default Search;
