//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistroUsuario from "./pantallas/RegistroUsuario";
import InicioSesion from "./pantallas/InicioSesion";
import PagInicio from './pantallas/PagInicio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion/>}/>
        <Route path="/registro" element={<RegistroUsuario/>}/>
        <Route path="/inicio" element={<PagInicio/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
