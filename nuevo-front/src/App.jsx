<<<<<<< HEAD
//import logo from './logo.svg';
//import './App.css';
=======

>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistroUsuario from "./pantallas/RegistroUsuario";
import InicioSesion from "./pantallas/InicioSesion";
import MainPage from './pantallas/MainPage';
import PointsPage from './pantallas/PointsPage';
import ProductDetail from './pantallas/ProductDetailPage';
<<<<<<< HEAD
import UserProfile from './pantallas/UserProfile';

function App() {
  return (
=======
import TramitarPedido from './pantallas/TramitarPedido';
import UserProfile from './pantallas/UserProfile';


function App() {
  return (
   
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion/>}/>
        <Route path="/registro" element={<RegistroUsuario/>}/>
        <Route path="/inicio" element={<MainPage/>}/>
        <Route path='/pagPuntos' element={<PointsPage/>}/>
<<<<<<< HEAD
        <Route  path='/product/:productId' element={<ProductDetail/>}/>
        <Route  path='/misDatos' element={<UserProfile/>}/>
      </Routes>
    </Router>
   
=======
        <Route path='/product/:productId' element={<ProductDetail/>}/>
        <Route path='/tramitarPedido' element={<TramitarPedido/>}/>
        <Route path='/UserProfile' element={<UserProfile/>}/>
      </Routes>
    </Router>
    
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
  );
}

export default App;
