import { Avatar } from "@mui/material";
import React from "react";
import RepsUser from "../RepsUser";
import './style.css'

function Infos({ dados, repos }) {

  console.log(`Info foi chamada com os dados: dados: ${dados} e repos: ${repos}`);
  console.log(dados)
  console.log(repos)

  return (
    <div className="layout_detalhes">
      <div className="lista_detalhes_box">
        <ul className="lista_detalhes">
          <RepsUser repos={ Array.from(repos)} />

        </ul>
      </div>

      <div className="imagem_detalhes_box" >
        <div className="imagem_detalhes_card">
          <a className="box_avatar_redondo" target="_blank" rel="noopener noreferrer" href={dados.html_url}>
            <Avatar className="imagem_detalhes" alt="Avatar de usuário" src={dados.avatar_url} sx={{ width: 230, height: 230}} />
          </a>
          <div className="box_name_login">
            <a target="_blank" rel="noopener noreferrer" href={dados.html_url} className="name">{dados.name}</a >
            <a target="_blank" rel="noopener noreferrer" href={dados.html_url} className="login">{dados.login}</a >
          </div>
          <div className="box_follow">
            <div><span>{dados.followers} </span>Seguidores</div>
            <div><span>{dados.following} </span>Seguindo</div>
          </div>
          <div className="box_bio"><span className="bio">{dados.bio}</span></div>
        </div>
        <span className="id_user">{dados.id}</span>
      </div>
    </div>
  );
}

export default Infos;
