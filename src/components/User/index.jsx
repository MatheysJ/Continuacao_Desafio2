import { Avatar, Button } from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BuscarRepos } from "../../API";
import { DadosContext } from "../../common/context/Dados";

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import "./style.css";

export function UserInfo() {
  const navigate = useNavigate();

  const { dados, usuario, setRepos, loading, setLoading = true } = useContext(DadosContext);

  if (!loading) {
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
              variant="outlined"
              color="inherit"
              onClick={() => {
                /* navigate("/detalhes-usuario");
                BuscarRepos(usuario, setRepos, setLoading) */
                setLoading(!loading)
              }}
            >
              Pesquisar
            </Button>
          </div>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="display_info_user">
        <div className="box_avatar">
          <div className="imagem-detalhes pesquisando-user" alt="Carregando usuário"></div>
        </div>
        <div className="box_name_button">
            <div className="name_box-carregando name-box">
            </div>
            <div className="button_box">
              <div              
                onClick={ () => {
                  setLoading(!loading)
                } }
                className="button-carregando"              
              >
                
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export function InvalidUser() {
  return (
    <div className="display_info_user">
      <div className="box_avatar">
        <QuestionMarkIcon 
        className="not_found"
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
