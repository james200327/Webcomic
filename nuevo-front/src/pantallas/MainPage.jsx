import { Navbar } from "./Navbar";
import { ProductCard } from "./ProductCard";
import '../Estilos/MainPage.css'


export default function MainPage (){
    return(
        <>
        <Navbar/>
        <div className="App">
        <h3 className="mp-h3">Nuestras Recomendaciones</h3>
        <div className="div-products">
        <ProductCard image="/images/logo.png" name="Atack on Titan Vol.1" price={1200} rating={4.5} reviews={12} deliveryInfo="Recibelo mañana Gratis"/>
        <ProductCard image="/images/logo.png" name="the killing joke" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image="/images/LogoTFG.png" name="Venom: King of Black Vol.3" price={1500} rating={5} reviews={1} deliveryInfo="Recibelo mañana Gratis"/>
        <ProductCard image="/images/logo.png" name="the killing joke" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image="/images/logo.png" name="the killing joke" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        </div>
        <div className="div-products">
        <ProductCard image="/images/logo.png" name="the killing joke" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image="/images/logo.png" name="the killing joke" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image="/images/logo.png" name="the killing joke" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image="/images/logo.png" name="the killing joke" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        <ProductCard image="/images/logo.png" name="the killing joke" price={1400} rating={4.8} reviews={400} deliveryInfo={"Recibelo Miercoles 23"}/>
        </div>
        
        </div>
        </>
    )
}