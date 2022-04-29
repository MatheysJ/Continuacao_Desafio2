import React from "react";
import './style.css'

function Repositorio({ repos }) {
  return (
    <ul className="itens_repositorio">
      {repos.map((repositorio) => {
        return ( 
          <li key={repositorio.id}>
            {repositorio.name}

            {/* Colocar o avatar do usuário ao lado, dentro do objeto repos, há um objeto chamado owner, em há as informações sobre 
            o dono do reposiório, lá tem o avatar_url */}
          </li>
        );
      })}
    </ul>
  );
}

export default Repositorio;
