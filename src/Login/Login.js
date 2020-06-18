import React from 'react';
import './Login.scss';
import logoRodrigo from '../Img/logoRodrigo.png';
import {
     Link
  } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container-fluid Login">
            <div className="row filter">
                <div className="col-12 logo justifyCenter">
                    <img src={logoRodrigo} alt="Logo Rodrigo" />
                </div>
                <div className="col-12 justifyCenter">
                    <div className="blurFilter">
                        <div className="row infoLogin">
                            <div className="col-12">
                                <label for="email">Nombre / Correo electrónico</label>
                            </div>
                            <div className="col-12">
                                <input type="text" id="email" name="email" placeholder="Email / Usuario..." />
                            </div>
                            <div className="col-12">
                                <label for="contraseña">Contraseña</label>
                            </div>
                            <div className="col-12">
                                <input type="text" id="contraseña" name="contraseña" placeholder="Contraseña..." />
                            </div>
                            <div className="col-12">
                                <p className="contraseñaOlvidada">¿Has olvidado tu contraseña?</p>
                            </div>
                        </div>
                        <div className="row entraButton">
                            <div className="col-12 justifyCenter">
                                <Link to="/Pantallaprincipal">
                                    <button>ENTRAR</button>
                                </Link>
                            </div>
                            <div className="col-12 justifyCenter">
                                <p className="creaCuenta">¿Aún no tienes cuenta? <span>¡ÚNETE!</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;