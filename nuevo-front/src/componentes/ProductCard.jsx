import React from 'react';
import '../Estilos/ProductCard.css';
import { Link } from 'react-router-dom';
import InfinityComics from '../Imagenes/logo.png'
import InfinityPoints from '../Imagenes/InfinityPoints.jpg'
export function ProductCard({ id, image, name, price, rating, reviews, deliveryInfo }) {
  return (
    
    <Link  to={{
      pathname: `/product/${id}`,
    }}
    state={{ image, name, price, rating, reviews, deliveryInfo }}
    className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <div className='div-product-price'>
      <p className="product-price">{price}</p>
      <img className='product-infinitypoints-img' src={InfinityPoints} alt="InfinityPoints" />
      </div>
    
      <div className="product-rating">
        <span>{rating}/5 </span>
        <span className='estrellas'>★</span>
        <span>{reviews} opiniones</span>
      </div>
      <div className='div-delivery'>
      <img src={InfinityComics} alt="Infinity Comics" className='img-delivery' />
      <p className="product-delivery">{deliveryInfo}</p>
      </div>     
    </Link>
  );
}


