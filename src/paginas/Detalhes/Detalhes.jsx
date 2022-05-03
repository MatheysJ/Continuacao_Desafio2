import React, { useContext, useEffect, useState } from "react";
/* import { Buscar } from '../../API'; */
import { Typography } from "@mui/material";
import "./style.css";
import { Link } from "react-router-dom";
import { Buscar, BuscarRepos } from "../../API";
import { UsuarioContext } from "../../common/context/Usuario";
import { DadosContext } from "../../common/context/Dados";
import { ReposContext } from "../../common/context/Repos";
import Infos from "../../components/Infos";

function Detalhes() {
  const { usuario } = useContext(UsuarioContext);
  const { dados, setDados } = useContext(DadosContext);
  const { repos, setRepos } = useContext(ReposContext);


  useEffect(() => {
    Buscar(usuario, setDados);
    BuscarRepos(usuario, setRepos);
    console.log('teste')
  }, []);

  return (
    <div className="bloco">

        <Infos dados={ dados } repos={ repos }/>

      <div className="detalhes__container">
        <Link to="/repositorios-favoritos">
          <Typography variant="h5" align="center" className="botao">
            Repositórios favoritos
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default Detalhes;
