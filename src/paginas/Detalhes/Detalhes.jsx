import React, { useContext, useEffect } from "react";
/* import { Buscar } from '../../API'; */
import { Button, Typography } from "@mui/material";
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
        <Button variant="contained" color="secondary" size="large">
          Repositórios favoritos
        </Button>
        </Link>
      </div>

    </div>
  );
}

export default Detalhes;
