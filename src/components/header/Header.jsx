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
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/a-propos"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              A Propos
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}
