import { Avatar, Typography } from "@mui/material";
import React, { useContext } from "react";
import "./style.css";
import { DadosContext } from '../../common/context/Dados';

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Link } from "react-router-dom";

function RepsStarred() {

  const { dados, reposFav } = useContext(DadosContext);

  if (reposFav.length !== 0) {
    return (
      <>
        <div className="reps-fav_titulo">
          <div className="reps-fav_indicador">
            <h3>Repositórios favoritos</h3>
          </div>
          <Link to={"/detalhes-usuario"} className="reps-fav_usuario">
            <h3 className="reps-fav_usuario-nome">{dados.name}</h3>
            <Avatar
              className="reps-fav_usuario-avatar"
              alt="Avatar de usuário"
              src={dados.avatar_url}
              sx={{ width: 50, height: 50 }}
            />
          </Link>
        </div>

        <ul className="bloco_repositorio">
          {reposFav.map((repositorio) => {
            return (
              <li className="li_repositorio" key={repositorio.id}>
                <a
                  className="item_repositorio"
                  href={`https://github.com/${repositorio.owner.login}/${repositorio.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="lista_repositorio">
                    <div className="divisor_item_repositorio_start">
                      <span className="nome_repositorio">
                        {repositorio.name}
                      </span>
                    </div>

                    <div className="divisor_item_repositorio_center">
                      <div
                        className="owner_repositorio"
                      >
                        {repositorio.owner.login}
                      </div>
                    </div>

                    <div className="divisor_item_repositorio_end">
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
                    <div className="divisor_item_repositorio_start">
                      <span>{repositorio.language}</span>
                    </div>

                    <div className="divisor_item_repositorio_end">
                      <span className="star_repositorio">
                        <StarOutlineIcon />
                        {repositorio.stargazers_count}
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    return (
      <div className="nenhum_fav">
        <div className="nenhum_fav-titulo">          
          <h2>O usuário informado não possui nenhum repositório favorito</h2>
        </div>
        <div className="nenhum_fav-star">          
          <StarBorderOutlinedIcon
            className="empty_star"
            fontSize="small"
            color="disabled"
            sx={{ width: 250, height: 250 }}
          />
        </div>
      </div>
    );
  }
}

export default RepsStarred;
