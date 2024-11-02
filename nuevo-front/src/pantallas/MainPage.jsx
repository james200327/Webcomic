import { Navbar } from "../componentes/Navbar";
import React from 'react';
import { ProductCard } from "../componentes/ProductCard";
import '../Estilos/MainPage.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import aot_1 from '../Imagenes/aot/aot-1.jpg';

import aot1 from "../Imagenes/aot/aot-1.jpg";
import aot2 from "../Imagenes/aot/aot2.jpg";
import aot3 from "../Imagenes/aot/aot3.jpg";
import aot4 from "../Imagenes/aot/aot4.jpg";
import aot5 from "../Imagenes/aot/aot5.jpg";
import aot6 from "../Imagenes/aot/aot6.jpg";
import aot7 from "../Imagenes/aot/aot7.jpg";
import aot8 from "../Imagenes/aot/aot8.jpg";


import wolv1 from '../Imagenes/wolverine/wolverine-1.jpeg';
import wolv2 from '../Imagenes/wolverine/wolverine-2.jpg';
import wolv3 from '../Imagenes/wolverine/wolverine-3.jpg';
import wolv4 from '../Imagenes/wolverine/wolverine-4.jpg';
import wolv5 from '../Imagenes/wolverine/wolverine-5.jpg';
import wolv6 from '../Imagenes/wolverine/wolverine-6.jpg';
import wolv7 from '../Imagenes/wolverine/wolverine-7.jpg';
import wolv8 from '../Imagenes/wolverine/wolverine-8.jpg';

const MainPage = () => {

    const [comic, setComic] = useState([]);
    const [mostrarFormComic, setmostrarFormComic] = useState(false);
    const [nuevoComic, setNuevoComic] = useState({
        titulo:'',
        autor:'',
        genero:'',
        precio:'',
        stock:''
        /*fecha_publi:''*/
    });

    useEffect(() => {

        const listaComics = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/comics/todos');
                setComic(response.data);
            } catch (error) {
                console.error('Error al cargar los cómics:', error);
            }
        };
        listaComics();
    },[]);

    const manejoAddComic = async () => {

        const newComic = new FormData();

        newComic.append('titulo', nuevoComic.titulo);
        newComic.append('autor', nuevoComic.autor);
        newComic.append('genero', nuevoComic.genero);
        newComic.append('precio', nuevoComic.precio);
        newComic.append('stock', nuevoComic.stock);
       /* newComic.append('fecha_publi', nuevoComic.fecha_publi);*/

        try {
            await axios.post('http://localhost:8080/api/comics/agregar', newComic);
            // Volver a cargar la lista de cómics después de añadir uno nuevo
            const response = await axios.get('http://localhost:8080/api/comics/todos');
            setComic(response.data);
            setmostrarFormComic(false); // Ocultar el formulario
        } catch (error) {
            console.error('Error al agregar el cómic:', error);
        }
    };

    return (
        <>
            <h1>Comics en Venta</h1>
            {/* Botón solo para administradores */}
            <button onClick={() => setmostrarFormComic(!mostrarFormComic)}>Agregar Cómic</button>

            {mostrarFormComic && (
                <div>
                    <h2>Añadir un nuevo cómic</h2>
                    <input type="text" placeholder="Título" onChange={(e) => setNuevoComic({ ...nuevoComic, titulo: e.target.value })} />
                    <input type="text" placeholder="Autor" onChange={(e) => setNuevoComic({ ...nuevoComic, autor: e.target.value })} />
                    <input type="text" placeholder="Genero" onChange={(e) => setNuevoComic({ ...nuevoComic, genero: e.target.value })} />
                    <input type="number" placeholder="Precio" onChange={(e) => setNuevoComic({ ...nuevoComic, precio: e.target.value })} />
                    <input type="number" placeholder="Stock" onChange={(e) => setNuevoComic({ ...nuevoComic, stock: e.target.value })} />
                    <button onClick={manejoAddComic}>Agregar</button>
                </div>
            )}
            <Navbar/>
            <div className="App">
            <h3 className="mp-h3">Nuestras Recomendaciones</h3>
            <div className="div-products">
                {comic.map((comic) => (
                    <ProductCard image={aot1} key={comic.id} comic={comic} rating = {4.5} reviews = {12} />
                ))}
            </div>
            </div>
        </>
    );
    
}

export default MainPage;

{/*export default function MainPage (){
    return(
        <>
        {/**esto es un comentario 
        <Navbar/>
        <div className="App">
        <h3 className="mp-h3">Nuestras Recomendaciones</h3>
        <div className="div-products">
        <ProductCard image={aot1} name="Atack on Titan Vol.1" price={1200} rating={4.5} reviews={12} deliveryInfo="Recibelo mañana Gratis"/>
        <ProductCard image={aot2} name="Atack on Titan Vol.2" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image={aot3} name="Atack on Titan Vol.3" price={1500} rating={5} reviews={1} deliveryInfo="Recibelo mañana Gratis"/>
        <ProductCard image={aot4} name="Atack on Titan Vol.4" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image={aot5} name="Atack on Titan Vol.5" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        </div>
        <div className="div-products">
        <ProductCard image={aot6} name="Atack on Titan Vol.6" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image={aot7} name="Atack on Titan Vol.7" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image={aot8} name="Atack on Titan Vol.8" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image={wolv1} name="Old Man Logan Vol.1" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image={wolv2} name="Old Man Logan Vol.2" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        </div>
        <div className="div-products">
        <ProductCard image={wolv3} name="Atack on Titan Vol.3" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image={wolv4} name="Atack on Titan Vol.4" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image={wolv5} name="Atack on Titan Vol.5" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image={wolv6} name="Atack on Titan Vol.6" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image={wolv7} name="Atack on Titan Vol.7" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        </div>


        </div>
        </>
    )
}*/}
