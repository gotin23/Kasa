import React from "react";
import "./Accommodation.css";
import { useLocation } from "react-router-dom";
import data from "../../data/logements.json";
import Gallery from "../../components/gallery/Gallery";

export default function Accommodation(props) {
  const location = useLocation();
  // const name = location.pathname.replace("/logement/", "").replace(/%20/g, " ");
  const name = decodeURIComponent(location.pathname).replace("/logement/", "");
  const accommodation = data.filter((obj) => obj.title === name);
  // name.replace("%", "");
  console.log(name, accommodation);
  return (
    <div className="accomodation-container">
      <Gallery state={{ pics: accommodation[0].pictures, alt: accommodation[0].title }} />
    </div>
  );
}
