import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import moonIcon from "/images/icon-moon.svg";
import sunIcon from "/images/icon-sun.svg";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className="section-header">
      <h1 className="text header-color">TODO</h1>
      {theme === "light" ? (
        <input
          type="image"
          className="header-color"
          onClick={() => toggleTheme()}
          src={moonIcon}
        />
      ) : (
        <input
          type="image"
          className="header-color"
          onClick={() => toggleTheme()}
          src={sunIcon}
        />
      )}
    </section>
  );
}

export default Header;
