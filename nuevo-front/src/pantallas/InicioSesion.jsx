import { useState } from "react";
import React from 'react';
import '../Estilos/inicioSesion.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Imagenes/logo.png';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal);
<<<<<<< HEAD
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7

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

<<<<<<< HEAD
<<<<<<< HEAD
      const role = response.data;  // Aquí recibes directamente "ADMIN" o "USER"
      console.log(role);
    if (role === "ADMIN") {
        localStorage.setItem("role", role);
        alert("Inicio de sesión exitoso como administrador");
        // Redirigir al administrador a la página con el formulario de agregar cómics
    } else if (role === "USER") {
        localStorage.setItem("role", role);
        alert("Inicio de sesión exitoso como usuario");
        // Redirigir al usuario a la página de visualización sin el formulario
    }
      // Si el inicio de sesión es exitoso, redirige a la página principal
=======
=======
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
      const { role, userId } = response.data;

      // Guardar role y userId en localStorage
      localStorage.setItem("role", role);
      localStorage.setItem("userId", userId);
      // Mostrar un SweetAlert en función del rol del usuario

      
      if (role === "ADMIN") {
          MySwal.fire({
              title: 'Inicio de sesión exitoso',
              text: 'Inicio de sesión como administrador',
              icon: 'success',
              confirmButtonText: 'Continuar'
          });
      } else if (role === "USER") {
          MySwal.fire({
              title: 'Inicio de sesión exitoso',
              text: 'Inicio de sesión como usuario',
              icon: 'success',
              confirmButtonText: 'Continuar'
          });
      }
  
     
<<<<<<< HEAD
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
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