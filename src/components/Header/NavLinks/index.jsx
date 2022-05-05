import React from "react";
import { Link } from "react-router-dom";
import './style.css'

function NavLinks() {
  return (
    <div className="nav-links">

      <div className="nav-links-item">
        <Link to="/"><h1>Home</h1></Link>
      </div>
      
      <div className="nav-links-item">
        <Link to="/detalhes-usuario"><h1>Detalhes</h1></Link>
      </div>
      
      <div className="nav-links-item">
        <Link to="/repositorios-favoritos"><h1>Favoritos</h1></Link>
      </div>

    </div>
  );
}

export default NavLinks;
