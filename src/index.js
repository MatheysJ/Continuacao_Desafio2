import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DadosProvider } from "./common/context/Dados";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <DadosProvider>
            <App />
        </DadosProvider>
  </React.StrictMode>
);
