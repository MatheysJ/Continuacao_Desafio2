import React, { useContext, useEffect } from 'react';
import {
    IconButton,
    InputAdornment,
    TextField,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
import { Buscar, BuscarRepos, BuscarReposFav } from "../../API";
import './style.css';

import { UsuarioContext } from "../../common/context/Usuario";
import { DadosContext } from "../../common/context/Dados";
import { ReposContext } from '../../common/context/Repos';
import { ReposFavContext } from '../../common/context/ReposFav';
import { useLocation } from 'react-router-dom';

function SearchBar() {

    const location = useLocation();



    const { usuario, setUsuario } = useContext(UsuarioContext);
    const { setDados } = useContext(DadosContext);
    const { setRepos } = useContext(ReposContext);
    const { setReposFav } = useContext(ReposFavContext);

    /* useEffect(() => {
      const delay = setTimeout(() => {
        location.pathname === "/" && Buscar(usuario, setDados)
        location.pathname === "/detalhes-usuario" && BuscarRepos(usuario, setRepos)
        location.pathname === "/repositorios-favoritos" && BuscarReposFav(usuario, setReposFav)
      }, 2000);
      return () => clearTimeout(delay);
    }, [usuario]);   */

    return(

      <form 
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          location.pathname === "/" && Buscar(usuario, setDados)
          location.pathname === "/detalhes-usuario" && BuscarRepos(usuario, setRepos) && Buscar(usuario, setDados)
          location.pathname === "/repositorios-favoritos" && BuscarReposFav(usuario, setReposFav)
        }}
      >

        <TextField
            value={usuario}
            onChange={(event) => {
              setUsuario(event.target.value);
            }}
            id="standard-basic"
            label={(location.pathname === "/" ? "Pesquise um usuário" : undefined)}
            /* inputProps={inputProps} */
            variant="outlined"
            margin="none"
            className="search"
            InputProps={{
              /* label: "Pesquise um usuário", */
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => {
                    location.pathname === "/" && Buscar(usuario, setDados)
                    location.pathname === "/detalhes-usuario" && BuscarRepos(usuario, setRepos)
                    location.pathname === "/repositorios-favoritos" && BuscarReposFav(usuario, setReposFav)
                    }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
      </form>
    );
}

export default SearchBar;
