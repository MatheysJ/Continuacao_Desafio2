import React, { useContext, useState } from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import "./style.css";
import { useNavigate } from "react-router-dom";
import "@fontsource/roboto/500.css";
import SearchIcon from "@mui/icons-material/Search";
import { Buscar } from "../../API";
import { UsuarioContext } from "../../components/common/context/Usuario";
import { DadosContext } from "../../components/common/context/Dados";

function Home() {
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const { dados, setDados } = useContext(DadosContext);
  const navigate = useNavigate(); //Deixou se ser useHisory ;-;

  return (
    <div>
      <Typography variant="h3" align="center" className="titulo">
        Pesquise um usuário do GitHub
      </Typography>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="container">
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
                    console.log(dados)
                    }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="inherit"
            onClick={() => {
              navigate("/detalhes-usuario")
            }}
          >
            Pesquisar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Home;
