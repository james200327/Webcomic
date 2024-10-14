import '../Estilos/inicioSesion.css';
const InicioSesion = () => {
    return( 
      <div class="contendor_principal">
            <h1>Iniciar sesion</h1>
            <form>
              <div class="contendor_usuario">
                <label>Nombre:</label><br />
                <input type="text" />
              </div>
              <div class="contendor_contrasenia">
                <label>Contraseña:</label><br />
                <input type="password" />
              </div>
              <button type="submit">Iniciar sesión</button>
            </form>
      </div>
    );
}

export default InicioSesion;