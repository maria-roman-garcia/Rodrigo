import React, {useContext} from 'react';
import './Galeria.scss';
import MyContext from '../../Context/Context';

const Galeria = () =>{

    //Global Context
    const contextInfo = useContext(MyContext);
    const contextValue = contextInfo.contextValue;

    // cargamos la paella seleccionada en la pantalla anterior por id
    const miPaella = contextValue.allPaellas.find(paella => paella.id === contextValue.selectedPaellaId);

    return(
        <div className="Galeria">
            <div className="row displayGaleria">
                {miPaella.galeriaImagenes.map(imagen => 
                <div className="col-11 col-lg-5 galeriaImagen" style={{backgroundImage: `url(${imagen})`}}></div>
                )}
            </div>
        </div>
    )
}

export default Galeria;