import React from "react";
import Rep from "./Rep";
import "./style.css";

function RepsUser({ repos }) {
  console.log(repos);
  if (repos[0] !== 'I') {
      console.log('teste')
    return (
      <ul>
        {repos.map((repositorio) => {
          return (
            <li key={repositorio.id}>
              <div>
                <h3>{repositorio.name}</h3>
            </div>
            {/* <Rep repositorio={ repositorio } /> */}
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
