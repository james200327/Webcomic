import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../Estilos/ProductDetailPage.css';
import { Navbar } from '../componentes/Navbar';
import InfinityPoints from '../Imagenes/InfinityPoints.jpg';
import { useNavigate } from 'react-router-dom';
export default function ProductDetailPage() {

    const redirect = useNavigate();

    const goMainPage = () => {
      redirect("/inicio");
    }

    const { productId } = useParams();
    const location = useLocation();

    // Extrae los datos pasados desde el state
    const { image, name, price, rating, reviews, deliveryInfo } = location.state || {};

    const product = {
        name: name || "Título del cómic",
        price: price || 0,
        rating: rating || 0,
        reviews: reviews || 0,
        deliveryInfo: deliveryInfo || "Información de entrega no disponible",
        description: `
           
            En el primer capítulo del manga Shingeki no Kyojin (Attack on Titan), la humanidad vive aislada dentro de murallas gigantes para protegerse de unos seres monstruosos conocidos como titanes.
            La historia sigue a Eren Jaeger, un joven que sueña con explorar el mundo más allá de los muros y descubrir la libertad que le han negado. Sin embargo,
            un inesperado evento sacude su tranquila vida y pone a prueba sus deseos, 
            desencadenando una serie de eventos que lo llevarán a enfrentarse a los titanes y cuestionar la verdadera seguridad de la humanidad tras las murallas.
        `,
        images: [image || "/path/to/default-image.jpg"], // Imagen principal
    };

    return (
        <>
           <Navbar/>
       
     
        <div className="product-detail">
            <nav className="breadcrumb">
              <span onClick={goMainPage}>Home</span> {'>'} Cómics {'>'} {product.name}
            </nav>
            <div className="product-main">
                <div className="product-images">
                    <img src={product.images[0]} alt={product.name} />
                </div>
                <div className="product-info">
                    <h1>{product.name}</h1>
                    <div className="rating">
                        <span>{product.rating} ★</span>
                        <span>{product.reviews} Opiniones</span>
                    </div>
                    <div className="product-description">
                        <h2>Sobre el cómic</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className='product-addcontainer'>
                    <div className="price">
                        <span>{product.price}</span>
                        <span><img src={InfinityPoints} alt="" /></span>
                    </div>
                    <img src="/" alt="" />
                    <button className="add-to-cart">Añadir al carrito</button>
                    <div className="delivery-info">{product.deliveryInfo}</div>
                </div>
            </div>
           
        </div>
        </>
    );
}
