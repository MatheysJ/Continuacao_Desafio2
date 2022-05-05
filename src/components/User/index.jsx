import { Avatar, Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BuscarRepos } from "../../API";
import { DadosContext } from "../../common/context/Dados";
import { ReposContext } from "../../common/context/Repos";
import { UsuarioContext } from "../../common/context/Usuario";
/* import { UsuarioContext } from '../../common/context/Usuario'; */
import "./style.css";

export function UserInfo() {
  const navigate = useNavigate();

  const { usuario } = useContext(UsuarioContext);
  const { dados } = useContext(DadosContext);
  const { setRepos } = useContext(ReposContext);

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
        <Avatar
          className="imagem_detalhes"
          alt="Avatar de usuário"
          src="https://spng.pngfind.com/pngs/s/165-1651991_shrug-emoticons-hd-png-download.png"
          sx={{ width: 180, height: 180 }}
        />
      </div>
      <div>
        <span>O usuário não foi encontrado</span>
      </div>
    </div>
  );
}
