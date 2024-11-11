import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Estilos/ProductDetailPage.css';
import { Navbar } from '../componentes/Navbar';
import InfinityPoints from '../Imagenes/InfinityPoints.jpg';
import { useNavigate } from 'react-router-dom';

export default function ProductDetailPage({}) {
    const redirect = useNavigate();
    const {productId} =  useParams();// ID del producto desde la URL
    console.log(productId)
    // Estado local para los datos del producto
    const [product, setProduct] = useState({
        name: "Título del cómic",
        price: 0,
        rating: 0,
        reviews: 0,
        deliveryInfo: "Información de entrega no disponible",
        descripcion: "Cargando descripción...",
        images: null
    });

    const goMainPage = () => {
        redirect("/inicio");
    };

    useEffect(() => {
        // Llama al backend para obtener los detalles del producto
        axios.get(`http://localhost:8080/api/comics/${productId}`)
            .then(response => {
               
                const data = response.data;
                console.log(data)
                setProduct({
                    name: data.titulo ,
                    price: data.precio || 0,
                    rating: 4.5, // Placeholder, actualízalo si tienes este campo en el backend
                    reviews: 10, // Placeholder, actualízalo si tienes este campo en el backend
                    deliveryInfo: `Stock disponible: ${data.stock}`,
                    description: `${data.autor} - ${data.descripcion}`,
                    images:data.imagenUrl
                });
            })
            .catch(error => {
                console.error("Error al cargar los datos del producto:", error);
            });
    }, [productId]);

    return (
        <>
            <Navbar/>
            <div className="product-detail">
                <nav className="breadcrumb">
                    <span onClick={goMainPage}>Home</span> {'>'} Cómics {'>'} {product.name}
                </nav>
                <div className="product-main">
                    <div className="product-images">
                    <img src={`http://localhost:8080${product.images}`} alt={product.name} />
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
                        <button className="add-to-cart">Añadir al carrito</button>
                        <div className="delivery-info">{product.deliveryInfo}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
