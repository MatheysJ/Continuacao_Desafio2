import React, { useContext, useEffect, useState } from "react";
/* import { Buscar } from '../../API'; */
import { Typography } from "@mui/material";
import "./style.css";
import { Link } from "react-router-dom";
import { Buscar } from "../../API";
import { UsuarioContext } from "../../components/common/context/Usuario";
import { DadosContext } from "../../components/common/context/Dados";

function Detalhes() {
  const { usuario } = useContext(UsuarioContext);
  const { dados, setDados } = useContext(DadosContext);

  useEffect(() => {
    Buscar(usuario, setDados);
  }, []);

  return (
    <div className="bloco">
      <Typography variant="h3" align="center" className="titulo">
        Detalhes
      </Typography>

      <ul>
        <li>login: {dados.login}</li>
        <li>Nome: {dados.name}</li>
        <li>id: {dados.id}</li>
        <li>Seguidores: {dados.followers}</li>
        <li>Seguindo: {dados.following}</li>
        <li>Bio: {dados.bio}</li>
        <li>link: {dados.html_url}</li>
      </ul>

      <div className="container">
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
