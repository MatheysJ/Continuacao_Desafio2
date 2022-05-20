import React from "react";
import "./style.css";
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <>
        <div className="Rodape">
            <h2 className="footer_text">Pesquisa de usuário do GitHub</h2>
            <a href="https://github.com" className="footer_git-icon"><GitHubIcon sx={{width:40, height:40}}/></a>
        </div>
    </>
  );
}

export default Footer;
