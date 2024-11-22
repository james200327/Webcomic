import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Estilos/TramitarPedido.css'

export default function TramitarPedido() {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [form, setForm] = useState({ nombre: '', email: '', direccion: '' });
    const userId = localStorage.getItem('userId');
    const navigate = useNavigate();

    // Obtener el carrito desde el backend
    const fetchCarrito = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/pedidos/usuario/${userId}/carrito`);
            setCarrito(response.data.items || []);
            calculateTotal(response.data.items || []);
        } catch (error) {
            console.error('Error al obtener el carrito:', error);
        }
    };

    const calculateTotal = (items) => {
        const newTotal = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
        setTotal(newTotal);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const confirmarPedido = async () => {
        try {
            await axios.post(`http://localhost:8080/api/pedidos/usuario/${userId}/confirmar`);
            alert('Pedido confirmado');
            navigate('/inicio');
        } catch (error) {
            console.error('Error al confirmar el pedido:', error);
        }
    };

    useEffect(() => {
        fetchCarrito();
    }, []);

    return (
        <div className="checkout">
  <h1>Confirmar Pedido</h1>
  <div className="checkout-container">
    {/* Formulario que ocupa el 70% */}
    <div className="checkout-form">
      <h2>Datos de Envío</h2>
      <form>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleFormChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={form.email}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={form.direccion}
          onChange={handleFormChange}
        />
      </form>
      <div className="checkout-summary">
        <h3>Total: {total} puntos</h3>
        <button className="confirm-button" onClick={confirmarPedido}>
          Confirmar Pedido
        </button>
      </div>
    </div>

    {/* Productos que ocupan el 30% */}
    <div className="checkout-products">
      <h2>Tu Pedido</h2>
      <div className="checkout-products-scroll">
        {carrito.map((item) => (
          <div key={item.comic.id} className="checkout-item">
            <img src={`http://localhost:8080${item.comic.imagenUrl}`} alt={item.comic.titulo} />
            <div className="checkout-item-info">
              <h3>{item.comic.titulo}</h3>
              <p>Cantidad: {item.cantidad}</p>
              <p>Precio: {item.precio * item.cantidad} puntos</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>



    );
}