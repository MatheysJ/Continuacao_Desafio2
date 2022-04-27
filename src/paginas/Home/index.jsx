import React, { useState } from "react";
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

function Home() {
  const [usuario, setUsuario] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h2" align="center">
        Home
      </Typography>

      <form>
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
                  <IconButton>
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
            onClick={() => navigate("/detalhes-usuario")}
          >
            Pesquisar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Home;
