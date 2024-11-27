// src/components/PurchaseOption.js
<<<<<<< HEAD
<<<<<<< HEAD
=======
import MySwal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
import React from 'react';
import '../Estilos/PurchaseOption.css'

const MySwalInstance = withReactContent(MySwal);

const PurchaseOption = ({ points, price, icon }) => {
    const handlePurchase = async () => {
        const { value: formValues } = await MySwalInstance.fire({
            title: `Comprar ${points} puntos por ${price}€`,
            html: `
                <div class="form-container">
                    <label for="numeroTarjeta" class="custom-label">Número de Tarjeta</label>
                    <input id="numeroTarjeta" class="swal2-input custom-input" placeholder="1234 5678 9123 4567">
                    
                    <label for="fechaExpiracion" class="custom-label">Fecha de Expiración (MM/YY)</label>
                    <input id="fechaExpiracion" class="swal2-input custom-input" placeholder="MM/YY">
                    
                    <label for="cvv" class="custom-label">CVV</label>
                    <input id="cvv" class="swal2-input custom-input" type="password" maxlength="3">
                </div>
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Pagar',
            cancelButtonText: 'Cancelar',
            customClass: {
                popup: 'custom-popup',
                title: 'custom-title',
                confirmButton: 'custom-confirm-button',
                cancelButton: 'custom-cancel-button'
            },
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

                MySwalInstance.fire({
                    title: 'Compra Exitosa',
                    text: response.data,
                    icon: 'success',
                    confirmButtonText: 'Continuar',
                });
                window.location.reload();

                // Opcional: recargar puntos del usuario desde el backend
            } catch (error) {
                MySwalInstance.fire({
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
<<<<<<< HEAD
=======
import MySwal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import React from 'react';
import '../Estilos/PurchaseOption.css'

const MySwalInstance = withReactContent(MySwal);

const PurchaseOption = ({ points, price, icon }) => {
    const handlePurchase = async () => {
        const { value: formValues } = await MySwalInstance.fire({
            title: `Comprar ${points} puntos por ${price}€`,
            html: `
                <div class="form-container">
                    <label for="numeroTarjeta" class="custom-label">Número de Tarjeta</label>
                    <input id="numeroTarjeta" class="swal2-input custom-input" placeholder="1234 5678 9123 4567">
                    
                    <label for="fechaExpiracion" class="custom-label">Fecha de Expiración (MM/YY)</label>
                    <input id="fechaExpiracion" class="swal2-input custom-input" placeholder="MM/YY">
                    
                    <label for="cvv" class="custom-label">CVV</label>
                    <input id="cvv" class="swal2-input custom-input" type="password" maxlength="3">
                </div>
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Pagar',
            cancelButtonText: 'Cancelar',
            customClass: {
                popup: 'custom-popup',
                title: 'custom-title',
                confirmButton: 'custom-confirm-button',
                cancelButton: 'custom-cancel-button'
            },
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

                MySwalInstance.fire({
                    title: 'Compra Exitosa',
                    text: response.data,
                    icon: 'success',
                    confirmButtonText: 'Continuar',
                });
                window.location.reload();

                // Opcional: recargar puntos del usuario desde el backend
            } catch (error) {
                MySwalInstance.fire({
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
            <div className="points-price">{price}€</div>
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======
            <div className="points-price">{price}€</div>
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
            <div className="points-icon">
                <img src={icon} alt="Points Icon" />
            </div>
            <div className="points">{points} Puntos</div>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="price">{price}€</div>
            <button className="buy-button">Comprar</button>
=======
            <button className="buy-button" onClick={handlePurchase}>Comprar</button>
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======
            <button className="buy-button" onClick={handlePurchase}>Comprar</button>
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
        </div>
    );
};

export default PurchaseOption;
