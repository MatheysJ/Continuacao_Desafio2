import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button } from "@mui/material";
import RepsUser from "../RepsUser";
import './style.css'
import { BuscarPages, BuscarReposFav } from '../../API';
import { DadosContext } from "../../common/context/Dados";
import { useNavigate } from "react-router-dom";
import Paginas from "../Paginas";

function Infos() {

  const { dados, usuario, repos, setReposFav, setRepos, loading = true } = useContext(DadosContext);

  const navigate = useNavigate();

  return (
    <div className="layout_detalhes">

      <div className="lista_detalhes_box">
        <ul className="lista_detalhes">
          {console.log(loading)}
          {!loading ? <RepsUser repos={ Array.from(repos)} /> : <h1>Está carregando</h1>}
          {!loading ? <Paginas /> : <h1>...</h1>}

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
          <div className="box_botao">
              <Button variant="outlined" color="inherit" size="large" onClick={() => {
                BuscarReposFav(usuario, setReposFav);
                navigate("/repositorios-favoritos")
              }}>
                Repositórios favoritos
              </Button>
          </div>
          <div className="box_id">
            <span className="id_user">{dados.id}</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Infos;
