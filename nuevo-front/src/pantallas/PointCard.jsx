// src/components/PointsSelection.js
import React from 'react';
import PurchaseOption from './PurchaseOption';
//import './PointsSelection.css';

const pointsOptions = [
    { points: 475, price: 5, icon: '/images/InfinityPoints.jpg' },
    { points: 1000, price: 10, icon: '/images/InfinityPoints.jpg' },
    { points: 2050, price: 20, icon: '/images/InfinityPoints.jpg' },
    { points: 3650, price: 35, icon: '/images/InfinityPoints.jpg' },
    { points: 5350, price: 50, icon: '/images/InfinityPoints.jpg' },
    { points: 11000, price: 100, icon: '/images/InfinityPoints.jpg' },
];

const PointCard = () => {
    return (
        <div className="points-selection">
            <h2>Seleccionar InfinityPoints</h2>
            <div className="points-options">
                {pointsOptions.map((option, index) => (
                    <PurchaseOption
                        key={index}
                        points={option.points}
                        price={option.price}
                        icon={option.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default PointCard;
