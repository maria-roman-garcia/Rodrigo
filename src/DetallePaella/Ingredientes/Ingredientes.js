import React, { useContext, useState } from 'react';
import MyContext from '../../Context/Context';
import './Ingredientes.scss';
import Icons from '../../Icons/Icons';

const Ingredientes = () => {

    //Global Context
    const contextInfo = useContext(MyContext);
    const contextValue = contextInfo.contextValue;

    // modal para ver los ingredientes
    const [showIngredients, setShowIngredients] = useState(false);

    // cargamos la paella seleccionada en la pantalla anterior por id
    const miPaella = contextValue.allPaellas.find(paella => paella.id === contextValue.selectedPaellaId);
    const misAlergenos = contextValue.allAlergenos.filter(alergeno => miPaella.alergenos.includes(alergeno.id));

    // Numero de personas y paellas totales
    const [persons, setPersons] = useState(0)
    const [paellas, setPaellas] = useState(0)

    return (
        <div className="Ingredientes">
            <div className="row justifyCenter">
                <div className="ingredientesBox">
                    {showIngredients
                        ? <><p onClick={() => setShowIngredients(!showIngredients)} className="textoVerIngredientes">Ocultar ingredientes {Icons.FlechaArriba}</p>
                            {miPaella.ingredientes.map((ingrediente, index) =>
                                <div className="col-12 col-lg-6 ingredientesList" key={index}>
                                    <p>{ingrediente}</p>
                                </div>
                            )}</>
                        : <p onClick={() => setShowIngredients(!showIngredients)} className="textoVerIngredientes">Ver ingredientes {Icons.FlechaAbajo}</p>
                    }

                </div>
            </div>
            <div className="row alergenosRow">
                <div className="alergenos">
                    <div className="col-12 alergenosBox">
                        <h5>Alérgenos:</h5>
                        <div className="row alergenosItems">
                            {misAlergenos.length === 0
                                ? <p>No tiene alérgenos en la lista...¡A disfrutar!</p>
                                : 
                                    misAlergenos.map((item, index) =>
                                        <div className="col-4 col-lg-2 justifyCenter" key={index}>
                                            <img src={item.src} alt={item.name} />
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="row totalesPersonasPaellas">
                <div className="col-12 col-lg-6 numeroPersonasText">
                    <p>Total Número de Personas : </p>
                </div>
                <div className="col-12 col-lg-6 spaceAround">
                    <div className="total">{persons}</div>
                    <div onClick={() => setPersons(persons + 1)}>{Icons.Plus}</div>
                    <div onClick={() => setPersons(persons - 1)}>{Icons.Minus}</div>
                </div>
                <div className="col-12 col-lg-6 numeroPaellasText">
                    <p>Total Número de Personas : </p>
                </div>
                <div className="col-12 col-lg-6 spaceAround">
                    <div className="total">{paellas}</div>
                    <div onClick={() => setPaellas(paellas + 1)}>{Icons.Plus}</div>
                    <div onClick={() => setPaellas(paellas - 1)}>{Icons.Minus}</div>
                </div>
            </div>
            <div className="row totalPrice">
                <div>
                    <h4>Total: <span style={{ fontWeight: 'bold' }}>{miPaella.price * persons}</span> €</h4>
                </div>
            </div>
            <div className="row rowPedido">
                <div className="pedido">
                    <p>Añadir pedido</p>
                </div>
            </div>
        </div>
    )
}

export default Ingredientes;