import React, { useContext } from 'react';
import {
    IconButton,
    InputAdornment,
    TextField,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
import { Buscar } from "../../API";
import './style.css';

import { UsuarioContext } from "../../common/context/Usuario";
import { DadosContext } from "../../common/context/Dados";

function SearchBar() {
    const { usuario, setUsuario } = useContext(UsuarioContext);
    const { setDados } = useContext(DadosContext);
    return(

      <form 
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          Buscar(usuario, setDados)
        }}
      >

        <TextField
            value={usuario}
            onChange={(event) => {
              setUsuario(event.target.value);
            }}
            id="standard-basic"
            label="Pesquise um usuário"
            variant="outlined"
            margin="none"
            className="search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => {
                    Buscar(usuario, setDados)
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
