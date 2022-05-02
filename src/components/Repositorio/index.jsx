import { Avatar, Typography } from "@mui/material";
import React from "react";
import "./style.css";

/* import Star from "@mui/icons-material/Star"; */
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

function Repositorio({ repos }) {
  
  console.log(repos)

  if(repos.length !== 0){
    return (
      <>
        <div className='reps_fav__container'>
          <Typography variant="h5" align="center">Estes são os repositórios favoritos do usuário</Typography>
        </div>
  
        <ul className="bloco_repositorio">
          {repos.map((repositorio) => {
            return (
              <li className="li_repositorio" key={repositorio.id}>
                <a className="item_repositorio" href={`https://github.com/${repositorio.owner.login}/${repositorio.name}`} target="_blank">
                  <div className="lista_repositorio">
  
                    <div className="item_repositorio_nome">
                      <span className="nome_repositorio">{repositorio.name}</span>
                    </div>
                    
                    <div className="item_repositorio_owner">
                      <a className="owner_repositorio" href={`https://github.com/${repositorio.owner.login}`} target="_blank">{repositorio.owner.login}</a>
                    </div>
  
                    <div className="item_repositorio_avatar">
                      <span className="avatar_repositorio">
                        <Avatar
                          className="borda_avatar_repositorio"
                          alt="Avatar de usuário"
                          src={repositorio.owner.avatar_url}
                          sx={{ width: 25, height: 25 }}
                        />
                      </span>
                    </div>
  
                  </div>
  
                  <div className="dados_lista_repositorio">
                    <span>{repositorio.language}</span>
                    <span className="star_repositorio">
                      <StarOutlineIcon />
                      {repositorio.stargazers_count}
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  else{
    return(
      <div className='nenhum_fav'>
          <Typography variant="h5" align="center">O usuário informado não possui nenhum repositório favorito</Typography>
          <StarBorderOutlinedIcon className="empty_star" fontSize="small" color="disabled" sx={{ width: 250, height: 250 }} />
      </div>
    );
  }
}

export default Repositorio;
