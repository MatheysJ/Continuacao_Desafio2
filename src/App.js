import { HeaderLocation } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home/index";
import RepositoriosFav from "./paginas/RepositoriosFav/RepositoriosFav";
import Detalhes from "./paginas/Detalhes/Detalhes";
import Footer from "./components/Footer";
import Pagina404 from "./paginas/404/Pagina404";

function App() {
  return (
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
