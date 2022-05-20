import React, { useContext, useEffect } from "react";
import "./style.css";
import "@fontsource/roboto/500.css";
import { InvalidUser, UserInfo } from "../../components/User";
import SearchBar from "../../components/SearchBar/SearchBar";
import GitHubIcon from '@mui/icons-material/GitHub';

import { DadosContext } from "../../common/context/Dados";

function Home() {
  const { dados, loading } = useContext(DadosContext);

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
    
        <div className="container">

          <SearchBar />

          <DisplayInfo />
          
        </div>

        <div className="info-site">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="box_icon-git">            
            <GitHubIcon 
            className="icon-git"
            sx={{ width: 180, height: 180 }}
            />
          </a>
          <div className="box_texto-git">          
            <h2 className="texto-git">Pesquise um usuário do GitHub e acesse suas informações e repositórios</h2>
          </div>
        </div>
      
    </div>
  );
}

export default Home;
