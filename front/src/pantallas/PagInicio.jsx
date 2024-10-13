import '../Estilos/PagInicio.css';
import  logos from '../Imagenes/Designer.jpeg';

import logoUsuario from '../Imagenes/logoUsaurio.png';
import logoCarrito from '../Imagenes/carrito.png';
import lupa from '../Imagenes/lupita.png';
const pagInicio = () => {
    return(
        <header>
            <div class="logo">
                <img src={logos} alt="Logo"/>
            </div>
            <input type="text" placeholder='Buscar' id='barraBuscar'/>
            
            <button type='submit' id='botonBuscar'>
                <img src={lupa} alt="logoBuscar" />
            </button>
            <button type='submit' id='botonCuenta'>
                <img src={logoUsuario} alt='logoUsaurio'/>
                
            </button>
            <button type='submit' id='botonCarrito'>
                <img src={logoCarrito} alt="logoCarrito" />
            </button>
        </header>
        
        
    );
}

export default pagInicio;