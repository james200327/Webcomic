import React, { useState } from 'react';
import axios from 'axios';
import '../Estilos/ModifyComicPage.css';

function ModifyComicPage({ comic, onClose, onProductModified }) {
    // Inicializa el estado con los valores actuales del cómic
    const [formData, setFormData] = useState({
        titulo: comic.titulo,
        autor: comic.autor,
        genero: comic.genero,
        precio: comic.precio,
        stock: comic.stock,
        descripcion: comic.descripcion,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/comics/modificar/${id}`, updatedComicData);
            
            // Actualizar el estado de comics con el cómic modificado
            setComic(comic.map(c => c.id === id ? { ...c, ...updatedComicData } : c));
        } catch (error) {
            console.error('Error al modificar el cómic:', error);
            alert("Ocurrio un error")
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Modificar Cómic</h2>
                <form onSubmit={handleSaveChanges}>
                    <label>Título:</label>
                    <input
                        type="text"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleInputChange}
                    />
                    <label>Autor:</label>
                    <input
                        type="text"
                        name="autor"
                        value={formData.autor}
                        onChange={handleInputChange}
                    />
                    <label>Género:</label>
                    <input
                        type="text"
                        name="genero"
                        value={formData.genero}
                        onChange={handleInputChange}
                    />
                    <label>Precio:</label>
                    <input
                        type="number"
                        name="precio"
                        value={formData.precio}
                        onChange={handleInputChange}
                    />
                    <label>Stock:</label>
                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleInputChange}
                    />
                    <label>Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleInputChange}
                    />
                    <div className="modal-buttons">
                        <button type="submit" className="save-button">Guardar Cambios</button>
                        <button type="button" className="cancel-button" onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModifyComicPage;
