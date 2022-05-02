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
import { UsuarioContext } from "../../common/context/Usuario";
import { DadosContext } from "../../common/context/Dados";

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
        className="form_home"
        onSubmit={(event) => {
          event.preventDefault();
          Buscar(usuario, setDados)
          navigate("/detalhes-usuario")
        }}
      >
        <div className="container">
          <TextField
            required
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
                    navigate("/detalhes-usuario")
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
            color="primary"
            onClick={() => {
              Buscar(usuario, setDados)
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
