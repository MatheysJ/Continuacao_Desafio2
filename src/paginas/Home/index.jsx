import React, { useState } from "react";
import { Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import "./style.css";
import '@fontsource/roboto/500.css';
import SearchIcon from '@mui/icons-material/Search';

function Home(onSubmit) {
  const [usuario, setUsuario] = useState("");

  return (
    <div>
      <Typography variant="h2" align="center">Home</Typography>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit({ usuario });
        }}
      >
        <div className="container">
          <TextField
            value={usuario}
            onChange={(event) => {
              setUsuario(event.target.value);
              console.log(usuario);
            }}
            id="standard-basic"
            label="Pesquise um usuário"
            variant="outlined"
            margin="none"
            className="search"

            InputProps={{endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )}}
            
          />
          
          <Button type="submit" variant="contained" color="inherit">
            Pesquisar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Home;
