import{BrowserRouter,Routes,Route} from "react-router-dom";

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import ContactoPage from './paginas/ContactoPage';
import HomePage from './paginas/HomePage';
import NosotrosPage from './paginas/NosotrosPage';
import NoticiasPage from './paginas/NoticiasPage';
import SePartePage from './paginas/SePartePage';
import ServiciosPage from './paginas/ServiciosPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="nosotros" element={<NosotrosPage/>} />
        <Route path="noticias" element={<NoticiasPage/>} />
        <Route path="servicios" element={<ServiciosPage/>} />
        <Route path="separte" element={<SePartePage/>} />
        <Route path="contacto" element={<ContactoPage/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
