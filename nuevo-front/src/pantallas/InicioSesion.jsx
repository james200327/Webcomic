import { useState } from "react";
import React from 'react';
import '../Estilos/inicioSesion.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Imagenes/logo.png';

const InicioSesion = () => {

  const [datos, setDatos] = useState({
    nombre: "",
    password: ""
  });

  const [mensaje, setMensaje] = useState("");

  const redirect = useNavigate();

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  }

  const manejarInicioSesion = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/usuarios/login', {
        username: datos.nombre,
        password: datos.password
      });

      // Si el inicio de sesión es exitoso, redirige a la página principal
      redirect('/inicio');  // Redirige a la página principal

    } catch (error) {
      if (error.response && error.response.data) {
        setMensaje(error.response.data.message); // Mensaje desde el backend
      } else {
        setMensaje('Error al iniciar sesión');
      }
    }


  };
  const irAlRegistro = () => {
    redirect("/registro");
  }

  return (
    <form className="fm-section" onSubmit={manejarInicioSesion}>
      <div className="fm-logo">
        <img src={logo} alt="Logo de la empresa" />
      </div>

      <h1 className="fm-h1">Inicio Sesion</h1>

      {mensaje && <p className="error-message">{mensaje}</p>}

      <div className="fm-div-info">
        <label htmlFor="name" className="fm-label">Nombre</label>
        <input type="text" name="nombre" placeholder="Nombre" className="fm-input" value={datos.nombre} onChange={manejarCambio} required />
        <label htmlFor="password" className="fm-label">Contraseña*</label>
        <input type="password" name="password" placeholder="Contraseña" className="fm-input" value={datos.password} onChange={manejarCambio} required />

      </div>

      <button type="submit" className="fm-button">Iniciar Sesion</button>

      <div className="fm-divider">
        <hr className="fm-line" />
        <span className="fm-divider-text">O bien</span>
        <hr className="fm-line" />
      </div>

      <button className="fm-button" onClick={irAlRegistro}>Registrarse</button>

    </form>
  );
}

export default InicioSesion;