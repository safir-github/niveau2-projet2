//Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/Header.css";

function Header() {
  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-custom p-3">
          <NavLink to="/" className="navbar-brand">
            <div className='div-logo'>
              <p className="text-logo">JOHN DOE</p>
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">accueil</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className="nav-link">réalisation</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link">blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">me contacter</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
