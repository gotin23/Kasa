import React from "react";
import "./Accommodation.css";
import { useLocation } from "react-router-dom";
import data from "../../data/logements.json";
import Gallery from "../../components/gallery/Gallery";
import Collapse from "../../components/collapse/Collapse";
import Rate from "../../components/rate/Rate";
import Tag from "../../components/tag/Tag";

export default function Accommodation(props) {
  const location = useLocation();
  // const name = location.pathname.replace("/logement/", "").replace(/%20/g, " ");
  const name = decodeURIComponent(location.pathname).replace("/logement/", "");
  const accommodation = data.filter((obj) => obj.title === name);
  // name.replace("%", "");
  console.log(accommodation);
  return (
    <div className="accomodation-container">
      <Gallery state={{ pics: accommodation[0].pictures, alt: accommodation[0].title }} />
      <div className="rate-and-title-container">
        <div className="title-accomodation-tags-container">
          <h2>{accommodation[0].title}</h2>
          <p>{accommodation[0].location}</p>
          <div className="tags-container">
            {accommodation[0].tags.map((tag) => (
              <Tag state={tag} />
            ))}
          </div>
        </div>
        <div className="rate-star-host-container">
          <Rate state={{ rate: accommodation[0].rating, hostName: accommodation[0].host.name, pic: accommodation[0].host.picture }} />
        </div>
      </div>

      <div className="collapses-container">
        <div className="collapse-description">
          <Collapse state={{ title: "Description", description: accommodation[0].description }} />
        </div>
        <div className="collapse-equipment">
          <Collapse state={{ title: "Equipments", equipments: accommodation[0].equipments }} />
        </div>
      </div>
    </div>
  );
}
