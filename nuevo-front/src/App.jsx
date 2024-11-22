
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistroUsuario from "./pantallas/RegistroUsuario";
import InicioSesion from "./pantallas/InicioSesion";
import MainPage from './pantallas/MainPage';
import PointsPage from './pantallas/PointsPage';
import ProductDetail from './pantallas/ProductDetailPage';
import UserProfile from './pantallas/UserProfile';
import TramitarPedido from './pantallas/TramitarPedido';


function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion/>}/>
        <Route path="/registro" element={<RegistroUsuario/>}/>
        <Route path="/inicio" element={<MainPage/>}/>
        <Route path='/pagPuntos' element={<PointsPage/>}/>
        <Route  path='/product/:productId' element={<ProductDetail/>}/>
        <Route  path='/misDatos' element={<UserProfile/>}/>
        <Route path='/tramitarPedido' element={<TramitarPedido/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
