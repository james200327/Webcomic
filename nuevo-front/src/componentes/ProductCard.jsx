import React from 'react';
import imagen from '../Imagenes/aot/aot-1.jpg';
import '../Estilos/ProductCard.css';
export function ProductCard({image, comic , rating, reviews}) {
  return (
    <div className="product-card">
      <img src={image} className="product-image" />
      <h3 className="product-name">{comic.titulo}</h3>
      <div className='div-product-price'>
      <p className="product-price">{comic.precio}</p>
      <img className='product-infinitypoints-img' src="/images/InfinityPoints.jpg" alt="InfinityPoints" />
      </div>
    
      <div className="product-rating">
        <span>{rating}/5 </span>
        <span className='estrellas'>★</span>
        <span>{reviews} opiniones</span>
      </div>
      <div className='div-delivery'>
      <img src={image} alt="Infinity Comics" className='img-delivery' />
      <p className="product-delivery">{comic.stock}</p>
      </div>     
    </div>
  );
}


