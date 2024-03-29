import React, { useContext, useEffect, useState } from 'react';
import {
    IconButton,
    InputAdornment,
    TextField,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
import { Buscar, BuscarRepos, BuscarReposFav } from "../../API";
import './style.css';

import { DadosContext } from "../../common/context/Dados";
import { useLocation } from 'react-router-dom';

function SearchBar() {

    const location = useLocation();

    const { setDados, usuario, setUsuario, setRepos, setReposFav, setLoading } = useContext(DadosContext);

    const searchRegex = new RegExp(/[ `!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/);

    return(

      <form 
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          (!searchRegex.test(usuario)) &&
            (location.pathname === "/") ? 
              Buscar(usuario, setDados, setLoading) :
            (location.pathname === "/detalhes-usuario") ?
             BuscarRepos(usuario, setRepos) && Buscar(usuario, setDados) :
            (location.pathname === "/repositorios-favoritos") &&
             BuscarReposFav(usuario, setReposFav)

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
                    (!searchRegex.test(usuario)) &&
                      (location.pathname === "/") ? 
                        Buscar(usuario, setDados, setLoading) :
                      (location.pathname === "/detalhes-usuario") ?
                      BuscarRepos(usuario, setRepos) && Buscar(usuario, setDados, setLoading) :
                      (location.pathname === "/repositorios-favoritos") &&
                      BuscarReposFav(usuario, setReposFav)

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
