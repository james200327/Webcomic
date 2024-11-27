// src/components/PointsSelection.js
import React from 'react';
import PurchaseOption from './PurchaseOption';
<<<<<<< HEAD
<<<<<<< HEAD
//import './PointsSelection.css';

const pointsOptions = [
    { points: 475, price: 5, icon: '/images/InfinityPoints.jpg' },
    { points: 1000, price: 10, icon: '/images/InfinityPoints.jpg' },
    { points: 2050, price: 20, icon: '/images/InfinityPoints.jpg' },
    { points: 3650, price: 35, icon: '/images/InfinityPoints.jpg' },
    { points: 5350, price: 50, icon: '/images/InfinityPoints.jpg' },
    { points: 11000, price: 100, icon: '/images/InfinityPoints.jpg' },
=======
import InfinityPoints from '../Imagenes/InfinityPoints.png';
//import './PointsSelection.css';

const pointsOptions = [
=======
import InfinityPoints from '../Imagenes/InfinityPoints.png';
//import './PointsSelection.css';

const pointsOptions = [
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
    { points: 475, price: 5, icon: InfinityPoints },
    { points: 1000, price: 10, icon: InfinityPoints },
    { points: 2050, price: 20, icon: InfinityPoints },
    { points: 3650, price: 35, icon: InfinityPoints },
    { points: 5350, price: 50, icon: InfinityPoints },
    { points: 11000, price: 100, icon: InfinityPoints }
<<<<<<< HEAD
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
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
