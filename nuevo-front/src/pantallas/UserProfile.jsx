import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Estilos/UserProfile.css';

const UserProfile = () => {
    const navigate = useNavigate();

    // Estado para almacenar los datos del usuario
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        contrasenia: "",
        calle: "",
        codigoPostal: "",
        ciudad: ""
    });

    // Estado para saber si estamos editando o no
    const [isEditing, setIsEditing] = useState(false);
    const [comics, setComics] = useState([]);

    // Llama al backend para obtener los datos del usuario cuando se monta el componente
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/usuarios/${localStorage.getItem('userId')}`);
                const user = response.data;  // Asegúrate de que 'usuario' es la propiedad correcta en la respuesta

                // Actualizar el estado con los datos del usuario y la dirección
                setUserData({
                    username: user.username,  // Nombre del usuario
                    email: user.email,    // Email del usuario
                    contrasenia: user.password,  // Contraseña del usuario (si la necesitas mostrar)
                    calle: user.direccion.calle,  // Calle de la dirección
                    ciudad: user.direccion.ciudad,  // Ciudad de la dirección
                    codigoPostal: user.direccion.codigoPostal  // Código postal de la dirección
                });
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
            }
        };

        const fetchListaComics = async () => {
            try {
                const listaComics = await axios.get(`http://localhost:8080/api/pedidos/usuario/${localStorage.getItem('userId')}/confirmados`)
                setComics(listaComics.data)

            } catch (error) {
                console.error('Error al obtener el listado de comics:', error);
            }
        }

        fetchUserData();
        fetchListaComics();
    }, []);
    console.log(comics)
    // Maneja el cambio de valores en los inputs del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Enviar los datos modificados al backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://localhost:8080/api/usuarios/perfil', userData);
            setIsEditing(false); // Termina la edición después de enviar los datos
            alert('Datos actualizados correctamente');
        } catch (error) {
            console.error('Error al actualizar los datos del usuario:', error);
        }
    };

    return (
        <div className="div-user">
            <h2>Perfil de Usuario</h2>

            {isEditing ? (
                <form onSubmit={handleSubmit} className="form-edit">
                    <div className="div-info">
                        <strong>Nombre:</strong>
                        <input
                            type="text"
                            name="nombre"
                            value={userData.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="div-info">
                        <strong>Email:</strong>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="div-info">
                        <strong>Contraseña:</strong>
                        <input
                            type="password"
                            name="contraseña"
                            value={userData.contraseña}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="div-info">
                        <strong>Calle:</strong>
                        <input
                            type="text"
                            name="calle"
                            value={userData.calle}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="div-info">
                        <strong>Ciudad:</strong>
                        <input
                            type="text"
                            name="ciudad"
                            value={userData.ciudad}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="div-info">
                        <strong>Código Postal:</strong>
                        <input
                            type="text"
                            name="codigoPostal"
                            value={userData.codigoPostal}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="button-user">Guardar Cambios</button>
                    <button type="button" className="button-user" onClick={() => setIsEditing(false)}>Cancelar</button>
                </form>
            ) : (
                <div className="main-div-info">
                    <div className="div-info">
                        <strong>Nombre:</strong>
                        <p>{userData.username}</p>
                    </div>
                    <div className="div-info">
                        <strong>Email:</strong>
                        <p>{userData.email}</p>
                    </div>
                    <div className="div-info">
                        <strong>Contraseña:</strong>
                        <p>{userData.contrasenia}</p>
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
            )}

            <div className="div-buttons">
                <button className="button-user" onClick={() => navigate('/inicio')}>Volver al Menú Principal</button>
                <button className="button-user" onClick={() => setIsEditing(true)}>Modificar Datos</button>
            </div>


            <div className="userprofile-pedidos">
                <h2>Mis pedidos</h2>
                {comics.length > 0 ? (
                    <div className="pedidos-items">
                        {comics.map((pedido) => (
                            /*Div donde se muestra el pedido id y el precio total del pedido*/
                            <div key={pedido.id} className="pedido-card">
                                <h3>Pedido ID: {pedido.id}</h3>
                                <p><strong>Precio Total:</strong> {pedido.total} puntos</p>
                                {/*Div que contiene las imagenes de los comics,titulo,cantindad de cada comic, precio que ha comoprado en este este pedido*/}
                                <div className="pedido-comics">
                                    {pedido.items.map((item) =>(
                                        <><img src={`http://localhost:8080${item.comic.imagenUrl}`} alt={item.comic.titulo} />
                                        <p><strong>{item.comic.titulo}</strong></p>
                                        <p>Cantidad: {item.cantidad}</p>
                                        <p>Subtotal: {item.cantidad * item.comic.precio} puntos</p></>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No tienes pedidos confirmados aún.</p> // Muestra un mensaje si no hay pedidos
                )}
            </div>

        </div>
    );
};

export default UserProfile;
