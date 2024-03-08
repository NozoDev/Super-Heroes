import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="contenedor-padre">
      <ul className="contenedor-hijo">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/">DC</a>
        </li>
        <li>
          <a href="/">Marvel</a>
        </li>
        <div>
          <input type="text" />
          <button>Seach</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
