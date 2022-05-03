import { TextField, IconButton, InputAdornment } from "@mui/material";
import React, { useContext, useEffect } from "react";
import "./style.css";

import "@fontsource/roboto/500.css";
import SearchIcon from "@mui/icons-material/Search";

import { Buscar, BuscarRepos, BuscarReposFav } from "../../API";

import { useLocation, Link } from "react-router-dom";
import { UsuarioContext } from "../../common/context/Usuario";
import { DadosContext } from "../../common/context/Dados";
import { ReposContext } from "../../common/context/Repos";
import { ReposFavContext } from "../../common/context/ReposFav";

function HeaderPesquisa() {
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const { setReposFav } = useContext(ReposFavContext);
  const { setRepos } = useContext(ReposContext);
  const { setDados } = useContext(DadosContext);

  /* Esse useEffect serve para que seja realizada uma busca quando o usuário digitar na barra de pesquisa do header e parar por 2
  segundos, com isso, o useEffect executa a busca e define Dados e Repositórios sem a necessidade de clicar no botão */
  useEffect(() => {
    const delay = setTimeout(() => {
      Buscar(usuario, setDados);
      BuscarRepos(usuario, setRepos);
    }, 2000);
    return () => clearTimeout(delay);
  }, [usuario]);

  return (
    <>
      <nav>
        <Link to="/">
          <h1>Buscar</h1>
        </Link>

        <form
          className="form_header"
          onSubmit={(event) => {
            event.preventDefault();
            Buscar(usuario, setDados);
            BuscarRepos(usuario, setRepos);
            BuscarReposFav(usuario, setReposFav);
          }}
        >
          <TextField
            color="secondary"
            value={usuario}
            onChange={(event) => {
              setUsuario(event.target.value);
            }}
            id="standard-basic"
            variant="outlined"
            margin="none"
            className="search_header"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      Buscar(usuario, setDados);
                      BuscarRepos(usuario, setRepos);
                      BuscarReposFav(usuario, setReposFav);
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>

        <h1>GIT API</h1>
      </nav>
      <div className="barrinha" />
    </>
  );
}

function HeaderHome() {
  return (
    <>
    <nav>
      <Link to="/">
        <h1>Desafio 2</h1>
      </Link>

      <h1>React APIs</h1>
    </nav>
    <div className="barrinha_nav" />
    </>
  );
}

export function HeaderLocation() {
  const location = useLocation();
  if (location.pathname === "/") {
    return <HeaderHome />;
  }
  return <HeaderPesquisa />;
}
