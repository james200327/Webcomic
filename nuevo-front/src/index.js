import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import InicioSesion from './pantallas/InicioSesion';
//import PagInicio from './pantallas/PagInicio';
import PagUsuario from './pantallas/PagUsuario';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <PagUsuario/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
