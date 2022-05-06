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
  return (
    <>
      <nav>

        <NavLinks />

        <div className="nav-search">
          <SearchBar />
        </div>

      </nav>
      {/* <div className="nav-gradient" /> */}
    </>
  );
}

function HeaderHome() {
  return (
    <>
      <nav>
        <NavLinks />
      </nav>
      {/* <div className="nav-gradient" /> */}
    </>
  );
}