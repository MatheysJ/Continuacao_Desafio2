import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Buscar } from "../../../API";
import { DadosContext } from "../../../common/context/Dados";
import './style.css'

function NavLink_Home(){

  const { usuario, dados, setDados } = useContext(DadosContext);

  return (
    <div className="nav-links-item fixo">
      <Link to="/" onClick={() => {
        usuario !== dados.login && Buscar(usuario, setDados);
      }}
    ><h1>Home</h1></Link>
    </div>
  );
}

function NavLink_Detalhes(){

  const { usuario, dados, setDados } = useContext(DadosContext);
  
  return(
    <div className="nav-links-item drop">
      <Link to="/detalhes-usuario" onClick={()=>{
        usuario !== dados.login && Buscar(usuario, setDados);
      }}><h1>Detalhes</h1></Link>
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
