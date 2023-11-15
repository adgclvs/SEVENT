import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Search = () => {
  return (
    <div className="search">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        rotation={90}
        size="l"
        style={{ color: "#121212" }}
      />

      <input type="text" placeholder="Aéroport, ville ou adresse" />
    </div>
  );
};

export default Search;
