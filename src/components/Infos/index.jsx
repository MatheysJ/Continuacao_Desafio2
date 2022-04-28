import { Avatar } from "@mui/material";
import React from "react";
import './style.css'

function Infos({ dados }) {
  return (
    <div className="layout_detalhes">
      <ul className="lista_detalhes">
        <li><span>Usuário: </span>{dados.login}</li>
        <li><span>Nome: </span>{dados.name}</li>
        <li><span>id: </span>{dados.id}</li>
        <li><span>Seguidores: </span>{dados.followers}</li>
        <li><span>Seguindo: </span>{dados.following}</li>
        <li><span>Bio: </span>{dados.bio}</li>
        <li><span>link: </span>{dados.html_url}</li>
      </ul>

      <div className="imagem_detalhes_box">
        <Avatar className="imagem_detalhes" alt="Avatar de usuário" src={dados.avatar_url} sx={{ width: 180, height: 180}} />
      </div>
    </div>
  );
}

export default Infos;
