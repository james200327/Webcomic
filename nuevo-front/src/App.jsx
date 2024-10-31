//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistroUsuario from "./pantallas/RegistroUsuario";
import InicioSesion from "./pantallas/InicioSesion";
import MainPage from './pantallas/MainPage';
import PointsPage from './pantallas/PointsPage';
import ProductDetail from './pantallas/ProductDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion/>}/>
        <Route path="/registro" element={<RegistroUsuario/>}/>
        <Route path="/inicio" element={<MainPage/>}/>
        <Route path='/pagPuntos' element={<PointsPage/>}></Route>
        <Route  path='/product/:id' element={<ProductDetail/>}></Route>
      </Routes>
    </Router>
   
  );
}

export default App;
