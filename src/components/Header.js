import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header() {
  return (
    <header className="site-header container-fluid d-flex align-items-center py-3">
      <Link to="/" className="d-flex align-items-center text-decoration-none w-100">
        <img
          src="/image/logo.png"
          alt="Логотип"
          className="site-logo"
        />
        <div className="text-left flex-grow-1">
          <h1 className="header-title">Інформаційний портал</h1>
          <h1 className="header-title">«Найвідоміші туристичні місця України»</h1>
        </div>
      </Link>
    </header>
  );
}

export default Header;