import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Estilos/ProductCard.css';
<<<<<<< HEAD
import InfinityPoints from '../Imagenes/InfinityPoints.jpg';
import InfinityComics from '../Imagenes/logo.png';
export function ProductCard({ comic, image, onDelete, isAdmin, onModify}) {
    const navigate = useNavigate();


    const handleClick = () => {
        // Navega a ProductDetailPage pasando el ID del cómic en la URL
        navigate(`/product/${comic.id}`);
    };

    const handleDeleteClick = (e) => {
        e.stopPropagation(); // Evita la navegación al hacer clic en "Eliminar"
        onDelete(); // Llama a la función de eliminación
    };

    const handleEditClick = (e) => {
      e.stopPropagation();
      onModify(); // Abre el formulario de edición
  };


  const handleSaveClick = (e) => {
    e.stopPropagation();
    onModify(updatedComic); // Llama a la función onModify pasando los datos actualizados
    setIsEditing(false); // Cierra el formulario de edición
}; 

      return(
=======
import InfinityPoints from '../Imagenes/InfinityPoints.png';
import InfinityComics from '../Imagenes/logo.png';
export function ProductCard({ comic, image, onDelete, isAdmin, onEdit }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navega a ProductDetailPage pasando el ID del cómic en la URL
    navigate(`/product/${comic.id}`);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Evita la navegación al hacer clic en "Eliminar"
    onDelete(); // Llama a la función de eliminación
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    onEdit();
  };
  return (
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
    <div className="product-card" onClick={handleClick}>
      <img src={image} className="product-image" />
      <h3 className="product-name">{comic.titulo}</h3>
      <div className='div-product-price'>
<<<<<<< HEAD
      <p className="product-price">{comic.precio}</p>
      <img className='product-infinitypoints-img' src={InfinityPoints} alt="InfinityPoints" />
      </div>
    
=======
        <p className="product-price">{comic.precio}</p>
        <img className='product-infinitypoints-img' src={InfinityPoints} alt="InfinityPoints" />
      </div>

>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
      <div className="product-rating">
        <span>{comic.rating}/5 </span>
        <span className='estrellas'>★</span>
        <span>{comic.reviews} opiniones</span>
      </div>
      <div className='div-delivery'>
<<<<<<< HEAD
      <img src={InfinityComics} alt="Infinity Comics" className='img-delivery' />
      <p className="product-delivery">Quedan {comic.stock} unidades</p>
      </div> 
      {isAdmin && (
        <div className='adminn-buttons'>
                <button className='product-card-delete' onClick={handleDeleteClick}>Eliminar</button>
                <button className='product-card-modify' onClick={handleEditClick}>Modificar</button>
          
        </div> 
            )} 
    </div> 
=======
        <img src={InfinityComics} alt="Infinity Comics" className='img-delivery' />
        <p className="product-delivery">Quedan {comic.stock} unidades</p>
      </div>
      {isAdmin && (
        <>
          <button className='product-card-delete' onClick={handleDeleteClick}>Eliminar</button>
          <button className='product-card-edit' onClick={handleEditClick}>Modificar</button>
        </>
      )}

    </div>
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
  );
}


<<<<<<< HEAD
=======

>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
