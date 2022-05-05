import React, { useEffect } from "react";
import "./style.css";
import Infos from "../../components/Infos";

function Detalhes() {

  useEffect(() => {
    window.scroll(0, 0)
  }, []);

  return (
    <div className="bloco">
        <Infos />
    </div>
  );
}

export default Detalhes;
