import React, { useState ,useEffect} from 'react';
//import { Link } from 'react-router-dom'; // Importa el componente Link
import InfinityPoints from '../Imagenes/InfinityPoints.png';

import lupa from '../Imagenes/lupita.png';
import logouser from '../Imagenes/logoUsaurio.png';
import axios from 'axios';
import '../Estilos/Navbar.css';
import { useNavigate } from 'react-router-dom';


export function Navbar({setSearchTerm, setSelectedGenre}) {
  const [carrito, setCarrito] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const redirect = useNavigate();

  const irPagPuntos = () => {
    redirect("/pagPuntos");
  }

  const irInicio = () =>{
    redirect("/inicio");
  }

  const [puntos, setPuntos] = useState(0);

    const userId = localStorage.getItem("userId"); // Asegúrate de que el ID del usuario esté guardado

    // Función para obtener los puntos del usuario
    const obtenerPuntos = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/usuarios/${userId}`);
            setPuntos(response.data.puntos); // Actualizar el estado con los puntos obtenidos
        } catch (error) {
            console.error("Error al obtener los puntos:", error);
        }
    };

    useEffect(() => {
      if (userId) {
        obtenerPuntos();
      }
    }, [userId]);

    const fetchCarrito = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/pedidos/usuario/${userId}/carrito`);
        setCarrito(response.data.items || []);
        calculateTotal(response.data.items || []);
      } catch (error) {
        console.error('Error al obtener el carrito:', error);
      }
    };
  
    // Calcular el total del carrito
    const calculateTotal = (items) => {
      const newTotal = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
      setTotal(newTotal);
    };
  
    // Actualizar la cantidad de un producto
    const updateCantidad = async (comicId, cantidad) => {
      try {
        const response = await axios.put(
          `http://localhost:8080/api/pedidos/usuario/${userId}/actualizarProducto/${comicId}`,
          null,
          { params: { cantidad } }
        );
        setCarrito(response.data.items);
        calculateTotal(response.data.items);
      } catch (error) {
        console.error('Error al actualizar la cantidad:', error);
      }
    };
  
    // Eliminar un producto del carrito
    const removeFromCart = async (comicId) => {
      try {
        await updateCantidad(comicId, 0); // Actualizar cantidad a 0 elimina el producto
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
      }
    };
    
      // Opcional: Actualizar el carrito con el backend si es necesario
      useEffect(() => {
        if (userId) fetchCarrito();
      }, [userId]);

    const handleCheckout = () => {
      redirect('/tramitarPedido');
    };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-logo">
            <img src="/images/logo.png" alt="Logo" className="logo" />
          </div>

          <div className="navbar-categories">
            <button onClick={toggleMenu} className="categories-button">
              <i className="fas fa-bars"></i>
              Todas las categorías
            </button>
          </div>

          <div> 
          <select className="search-category"onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="all">Todo el catálogo</option>
            <option value="comics">Comics</option>
            <option value="manga">Manga</option>
              </select>

            <input type="text" placeholder="Buscar" className="search-input" onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className="search-button" >
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="navbar-links">
            <button href="/mi-cuenta" className="navbar-link">
              
              <i className="fas fa-user"></i> Mi cuenta
            </button>
            <button onClick={toggleCart} className="navbar-link">
    
              <i className="fas fa-shopping-cart"></i> Mi cesta
              <span className="cart-count">{carrito.length}</span>
            </button>
            <a href="/PagPuntos" className='navbar-link'>
              <img src={InfinityPoints} className='navbar-points-img' alt=""/>
              <span className='points-count'>{puntos}</span>
            </a>
          </div>
        </nav>
      </header>  

      {/* Sidebar izquierdo con Links para redirigir */}
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>X</button>
        <h2>Todas las categorías</h2>
        {/* <ul className="category-list">
          <li><Link to="/campanas-ofertas" onClick={toggleMenu}>Campañas y ofertas</Link></li>
          <li><Link to="/ultimas-novedades" onClick={toggleMenu}>Ultimas novedades</Link></li>
          <li><Link to="/puntos" onClick={toggleMenu}>Puntos</Link></li>
          <li><Link to="/comics" onClick={toggleMenu}>Comics</Link></li>
          <li><Link to="/manga" onClick={toggleMenu}>Manga</Link></li>
        </ul> */}
         <ul className="category-list">
          <li> Campañas y ofertas</li>
          <li> Ultimas novedades</li>
          <li onClick={irPagPuntos}> Puntos</li>
          <li> Comics</li>
          <li> Manga</li>
          <li onClick={irInicio}> Inicio</li>
        </ul>
      </div>

      {/* Sidebar derecho */}
      <div className={`sidebar-right ${isCartOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleCart}>X</button>
        <h2>Mi Cesta</h2>
        <ul className="cart-list">
          {carrito.map((item) => (
            <li key={item.comic.id} className="cart-item">
              <img src={`http://localhost:8080${item.comic.imagenUrl}`} alt={item.comic.titulo} className='imagen-cart'/>
              <div className="cart-details">
                <h4>{item.comic.titulo}</h4>
                <p>{item.comic.precio} puntos</p>
                <div className="cart-quantity">
                  <button
                    onClick={() => updateCantidad(item.comic.id, item.cantidad - 1)}
                    disabled={item.cantidad === 1}
                  >
                    -
                  </button>
                  <span>{item.cantidad}</span>
                  <button
                    onClick={() => updateCantidad(item.comic.id, item.cantidad + 1)}
                    disabled={item.cantidad >= item.comic.stock}
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.comic.id)}>X</button>
            </li>
          ))}
        </ul>
        <div className="cart-total">
          <h3>Total: {total} puntos</h3>
        </div>
        <button className="checkout-btn" onClick={handleCheckout}>
          Tramitar Pedido
        </button>
      </div>

      

      {/* Overlay para ambos sidebars */}
      <div 
        className={`overlay ${isMenuOpen || isCartOpen ? 'show' : ''}`} 
        onClick={() => { setIsMenuOpen(false); setIsCartOpen(false); }}
      ></div>
    </>
  );
}
