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

    const searchRegex = new RegExp(/[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/);

    return(

      <form 
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          /* (!searchRegex.test(usuario)) && (location.pathname === "/" && Buscar(usuario, setDados))
          (!searchRegex.test(usuario)) && (location.pathname === "/detalhes-usuario" && BuscarRepos(usuario, setRepos) && Buscar(usuario, setDados))
          (!searchRegex.test(usuario)) && (location.pathname === "/repositorios-favoritos" && BuscarReposFav(usuario, setReposFav) && BuscarRepos(usuario, setRepos) && Buscar(usuario, setDados)) */

          (!searchRegex.test(usuario)) &&
            (location.pathname === "/") ? 
              Buscar(usuario, setDados) :
            (location.pathname === "/detalhes-usuario") ?
             BuscarRepos(usuario, setRepos) && Buscar(usuario, setDados) :
            (location.pathname === "/repositorios-favoritos") &&
             BuscarReposFav(usuario, setReposFav) && BuscarRepos(usuario, setRepos) && Buscar(usuario, setDados)                        

          /* Por causa de alguns bugs que podem acontecer se o usuário pesquisar um usuário diferente na ReposFav ou Repos, e 
          acabar não atualizando as informações da páginas anteriores, quando for buscar um usuário nas 2 últimas páginas, a 
          página também está buscando o conteúdo das páginas anteriores. */
        }}
      >

        <TextField
            value={usuario}
            onChange={(event) => {
              setUsuario(event.target.value);
            }}
            id="standard-basic"
            label={(location.pathname === "/" ? "Pesquise um usuário" : undefined)}
            variant="outlined"
            margin="none"
            className="search"
            error={(searchRegex.test(usuario))}
            helperText={(searchRegex.test(usuario)) && "Insira apenas caracteres válidos"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => {
                    /* (!searchRegex.test(usuario) && (location.pathname === "/")) && Buscar(usuario, setDados)
                    (!searchRegex.test(usuario) && (location.pathname === "/detalhes-usuario")) && BuscarRepos(usuario, setRepos) && Buscar(usuario, setDados)
                    (!searchRegex.test(usuario) && (location.pathname === "/repositorios-favoritos")) && BuscarReposFav(usuario, setReposFav) && BuscarRepos(usuario, setRepos) && Buscar(usuario, setDados) */
                    
                    (!searchRegex.test(usuario)) &&
                      (location.pathname === "/") ? 
                        Buscar(usuario, setDados) :
                      (location.pathname === "/detalhes-usuario") ?
                      BuscarRepos(usuario, setRepos) && Buscar(usuario, setDados) :
                      (location.pathname === "/repositorios-favoritos") &&
                      BuscarReposFav(usuario, setReposFav) && BuscarRepos(usuario, setRepos) && Buscar(usuario, setDados) 

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
