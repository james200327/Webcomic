// src/App.js
import React from 'react';
import PaymentMethods from '../componentes/PaymentMethod.jsx';
import PointCard from '../componentes/PointCard.jsx';
import { Navbar } from "../componentes/Navbar.jsx";
import '../Estilos/PointsPage.css';

export default function PointsPage() {
    return (
        <>
         <Navbar/>
<<<<<<< HEAD
        <div className="App">
=======
        <div className="PointsPage">
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
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

