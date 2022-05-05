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

/* function SearchFor(){
  const location = useLocation();

  //Ignora isso aqui pfv que eu ainda não arrumei o monte de contextos ksksks
  const { usuario } = useContext(UsuarioContext);
  const { setDados } = useContext(DadosContext);
  const { setRepos } = useContext(ReposContext);
  const { setReposFav } = useContext(ReposFavContext);

  if (location.pathname === "/"){
    Buscar(usuario, setDados);
    console.log(`Estamos na home`)
  } else if (location.pathname === "/detalhes-usuario"){ 
    Buscar(usuario, setDados);
    BuscarRepos(usuario, setRepos);
    console.log(`Detalhes`)
  } else if (location.pathname === "/repositorios-favoritos"){
    BuscarReposFav(usuario, setReposFav);
    console.log(`Estamos na Repositorios favoritos`)
  }
} */

/* export function ondeEstamos(){
  if (location.pathname === "/"){
    OqueBuscar(Buscar, usuario, setDados);
    console.log(`Home`)
  } else if (location.pathname === "/detalhes-usuario"){ 
    OqueBuscar(BuscarRepos, usuario, setRepos);
    console.log(`Detalhes`)
  } else if (location.pathname === "/repositorios-favoritos"){
    OqueBuscar(BuscarReposFav, usuario, setReposFav);
    console.log(`Repositorios favoritos`)
  }
}

export function OqueBuscar(aAPI, user, setOque) {
  aAPI(user, setOque);
} */

function SearchBar() {

    const location = useLocation();



    const { usuario, setUsuario } = useContext(UsuarioContext);
    const { setDados } = useContext(DadosContext);
    const { setRepos } = useContext(ReposContext);
    const { setReposFav } = useContext(ReposFavContext);

    useEffect(() => {
      const delay = setTimeout(() => {
        Buscar(usuario, setDados);
        BuscarRepos(usuario, setRepos);
        BuscarReposFav(usuario, setReposFav);
      }, 2000);
      return () => clearTimeout(delay);
    }, [usuario]);  

    return(

      <form 
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          Buscar(usuario, setDados);
          BuscarRepos(usuario, setRepos);
          BuscarReposFav(usuario, setReposFav);
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
                    Buscar(usuario, setDados);
                    BuscarRepos(usuario, setRepos);
                    BuscarReposFav(usuario, setReposFav);
                    //Não posso chamar Hooks condicionalmente, então, por mais que não seja muito prático/eficiênte, esse foi o
                    //jeito que eu achei de chamar a API com um componente de SearchBar sendo compartilhado entre as 3 páginas.
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
