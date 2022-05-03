import React, { useContext } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import "./style.css";
import "@fontsource/roboto/500.css";
import SearchIcon from "@mui/icons-material/Search";
import { Buscar } from "../../API";
import { UsuarioContext } from "../../common/context/Usuario";
import { DadosContext } from "../../common/context/Dados";
import { InvalidUser, UserInfo } from "../../components/User";

function Home() {
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const { dados, setDados } = useContext(DadosContext);

  function DisplayInfo () {
    if (dados !== "" && dados !== "Inválido"){
      console.log(dados)
      return(
        <UserInfo />
      );
    } else {
      return(
        <InvalidUser />
      );
    }
    
  }

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
                    }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        
        <DisplayInfo />

      </form>
      
    </div>
  );
}

export default Home;
