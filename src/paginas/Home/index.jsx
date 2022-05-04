import React, { useContext } from "react";
import { Typography } from "@mui/material";
import "./style.css";
import "@fontsource/roboto/500.css";
import { InvalidUser, UserInfo } from "../../components/User";
import SearchBar from "../../components/SearchBar/SearchBar";

import { UsuarioContext } from "../../common/context/Usuario";
import { DadosContext } from "../../common/context/Dados";

function Home() {
  const { usuario} = useContext(UsuarioContext);
  const { dados } = useContext(DadosContext);

  function DisplayInfo () {
    console.log(dados)
    if (dados === "Inválido"){
      return(
        <InvalidUser />
      );

    } else if (dados === ""){
      return(
        <></>
      );
    }
    return(
      <UserInfo />
    );    
  }

  return (
    <div className="main">
      {/* <Typography variant="h3" align="center" className="titulo">
        Pesquise um usuário do GitHub
      </Typography> */}
        <div className="container">

          <SearchBar usuario={usuario} />

          <DisplayInfo />
          
        </div>
      
    </div>
  );
}

export default Home;
