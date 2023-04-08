import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logoKasa from "./kasa-logo.svg";

export default function Header() {
  return (
    <div className="navigation-container">
      <div className="header-logo-container">
        <img src={logoKasa} alt="logo kasa" />
      </div>
      <div className="navigation">
        <nav>
          <ul>
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Accueil
            </NavLink>
            <NavLink exact to="/a-propos" className="nav-link" activeClassName="active">
              A Propos
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}
