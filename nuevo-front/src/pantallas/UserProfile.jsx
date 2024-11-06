import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Estilos/UserProfile.css';

const UserProfile = () => {
    const navigate = useNavigate();
    
    // Estado para almacenar los datos del usuario
    const [userData, setUserData] = useState({
        nombre: "",
        email: "",
        contraseña: "",
        calle: "",
        ciudad: "",
        codigoPostal: ""
    });

    // Llama al backend para obtener los datos del usuario cuando se monta el componente
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/usuarios/perfil');
                setUserData(response.data);
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
            }
        };
        
        fetchUserData();
    }, []);

    return (
        <div className="div-user">
            <h2>Perfil de Usuario</h2>
            <div className="main-div-info">
                <div className="div-info">
                    <strong>Nombre:</strong>
                    <p>{userData.nombre}</p>
                </div>
                <div className="div-info">
                    <strong>Email:</strong>
                    <p>{userData.email}</p>
                </div>
                <div className="div-info">
                    <strong>Contraseña:</strong>
                    <p>{userData.contraseña}</p>
                </div>
                <div className="div-info">
                    <strong>Calle:</strong>
                    <p>{userData.calle}</p>
                </div>
                <div className="div-info">
                    <strong>Ciudad:</strong>
                    <p>{userData.ciudad}</p>
                </div>
                <div className="div-info">
                    <strong>Código Postal:</strong>
                    <p>{userData.codigoPostal}</p>
                </div>
            </div>
              
            <div className="div-buttons">
                <button className="button-user" onClick={() => navigate('/inicio')}>Volver al Menú Principal</button>
                <button className="button-user" onClick={() => navigate('/registro')}>Modificar Datos</button>
            </div>
        </div>
    );
};

export default UserProfile;
