import React from "react";
import { Container, FormControl, TextField } from "@mui/material";
import { Main } from "./style";

function Home() {
  return (
    <Main>
      <h1>Home</h1>
      <FormControl>
        <TextField
            id="standard-basic"
            label="Pesquise um usuário"
            variant="outlined"
            margin="none"
        />
      </FormControl>
    </Main>
  );
}

export default Home;
