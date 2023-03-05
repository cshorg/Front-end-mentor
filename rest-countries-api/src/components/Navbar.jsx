import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as outlineMoon } from "@fortawesome/fontawesome-free-regular";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <Link to="/countries">
        <h5>Where in the world?</h5>
      </Link>
      {theme === "light" ? (
        <div className="navbar-theme" onClick={toggleTheme}>
          <FontAwesomeIcon icon={outlineMoon} />
          {theme} Mode
        </div>
      ) : (
        <div className="navbar-theme" onClick={toggleTheme}>
          <FontAwesomeIcon icon={faMoon} />
          {theme} Mode
        </div>
      )}
    </div>
  );
}

export default Navbar;
