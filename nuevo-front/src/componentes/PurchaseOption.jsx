// src/components/PurchaseOption.js
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import React from 'react';

const MySwal = withReactContent(Swal);

const PurchaseOption = ({ points, price, icon }) => {
    const handlePurchase = async () => {
        const { value: formValues } = await MySwal.fire({
            title: `Comprar ${points} puntos por ${price}€`,
            html: `
                <label>Número de Tarjeta</label>
                <input id="numeroTarjeta" class="swal2-input" placeholder="1234 5678 9123 4567">
                <label>Fecha de Expiración (MM/YY)</label>
                <input id="fechaExpiracion" class="swal2-input" placeholder="MM/YY">
                <label>CVV</label>
                <input id="cvv" class="swal2-input" type="password" maxlength="3">
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Pagar',
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                return {
                    numeroTarjeta: document.getElementById('numeroTarjeta').value,
                    fechaExpiracion: document.getElementById('fechaExpiracion').value,
                    cvv: document.getElementById('cvv').value,
                };
            },
        });

        if (formValues) {
            try {
                const params = new URLSearchParams({
                    numeroTarjeta: formValues.numeroTarjeta,
                    fechaExpiracion: formValues.fechaExpiracion,
                    cvv: formValues.cvv,
                    cantidadPuntos: points,
                });

                const response = await axios.post(
                    `http://localhost:8080/api/usuarios/${localStorage.getItem('userId')}/comprar-puntos?${params.toString()}`
                );

                MySwal.fire({
                    title: 'Compra Exitosa',
                    text: response.data,
                    icon: 'success',
                    confirmButtonText: 'Continuar',
                });
                window.location.reload();

                // Opcional: recargar puntos del usuario desde el backend
            } catch (error) {
                MySwal.fire({
                    title: 'Error en la compra',
                    text: error.response?.data || 'Algo salió mal',
                    icon: 'error',
                    confirmButtonText: 'Intentar de nuevo',
                });
            }
        }
    };
    return (
        <div className="purchase-option">
            <div className="points-icon">
                <img src={icon} alt="Points Icon" />
            </div>
            <div className="points">{points} Puntos</div>
            <div className="price">{price}€</div>
            <button className="buy-button" onClick={handlePurchase}>Comprar</button>
        </div>
    );
};

export default PurchaseOption;
