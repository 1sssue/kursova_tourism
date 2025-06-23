import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Menu.css";

function Menu() {
  return (
<nav className="navbar container-fluid navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Переключити навігацію"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <NavLink to="/" className="nav-link" activeclassname="active">
                НА ГОЛОВНУ
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeclassname="active">
                ПРО САЙТ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery" className="nav-link" activeclassname="active">
                ГАЛЕРЕЯ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/news" className="nav-link" activeclassname="active">
                НОВИНИ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" className="nav-link" activeclassname="active">
                КОНТАКТИ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;