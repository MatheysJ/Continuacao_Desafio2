import React, { useContext, useEffect } from "react";
import "./style.css";
import "@fontsource/roboto/500.css";
import { InvalidUser, UserInfo } from "../../components/User";
import SearchBar from "../../components/SearchBar/SearchBar";

import { DadosContext } from "../../common/context/Dados";

function Home() {
  const { dados } = useContext(DadosContext);

  useEffect(() => {
    window.scroll(0, 0)
  }, []);

  function DisplayInfo () {
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

          <SearchBar />

          <DisplayInfo />
          
        </div>
      
    </div>
  );
}

export default Home;
