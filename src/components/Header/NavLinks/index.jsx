import React from "react";
import { Link, useLocation } from "react-router-dom";
import './style.css'

function NavLink_Home(){
  return (
    <div className="nav-links-item fixo">
      <Link to="/"><h1>Home</h1></Link>
    </div>
  );
}

function NavLink_Detalhes(){
  return(
    <div className="nav-links-item drop">
      <Link to="/detalhes-usuario"><h1>Detalhes</h1></Link>
    </div>
  );
}

function NavLink_Favoritos(){
  return(
    <div className="nav-links-item drop">
      <Link to="/repositorios-favoritos"><h1>Favoritos</h1></Link>
    </div>
  );
}

function NavLinks() {

  const location = useLocation();

  return (
    <div className="nav-links">
      
      <NavLink_Home />

      {location.pathname === "/detalhes-usuario" && <NavLink_Detalhes />}
      
      {location.pathname === "/repositorios-favoritos" && [<NavLink_Detalhes />, <NavLink_Favoritos />]}

    </div>
  );
}

export default NavLinks;
