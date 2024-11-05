import React, { useState } from 'react';
//import { Link } from 'react-router-dom'; // Importa el componente Link
import InfinityPoints from '../Imagenes/InfinityPoints.jpg';
import carrito from '../Imagenes/carrito.png';
import lupa from '../Imagenes/lupita.png';
import logouser from '../Imagenes/logoUsaurio.png';
import '../Estilos/Navbar.css';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

          <div className="navbar-search">
            <select className="search-category">
              <option value="all">Todo el catálogo</option>
              <option value="comics">Comics</option>
              <option value="manga">Manga</option>
            </select>
            <input type="text" placeholder="Buscar" className="search-input" />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="navbar-links">
            <button href="/mi-cuenta" className="navbar-link">
              
              <i className="fas fa-user"></i> Mi cuenta
            </button>
            <button onClick={toggleCart} className="navbar-link">
    
              <i className="fas fa-shopping-cart"></i> Mi cesta
              <span className="cart-count">0</span>
            </button>
            <a href="/PagPuntos" className='navbar-link'>
              <img src={InfinityPoints} className='navbar-points-img' alt=""/>
              <span className='points-count'>0</span>
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
        <ul className="category-list">
          <li>Producto 1</li>
          <li>Producto 2</li>
          <li>Producto 3</li>
          <li>Total: 0€</li>
        </ul>
      </div>

      {/* Overlay para ambos sidebars */}
      <div 
        className={`overlay ${isMenuOpen || isCartOpen ? 'show' : ''}`} 
        onClick={() => { setIsMenuOpen(false); setIsCartOpen(false); }}
      ></div>
    </>
  );
}
