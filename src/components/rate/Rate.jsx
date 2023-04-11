/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Rate.css";
import colorStar from "../../assets/icons/star-color.svg";
import greyStar from "../../assets/icons/star-grey.svg";

export default function Rate({ state }) {
  console.log(state);
  const hostName = state.hostName.split(" ");
  return (
    <div className="rate-container">
      <div className="host">
        <p>
          {hostName[0]}
          <br /> {hostName[1]}
        </p>
        <div className="host-picture">
          <img src={state.pic} alt="photo de profil" />
        </div>
      </div>
      <div className="rating">
        <img src={colorStar} alt="note logo étoile" />
        <img src={state.rate >= 2 ? colorStar : greyStar} alt="note logo étoile" />
        <img src={state.rate >= 3 ? colorStar : greyStar} alt="note logo étoile" />
        <img src={state.rate >= 4 ? colorStar : greyStar} alt="note logo étoile" />
        <img src={state.rate == 5 ? colorStar : greyStar} alt="note logo étoile" />
      </div>
    </div>
  );
}
