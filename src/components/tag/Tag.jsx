import React from "react";
import "./Tag.css";

export default function Tag({ state }) {
  return (
    <div className="tag">
      <p>{state}</p>
    </div>
  );
}
