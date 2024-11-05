import { Navbar } from "../componentes/Navbar";
import React from 'react';
import { ProductCard } from "../componentes/ProductCard";
import '../Estilos/MainPage.css'
import { useState, useEffect } from 'react';
import axios from 'axios';


const MainPage = () => {

    const [comic, setComic] = useState([]);
    const [mostrarFormComic, setmostrarFormComic] = useState(false);
    const [nuevoComic, setNuevoComic] = useState({
        titulo: '',
        autor: '',
        genero: '',
        precio: '',
        stock: '',
        imagen: null
        /*fecha_publi:''*/
    });

    const rol = localStorage.getItem("role");

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
    }, []);

    const manejoAddComic = async () => {

        const newComic = new FormData();

        newComic.append('titulo', nuevoComic.titulo);
        newComic.append('autor', nuevoComic.autor);
        newComic.append('genero', nuevoComic.genero);
        newComic.append('precio', nuevoComic.precio);
        newComic.append('stock', nuevoComic.stock);

        /* newComic.append('fecha_publi', nuevoComic.fecha_publi);*/
        if (nuevoComic.imagen) {
            newComic.append('imagen', nuevoComic.imagen);
        }
        try {
            await axios.post('http://localhost:8080/api/comics/agregar', newComic);
            // Volver a cargar la lista de cómics después de añadir uno nuevo
            const response = await axios.get('http://localhost:8080/api/comics/todos');
            setComic(response.data);
            setmostrarFormComic(false); // Ocultar el formulario


        } catch (error) {
            console.error('Error al agregar el cómic:', error);
        }

        window.location.reload();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setNuevoComic({ ...nuevoComic, imagen: file });
    };

    return (
        <>
            {rol === "ADMIN" && (
                <div className="admin-main-div">
                    <h1 className="admin-h1">Formulario para añadir comics</h1>

                    <button className="admin-button-create" onClick={() => setmostrarFormComic(!mostrarFormComic)}>Agregar Cómic</button>

                    {mostrarFormComic && (
                        <div className="admin-div-info">
                            <h2>Añadir un nuevo cómic</h2>
                            <input className="div-info-input" type="text" placeholder="Título" onChange={(e) => setNuevoComic({ ...nuevoComic, titulo: e.target.value })} />
                            <input className="div-info-input" type="text" placeholder="Autor" onChange={(e) => setNuevoComic({ ...nuevoComic, autor: e.target.value })} />
                            <input className="div-info-input" type="text" placeholder="Genero" onChange={(e) => setNuevoComic({ ...nuevoComic, genero: e.target.value })} />
                            <input className="div-info-input" type="number" placeholder="Precio" onChange={(e) => setNuevoComic({ ...nuevoComic, precio: e.target.value })} />
                            <input className="div-info-input" type="number" placeholder="Stock" onChange={(e) => setNuevoComic({ ...nuevoComic, stock: e.target.value })} />
                            <button className="div-info-file" onClick={() => document.getElementById('fileInput').click()}>Seleccionar imagen</button>
                                <input 
                                id="fileInput" 
                                type="file" 
                                accept="image/*" 
                                style={{ display: 'none' }} 
                                onChange={handleImageChange} 
                                />

                            <button className="div-info-agregar" onClick={manejoAddComic}>Agregar</button>
                        </div>
                    )}
                </div>
            )}
            <Navbar />
            <div className="MainPage">
                <h3 className="mp-h3">Nuestras Recomendaciones</h3>
                <div className="div-products">
                    {comic.map((comic) => (
                        <ProductCard key={comic.id} comic={comic} image={`http://localhost:8080${comic.imagenUrl}`} rating={4.5} reviews={12} />
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
        <div className="MainPage">
        <h3 className="mp-h3">Nuestras Recomendaciones</h3>
        <div className="div-products">
        <ProductCard id={1} image={aot1} name="Atack on Titan Vol.1" price={1200} rating={4.5} reviews={12} deliveryInfo="Recibelo mañana Gratis"/>
        <ProductCard id={2} image={aot2} name="Atack on Titan Vol.2" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={3} image={aot3} name="Atack on Titan Vol.3" price={1500} rating={5} reviews={1} deliveryInfo="Recibelo mañana Gratis"/>
        <ProductCard id={4} image={aot4} name="Atack on Titan Vol.4" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={5} image={aot5} name="Atack on Titan Vol.5" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        </div>
        <div className="div-products">
        <ProductCard id={6} image={aot6} name="Atack on Titan Vol.6" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={7} image={aot7} name="Atack on Titan Vol.7" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={8} image={aot8} name="Atack on Titan Vol.8" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={9} image={wolv1} name="Old Man Logan Vol.1" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={10} image={wolv2} name="Old Man Logan Vol.2" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        </div>
        <div className="div-products">
        <ProductCard id={11} image={wolv3} name="Old Man Logan Vol.3" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={12} image={wolv4} name="Old Man Logan Vol.4" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={13} image={wolv5} name="Old Man Logan Vol.5" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={14} image={wolv6} name="Old Man Logan Vol.6" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard id={15} image={wolv7} name="Old Man Logan Vol.7" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        </div>


        </div>
        </>
    )
}*/}
