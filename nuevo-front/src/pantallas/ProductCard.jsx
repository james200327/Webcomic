import React from 'react';
import '../Estilos/ProductCard.css';
export function ProductCard({ image, name, price, rating, reviews, deliveryInfo }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <div className='div-product-price'>
      <p className="product-price">{price}</p>
      <img className='product-infinitypoints-img' src="/images/InfinityPoints.jpg" alt="InfinityPoints" />
      </div>
    
      <div className="product-rating">
        <span>{rating}/5 </span>
        <span className='estrellas'>★</span>
        <span>{reviews} opiniones</span>
      </div>
      <div className='div-delivery'>
      <img src={image} alt="Infinity Comics" className='img-delivery' />
      <p className="product-delivery">{deliveryInfo}</p>
      </div>     
    </div>
  );
}


