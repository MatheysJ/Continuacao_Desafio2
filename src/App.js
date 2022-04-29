import { HeaderLocation } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home/index";
import RepositoriosFav from "./paginas/RepositoriosFav/RepositoriosFav";
import Detalhes from "./paginas/Detalhes/Detalhes";
import Footer from "./components/Footer";
import Pagina404 from "./paginas/Pagina404";

function App() {
  return (
    /* Versão mais recente do Router, algumas diferenças com relação a do curso. */
    /* 
      Parece que o Switch foi trocado por Routes, agora o elemento do Route fica como Prop dele, e o Routes não aceita nada além
    de Route como "filho". Pra setar uma página 404 agora tem que usar path="*". 
    */
      <Router>
        <HeaderLocation />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/detalhes-usuario" element={<Detalhes />} />

          <Route path="/repositorios-favoritos" element={<RepositoriosFav />} />

          <Route path="*" element={<Pagina404 />} />
        </Routes>

        <Footer />
      </Router>
  );
}

export default App;
