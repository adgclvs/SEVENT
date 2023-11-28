import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { OfferData } from "../Data/OfferData";

const Offer = ({ OfferId }) => {
  const [currentOffer] = useState(OfferData[OfferId - 1]);

  return (
    <div className="Offer">
      <div className="content">
        <div className="image">
          <img src={currentOffer.img} alt="" />
        </div>
        <h3>{currentOffer.title}</h3>
        <p>{currentOffer.text}</p>
        <div className="click"></div>
      </div>
      <div className="clickable">
        <div className="chevron">
          <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ff5f00" }} />
        </div>
        <div className="clickable-content">
          <span>{currentOffer.clickable}</span>
        </div>
      </div>
    </div>
  );
};

export default Offer;
