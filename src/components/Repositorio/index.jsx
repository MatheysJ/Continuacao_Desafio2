import { Avatar } from "@mui/material";
import React from "react";
import './style.css'

/* import StarIcon from '@material-ui/icons/Star'; */

function Repositorio({ repos }) {
  return (
    <ul className="bloco_repositorio">
      {repos.map((repositorio) => {
        return ( 
          <li className="li_repositorio" key={repositorio.id}>
            <div className="lista_repositorio">
              <span className="nome_repositorio">{repositorio.name}</span>
              <span className="owner_repositorio">{repositorio.owner.login}</span>
              <span><Avatar className="avatar_repositorio" alt="Avatar de usuário" src={repositorio.owner.avatar_url} sx={{ width: 25, height: 25}} /></span>
            </div>
            <div className="dados_lista_repositorio">
              <span>{repositorio.language}</span>
              <span><span>{repositorio.stargazers_count}</span><span>{/* <StarIcon /> */}Star</span></span>

            </div>

            {/* Colocar o avatar do usuário ao lado, dentro do objeto repos, há um objeto chamado owner, em há as informações sobre 
            o dono do reposiório, lá tem o avatar_url */}
          </li>
        );
      })}
    </ul>
  );
}

export default Repositorio;
