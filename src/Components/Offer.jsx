import React, { useState } from "react";
import { OfferData } from "../Data/OfferData";

const Offer = ({ OfferId }) => {
  const [currentOffer] = useState(OfferData[OfferId - 1]);

  return (
    <div className="Offer">
      <img src={currentOffer.img} alt="" />
      <h2>{currentOffer.title}</h2>
      <h5>{currentOffer.text}</h5>
      <h4>{currentOffer.clickable}</h4>
    </div>
  );
};

export default Offer;
