import React, { useContext, useEffect } from "react";
import { Avatar, Button } from "@mui/material";
import RepsUser from "../RepsUser";
import './style.css'
import { Buscar, BuscarRepos, BuscarReposFav } from '../../API';
import { UsuarioContext } from "../../common/context/Usuario";
import { DadosContext } from "../../common/context/Dados";
import { ReposContext } from "../../common/context/Repos";
import { ReposFavContext } from '../../common/context/ReposFav';
import { Link } from "react-router-dom";

function Infos() {

  const { usuario } = useContext(UsuarioContext)
  const { dados, setDados } = useContext(DadosContext);
  const { repos, setRepos } = useContext(ReposContext);
  const { setReposFav } = useContext(ReposFavContext);

  //Esse useEffect serve pra "consertar" um bug da página de Detalhes, em que o BuscarRepos é chamado pela barra de pesquisa, 
  //o usuário muda e os repositórios também, mas os dados continuam como o do usuário antigo.
  useEffect(() => {
    Buscar(usuario, setDados)
    BuscarRepos(usuario, setRepos)
  }, [])

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
          <div className="box_botao">
            {/* Tá dando erro por ter um Button dentro de um Link, aparentemente. */}
            <Link to="/repositorios-favoritos">
              <Button variant="outlined" color="inherit" size="large" onClick={() => {
                BuscarReposFav(usuario, setReposFav);
              }}>
                Repositórios favoritos
              </Button>
            </Link>
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
