// src/components/PurchaseOption.js
import React from 'react';
//import './PurchaseOption.css';

const PurchaseOption = ({ points, price, icon }) => {
    return (
        <div className="purchase-option">
            <div className="points-icon">
                <img src={icon} alt="Points Icon" />
            </div>
            <div className="points">{points} Puntos</div>
            <div className="price">{price}€</div>
            <button className="buy-button">Comprar</button>
        </div>
    );
};

export default PurchaseOption;
