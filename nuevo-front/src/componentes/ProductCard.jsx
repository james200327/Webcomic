import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Estilos/ProductCard.css';

export function ProductCard({ comic, image, rating, reviews }) {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navega a ProductDetailPage pasando el ID del cómic en la URL
        navigate(`/product/${comic.id}`);
    };

    return (
        <div className="product-card" onClick={handleClick}>
            <img src={image} alt={comic.titulo} />
            <h2>{comic.titulo}</h2>
            <p>Precio: {comic.precio}</p>
            <p>Rating: {rating} ★</p>
            <p>{reviews} Opiniones</p>
            <p>Stock: {comic.stock}</p>
        </div>
    );
}
