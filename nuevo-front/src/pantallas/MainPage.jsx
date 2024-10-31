import { Navbar } from "../componentes/Navbar";
import React from 'react';
import { ProductCard } from "../componentes/ProductCard";
import '../Estilos/MainPage.css'
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


export default function MainPage (){
    return(
        <>
        {/**esto es un comentario */}
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
}