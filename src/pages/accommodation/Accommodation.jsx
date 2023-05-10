import React from "react";
import "./Accommodation.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import data from "../../data/logements.json";
import Gallery from "../../components/gallery/Gallery";
import Collapse from "../../components/collapse/Collapse";
import Rate from "../../components/rate/Rate";
import Tag from "../../components/tag/Tag";

export default function Accommodation() {
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.pathname.replace("/logement/", "");
  useEffect(() => {
    const objectWithId = data.find((obj) => obj.id === id);
    !objectWithId && navigate("/*");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const accommodation = data.filter((obj) => obj.id === id);

  return (
    <div className="accomodation-container">
      {accommodation[0] && <Gallery state={{ pics: accommodation[0].pictures, alt: accommodation[0].title }} />}
      <div className="rate-and-title-container">
        <div className="title-accomodation-tags-container">
          {accommodation[0] && <h2>{accommodation[0].title}</h2>}
          {accommodation[0] && <p>{accommodation[0].location}</p>}
          <div className="tags-container">{accommodation[0] && accommodation[0].tags.map((tag, index) => <Tag state={tag} key={index} />)}</div>
        </div>
        <div className="rate-star-host-container">
          {accommodation[0] && <Rate state={{ rate: accommodation[0].rating, hostName: accommodation[0].host.name, pic: accommodation[0].host.picture }} />}
        </div>
      </div>
      <div className="collapses-container">
        <div className="collapse-description">{accommodation[0] && <Collapse state={{ title: "Description", description: accommodation[0].description }} />}</div>
        <div className="collapse-equipment">{accommodation[0] && <Collapse state={{ title: "Equipments", equipments: accommodation[0].equipments }} />}</div>
      </div>
    </div>
  );
}
