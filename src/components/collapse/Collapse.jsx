import React from "react";
import "./Collapse.css";
import { useState } from "react";
import ArrowTop from "../../assets/icons/arrow-top.svg";
import ArrowDown from "../../assets/icons/arrow-down.svg";

export default function Collapse({ state }) {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const handleToggleCollapse = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div className="collapse">
      <div className="collapse-title">
        <img src={!toggleCollapse ? ArrowDown : ArrowTop} className="arrows-collapse" alt="fleche vers le bas" onClick={handleToggleCollapse} />
        <h3>{state.cat !== undefined ? state.cat : state.title}</h3>
      </div>
      {toggleCollapse && (
        <div className="collapse-content collapse-anim-in">
          {state.title === "Description" ? (
            <p>{state.description}</p>
          ) : (
            <ul>
              {state.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
