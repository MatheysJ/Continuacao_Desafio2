import React from "react";
import "./style.css";

import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import NavLinks from "./NavLinks";


export function HeaderLocation() {
  const location = useLocation();
  if (location.pathname === "/") {
    return <HeaderHome />;
  }
  return <HeaderPesquisa />;
}


function HeaderPesquisa() {
  /* Esse useEffect serve para que seja realizada uma busca quando o usuário digitar na barra de pesquisa do header e parar por 2
  segundos, com isso, o useEffect executa a busca e define Dados e Repositórios sem a necessidade de clicar no botão */

  return (
    <>
      <nav>

        <NavLinks />

        <div className="nav-search">
          <SearchBar /* label="" *//>
        </div>

      </nav>
      <div className="barrinha_nav" />
    </>
  );
}

function HeaderHome() {
  return (
    <>
      <nav>
        <NavLinks /* label="Pesquise um usuário" */ />
      </nav>
      <div className="barrinha_nav" />
    </>
  );
}