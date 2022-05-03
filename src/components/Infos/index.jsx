import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import Repositorio from "../Repositorio";
import './style.css'

function Infos({ dados, repos }) {

  return (
    <div className="layout_detalhes">
      <div className="lista_detalhes_box">
        <ul className="lista_detalhes">
          {/* <Repositorio repos={ Array.from(repos)} /> */}
        </ul>
      </div>

      <div className="imagem_detalhes_box">
        <div className="imagem_detalhes_card">
          <Avatar className="imagem_detalhes" alt="Avatar de usuário" src={dados.avatar_url} sx={{ width: 230, height: 230}} />
          <div className="box_name_login">
            <span className="name">{dados.name}</span>
            <span className="login">{dados.login}</span>
          </div>
          <div className="box_follow">
            <div><span>{dados.followers} </span>Seguidores</div>
            <div><span>{dados.following} </span>Seguindo</div>
          </div>
          <div><span>{dados.bio}</span></div>
        </div>
        <span className="id_user">{dados.id}</span>
      </div>
    </div>
  );
}

export default Infos;
