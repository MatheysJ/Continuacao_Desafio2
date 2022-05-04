import React from "react";
import Rep from "./Rep";
import "./style.css";

function RepsUser({ repos }) {
  if (repos[0] !== 'I') {
    return (
      <ul className="lista_RepsUser">
        {repos.map((repositorio) => {
          return (
            <li key={repositorio.id} className="item_lista_RepsUser">
                <Rep repositorio={ repositorio } />
            </li>
          );
        })}
      </ul>
    );
  }
  return (
      <></>
  );
}

export default RepsUser;
