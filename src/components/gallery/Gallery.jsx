import React from "react";
import "./Gallery.css";
import { useState } from "react";
import LeftArrow from "../../assets/icons/left-arrow.svg";
import RightArrow from "../../assets/icons/right-arrow.svg";

export default function Gallery({ state }) {
  console.log(state.pics[0]);
  const [activeSlide, setActiveSlide] = useState(0);
  const changeSlide = (value, e) => {
    console.log(e);
    const nbSlide = state.pics.length;
    const rightArrow = e.target.classList.contains("right-arrow");
    const leftArrow = e.target.classList.contains("left-arrow");
    console.log(nbSlide);
    if (leftArrow && activeSlide === 0) {
      console.log("debut");

      return setActiveSlide(nbSlide - 1);
    }
    if (rightArrow && activeSlide === nbSlide - 1) {
      console.log("fin");
      return setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + value);
    }
  };
  return (
    <div className="gallery-accomodation">
      <img src={state.pics[activeSlide]} alt={"photo de " + state.alt} className="active-pic" />
      <img src={LeftArrow} alt="fleche gauche" className="left-arrow" onClick={(e) => changeSlide(-1, e)} />
      <img src={RightArrow} alt="fleche droite" className="right-arrow" onClick={(e) => changeSlide(1, e)} />
    </div>
  );
}
