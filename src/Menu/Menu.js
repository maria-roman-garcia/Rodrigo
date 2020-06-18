import React, { useState } from 'react';
import './Menu.scss';
import logoRodrigo from '../Img/logoRodrigo.png';
import Icons from '../Icons/Icons';
import { Link } from 'react-router-dom';

const Menu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="Menu">
            <div className="row Menu">
                <Link to="/Pantallaprincipal">
                    <img src={logoRodrigo} alt="logoRodrigo" className="logoRodrigo" />
                </Link>
                <span className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? Icons.Times : Icons.Menu}</span>
            </div>
            {menuOpen &&
                <div className="row Menu_hamburger">
                    <div className="Menu_hamburger_sections">
                        <Link to="/Pantallaprincipal" style={{ textDecoration: 'none', color: 'white' }}>
                            <p>{Icons.Home} Home</p>
                        </Link>
                        <p>{Icons.Perfil} Mi perfil</p>
                        <p>{Icons.Pedidos} Mis pedidos</p>
                        <p>{Icons.Carrito} Carrito de la compra</p>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            <p>{Icons.CerrarSesion} Cerrar sesión</p>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Menu;