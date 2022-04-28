import { TextField, IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import "./style.css";

import "@fontsource/roboto/500.css";
import SearchIcon from "@mui/icons-material/Search";

import { Buscar } from "../../API";

import { useLocation, Link } from "react-router-dom";

function HeaderPesquisa() {
  const [usuario, setUsuario] = useState("");
  const location = useLocation();

  return (
    <nav>
      <Link to="/">
        <h1>Desafio 2</h1>
      </Link>

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
              <IconButton
                onClick={() => {
                  Buscar(usuario);
                  console.log(location.pathname);
                }}
              >
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

function HeaderHome() {
    return (
      <nav>
        <Link to="/">
          <h1>Desafio 2</h1>
        </Link>

        <h1>React APIs</h1>
      </nav>
    );
}

export function HeaderLocation() {
  const location = useLocation();
  if (location.pathname === "/") {
    return <HeaderHome />;
  }
  return <HeaderPesquisa />;
}
