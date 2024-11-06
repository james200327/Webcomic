import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Estilos/ProductCard.css';

export function ProductCard({ comic}) {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navega a ProductDetailPage pasando el ID del cómic en la URL
        navigate(`/product/${comic.id}`);
    };
      return(
    <div className="product-card" onClick={handleClick}>
      <img src={comic.image} alt={comic.titulo} className="product-image" />
      <h3 className="product-name">{comic.titulo}</h3>
      <div className='div-product-price'>
      <p className="product-price">{comic.precio}</p>
      <img className='product-infinitypoints-img' src={InfinityPoints} alt="InfinityPoints" />
      </div>
    
      <div className="product-rating">
        <span>{comic.rating}/5 </span>
        <span className='estrellas'>★</span>
        <span>{comic.reviews} opiniones</span>
      </div>
      <div className='div-delivery'>
      <img src={InfinityComics} alt="Infinity Comics" className='img-delivery' />
      <p className="product-delivery">Quedan{comic.stock} unidades</p>
      </div>    
    </div> 
  );
}



