import React from "react";
import "./Gallery.css";
import { useState } from "react";
import LeftArrow from "../../assets/icons/left-arrow.svg";
import RightArrow from "../../assets/icons/right-arrow.svg";

export default function Gallery({ state }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const changeSlide = (value, e) => {
    const nbSlide = state.pics.length;
    const rightArrow = e.target.classList.contains("right-arrow");
    const leftArrow = e.target.classList.contains("left-arrow");

    if (leftArrow && activeSlide === 0) {
      return setActiveSlide(nbSlide - 1);
    }
    if (rightArrow && activeSlide === nbSlide - 1) {
      return setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + value);
    }
  };
  return (
    <div className="gallery-accomodation">
      <img src={state.pics[activeSlide]} alt={"photo de " + state.alt} className="active-pic" />
      {state.pics.length > 1 && <img src={LeftArrow} alt="fleche gauche" className="left-arrow" onClick={(e) => changeSlide(-1, e)} />}
      {state.pics.length > 1 && <img src={RightArrow} alt="fleche droite" className="right-arrow" onClick={(e) => changeSlide(1, e)} />}
      {state.pics.length > 1 && <p>{activeSlide + 1 + "/" + state.pics.length}</p>}
    </div>
  );
}
