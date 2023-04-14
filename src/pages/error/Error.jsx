import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error-container">
      <h3>404</h3>
      <p>
        Oups! La page que
        <span className="break-line-error">
          <br />
        </span>
        vous demandez n'existe pas.
      </p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}
