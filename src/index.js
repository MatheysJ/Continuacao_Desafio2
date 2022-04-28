import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UsuarioProvider } from "./components/common/context/Usuario";
import { DadosProvider } from "./components/common/context/Dados";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UsuarioProvider>
      <DadosProvider>
        <App />
      </DadosProvider>
    </UsuarioProvider>
  </React.StrictMode>
);
