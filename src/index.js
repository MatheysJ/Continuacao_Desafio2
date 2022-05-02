import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UsuarioProvider } from "./common/context/Usuario";
import { DadosProvider } from "./common/context/Dados";
import { ReposProvider } from "./common/context/Repos";
import { ReposFavProvider } from "./common/context/ReposFav";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReposFavProvider>
      <UsuarioProvider>
        <DadosProvider>
          <ReposProvider>
            <App />
          </ReposProvider>
        </DadosProvider>
      </UsuarioProvider>
    </ReposFavProvider>
  </React.StrictMode>
);
