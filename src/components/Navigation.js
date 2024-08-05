//Navigation.js
import React from "react";
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">à propos</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/legal">Mentions Légales</Link></li>
        </ul>
    </nav>
    
  );
}

export default Navigation;
