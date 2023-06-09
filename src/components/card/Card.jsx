import React from "react";
import "./Card.css";

export default function Card({ props }) {
  return (
    <div className="home-card">
      <img src={props.url} alt={props.title} />
      <h3>{props.title}</h3>
    </div>
  );
}
