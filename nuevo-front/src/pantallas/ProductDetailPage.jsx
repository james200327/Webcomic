import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Estilos/ProductDetailPage.css';
import { Navbar } from '../componentes/Navbar';
<<<<<<< HEAD
<<<<<<< HEAD
import InfinityPoints from '../Imagenes/InfinityPoints.jpg';
=======
import InfinityPoints from '../Imagenes/InfinityPoints.png';
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======
import InfinityPoints from '../Imagenes/InfinityPoints.png';
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
import { useNavigate } from 'react-router-dom';

export default function ProductDetailPage({}) {
    const redirect = useNavigate();
    const {productId} =  useParams();// ID del producto desde la URL
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(productId)
    // Estado local para los datos del producto
    const [product, setProduct] = useState({
        name: "Título del cómic",
        price: 0,
        rating: 0,
        reviews: 0,
        deliveryInfo: "Información de entrega no disponible",
        description: "Cargando descripción...",
        images: null
    });
=======
    const userId = localStorage.getItem("userId");
    console.log(productId)
    // Estado local para los datos del producto
    const [product, setProduct] = useState(null);

>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======
    const userId = localStorage.getItem("userId");
    console.log(productId)
    // Estado local para los datos del producto
    const [product, setProduct] = useState(null);

>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7

    const goMainPage = () => {
        redirect("/inicio");
    };

    useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
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
                    description: `${data.autor} - ${data.genero}`,
                    images:data.imagenUrl
                });
            })
            .catch(error => {
                console.error("Error al cargar los datos del producto:", error);
            });
    }, [productId]);

=======
      // Cargar los detalles del producto desde el backend
      axios
          .get(`http://localhost:8080/api/comics/${productId}`)
          .then((response) => setProduct(response.data))
          .catch((error) => console.error("Error al cargar los detalles del producto:", error));
  }, [productId]);

=======
      // Cargar los detalles del producto desde el backend
      axios
          .get(`http://localhost:8080/api/comics/${productId}`)
          .then((response) => setProduct(response.data))
          .catch((error) => console.error("Error al cargar los detalles del producto:", error));
  }, [productId]);

>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
  const añadirAlCarrito = async () => {
    try {
        // Enviar solicitud para agregar el producto al carrito
        await axios.post(
            `http://localhost:8080/api/pedidos/usuario/${userId}/agregarProducto/${productId}`,
            null,
            { params: { cantidad: 1 } } // Añadir 1 unidad al carrito
        );
        alert("Producto añadido al carrito.");
    } catch (error) {
        console.error("Error al añadir producto al carrito:", error);
        alert("Hubo un error al añadir el producto al carrito.");
    }
};
    
      if (!product) return <p>Cargando producto...</p>;
<<<<<<< HEAD
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
    return (
        <>
            <Navbar/>
            <div className="product-detail">
                <nav className="breadcrumb">
<<<<<<< HEAD
<<<<<<< HEAD
                    <span onClick={goMainPage}>Home</span> {'>'} Cómics {'>'} {product.name}
=======
                    <span onClick={goMainPage}>Home</span> {'>'} Cómics {'>'} {product.titulo}
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
                </nav>
                <div className="product-main">
                    <div className="product-images">
                    <img src={`http://localhost:8080${product.imagenUrl}`} alt={product.titulo} />
                    </div>
                    <div className="product-info">
                        <h1>{product.titulo}</h1>
                        <div className="rating">
                            <span>4.5 ★</span>
                            <span>10 Opiniones</span>
                        </div>
                        <div className="product-description">
                            <h2>Sobre el cómic</h2>
<<<<<<< HEAD
                            <p>{product.description}</p>
=======
                    <span onClick={goMainPage}>Home</span> {'>'} Cómics {'>'} {product.titulo}
                </nav>
                <div className="product-main">
                    <div className="product-images">
                    <img src={`http://localhost:8080${product.imagenUrl}`} alt={product.titulo} />
                    </div>
                    <div className="product-info">
                        <h1>{product.titulo}</h1>
                        <div className="rating">
                            <span>4.5 ★</span>
                            <span>10 Opiniones</span>
                        </div>
                        <div className="product-description">
                            <h2>Sobre el cómic</h2>
                            <p>{product.descripcion}</p>
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======
                            <p>{product.descripcion}</p>
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
                        </div>
                    </div>
                    <div className='product-addcontainer'>
                        <div className="price">
<<<<<<< HEAD
<<<<<<< HEAD
                            <span>{product.price}</span>
                            <span><img src={InfinityPoints} alt="" /></span>
                        </div>
                        <button className="add-to-cart">Añadir al carrito</button>
                        <div className="delivery-info">{product.deliveryInfo}</div>
=======
                            <span>{product.precio}</span>
                            <span><img src={InfinityPoints} alt="" /></span>
                        </div>
                        <button className='add-to-card' onClick={añadirAlCarrito}>Añadir al carrito</button>
                        {/* <div className="delivery-info">{product.autor}</div> */}
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======
                            <span>{product.precio}</span>
                            <span><img src={InfinityPoints} alt="" /></span>
                        </div>
                        <button className='add-to-card' onClick={añadirAlCarrito}>Añadir al carrito</button>
                        {/* <div className="delivery-info">{product.autor}</div> */}
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
                    </div>
                </div>
            </div>
        </>
    );
}
