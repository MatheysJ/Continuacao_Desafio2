import React, { useContext, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import "./style.css";
import { Link } from "react-router-dom";
import { Buscar, BuscarRepos } from "../../API";
import { UsuarioContext } from "../../common/context/Usuario";
import { DadosContext } from "../../common/context/Dados";
import { ReposContext } from "../../common/context/Repos";
import Infos from "../../components/Infos";

function Detalhes() {

  useEffect(() => {
    window.scroll(0, 0)
  }, []);

  return (
    <div className="bloco">
        <Infos />
    </div>
  );
}

export default Detalhes;
