import { Avatar, Button } from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BuscarRepos } from "../../API";
import { DadosContext } from "../../common/context/Dados";

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import "./style.css";

export function UserInfo() {
  const navigate = useNavigate();

  const { dados, usuario, setRepos } = useContext(DadosContext);

  return (
    <div className="display_info_user">
      <div className="box_avatar">
        <Avatar
          className="imagem_detalhes"
          alt="Avatar de usuário"
          src={dados.avatar_url}
          sx={{ width: 180, height: 180 }}
        />
      </div>
      <div className="box_name_button">
        <div className="name_box">
          <span>{dados.name}</span>
        </div>
        <div className="button_box">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/detalhes-usuario");
              BuscarRepos(usuario, setRepos)
            }}
          >
            Pesquisar
          </Button>
        </div>
      </div>
    </div>
  );
}

export function InvalidUser() {
  return (
    <div className="display_info_user">
      <div className="box_avatar">
        <QuestionMarkIcon 
        className="imagem_detalhes not_found"
        alt="Nenhum usuário com esse login foi encontrado"
        sx={{ width: 180, height: 180 }}
        />
      </div>
      <div className="box_name_button">
        <div className="name_box">
          <span>O usuário não foi encontrado</span>
        </div>
      </div>
    </div>
  );
}
