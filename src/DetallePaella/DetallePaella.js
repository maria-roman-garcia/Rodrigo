import React, { useContext, useState } from 'react';
import './DetallePaella.scss';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import Icons from '../Icons/Icons';
import MyContext from '../Context/Context';
import Ingredientes from './Ingredientes/Ingredientes';
import Galeria from './Galeria/Galeria';
import Opiniones from './Opiniones/Opiniones';

const DetallePaella = () => {

    //Global Context
    const contextInfo = useContext(MyContext);
    const contextValue = contextInfo.contextValue;

    // cargamos la paella seleccionada en la pantalla anterior por id
    const miPaella = contextValue.allPaellas.find(paella => paella.id === contextValue.selectedPaellaId);

    // Menu con switchcase para renderizar el apartado correspondiente
    const [itemSelected, setItemSelected] = useState('Ingredientes');

    const showMenuItem = (menuItem) => {
        switch (menuItem) {
            case 'Ingredientes':
                return (<Ingredientes />)
            case 'Galeria':
                return <Galeria />
            default:
                return <Opiniones />
        }
    }

    return (
        <div className="DetallePaella">
            <Menu />
            {/* Inicio cabecera */}
            <div className="row cabecera" style={{ backgroundImage: `url(${miPaella.fotoCabecera})` }}>
                <div className="col-12 filter">
                    <div className="row backArrow">
                        <Link to="/Pantallaprincipal">
                            {Icons.Back}
                        </Link>
                    </div>
                    <div className="row title">
                        <h5>{miPaella.title}</h5>
                    </div>
                    <div className="row text">
                        <p>{miPaella.description}</p>
                    </div>
                </div>
            </div>
            <div className="row rowPrice">
                <div className="price">
                    <p>{miPaella.price} €</p>
                </div>
            </div>
            {/* Fin cabecera */}
            <div className="row menuOptions">
                <div onClick={() => setItemSelected('Ingredientes')}>
                    <p className={itemSelected === "Ingredientes" ? 'selected' : undefined}>Ingredientes</p>
                </div>
                <div onClick={() => setItemSelected('Galeria')}>
                    <p className={itemSelected === "Galeria" ? 'selected' : undefined}>Galeria</p>
                </div>
                <div onClick={() => setItemSelected('Opiniones')}>
                    <p className={itemSelected === "Opiniones" ? 'selected' : undefined}>Opiniones</p>
                </div>
            </div>
            {showMenuItem(itemSelected)}
        </div>
    )
}

export default DetallePaella;