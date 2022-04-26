import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Home from "./paginas/Home";
import RepositoriosFav from "./paginas/RepositoriosFav";
import Detalhes from "./paginas/Detalhes";
import Footer from "./components/Footer";
import Pagina404 from "./paginas/Pagina404";

function App() {
  return (
    <Router>

      <Header />

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
