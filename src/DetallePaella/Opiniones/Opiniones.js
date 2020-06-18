import React, { useContext } from 'react';
import './Opiniones.scss';
import MyContext from '../../Context/Context';

const Opiniones = () => {

    //Global Context
    const contextInfo = useContext(MyContext);
    const contextValue = contextInfo.contextValue;

    // cargamos la paella seleccionada en la pantalla anterior por id
    const miPaella = contextValue.allPaellas.find(paella => paella.id === contextValue.selectedPaellaId);

    return (
        <div className="Opiniones">
            <div className="row">
                {miPaella.opinionesMiPaella.map(opinion =>
                    <div className="col-12 opinionCard">
                        <div className="row nombre">
                            {opinion.nombre}
                        </div>
                        <div className="row">
                            {opinion.opinion}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Opiniones;