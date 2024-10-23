// src/App.js
import React from 'react';
import PaymentMethods from './PaymentMethod.jsx';
import PointCard from './PointCard.jsx';
import { Navbar } from "./Navbar";
import '../Estilos/PointsPage.css';

export default function PointsPage() {
    return (
        <>
         <Navbar/>
        <div className="App">
            <header>
                <h1>Seleccionar Método de Compra</h1>
                <PaymentMethods/>
            </header>
            <main>
                <PointCard />
            </main>
        </div>
        </>
        
    );
}

