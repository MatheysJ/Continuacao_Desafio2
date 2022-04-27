import { TextField, IconButton, InputAdornment } from '@mui/material';
import React, { useState } from "react";
import './style.css';

import "@fontsource/roboto/500.css";
import SearchIcon from "@mui/icons-material/Search";

import { Buscar } from "../../API";

import { useLocation } from 'react-router-dom';

function Header() {
    const [usuario, setUsuario] = useState("");
    const location = useLocation();

    
    return(
        <nav>
            <h1>Desafio 2</h1>

            {/* Isso só deve ser exibido na 2° e 3° página. */}

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
                  <IconButton onClick={() => Buscar(usuario)}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <h1>React APIs</h1>
        </nav>
    );
}

export default Header;