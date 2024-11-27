<<<<<<< HEAD
<<<<<<< HEAD
//import logo from './logo.svg';
//import './App.css';
=======

>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======

>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistroUsuario from "./pantallas/RegistroUsuario";
import InicioSesion from "./pantallas/InicioSesion";
import MainPage from './pantallas/MainPage';
import PointsPage from './pantallas/PointsPage';
import ProductDetail from './pantallas/ProductDetailPage';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import TramitarPedido from './pantallas/TramitarPedido';
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
import UserProfile from './pantallas/UserProfile';


function App() {
  return (
<<<<<<< HEAD
=======
import TramitarPedido from './pantallas/TramitarPedido';
import UserProfile from './pantallas/UserProfile';


function App() {
  return (
   
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======
   
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion/>}/>
        <Route path="/registro" element={<RegistroUsuario/>}/>
        <Route path="/inicio" element={<MainPage/>}/>
        <Route path='/pagPuntos' element={<PointsPage/>}/>
<<<<<<< HEAD
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
=======
        <Route path='/product/:productId' element={<ProductDetail/>}/>
        <Route path='/tramitarPedido' element={<TramitarPedido/>}/>
        <Route path='/UserProfile' element={<UserProfile/>}/>
      </Routes>
    </Router>
    
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
  );
}

export default App;
