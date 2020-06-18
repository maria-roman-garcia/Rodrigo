import React, { useState, useContext } from 'react';
import './Pantallaprincipal.scss';
import Icons from '../Icons/Icons';
import Menu from '../Menu/Menu';
import InfoCard from '../InfoCard/InfoCard';
import MyContext from '../Context/Context';

const Pantallaprincipal = () => {

     //Global Context
     const contextInfo = useContext(MyContext);
     const contextValue = contextInfo.contextValue;


    const [nombrePaella, setNombrePaella] = useState("");
    const [filtroOpen, setFiltroOpen] = useState(false);

    return (
        <div className="container-fluid PantallaPrincipal">
            <Menu />
            {filtroOpen &&
                <div className="row filterActive">
                    <div className="col-12 filterContain">
                        <div className="row cerrarFiltro" onClick={() => setFiltroOpen(!filtroOpen)}>{Icons.Times}</div>
                        <div className="row">
                            <h5 className="titleFiltro">Filtro</h5>
                        </div>
                        <div className="row">
                            <p>¿Tienes alguna alergia? Te ayudamos a encontrar tu paella ideal</p>
                        </div>
                        <div className="row">
                            {contextValue.allAlergenos.map(alergeno =>
                                <div className="col-4 col-lg-3 alergiaItem">
                                    <div className="row">
                                        <img src={alergeno.src} alt="alergeno" />
                                    </div>
                                    <div className="row alergiaInput">
                                        <input type="checkbox" />
                                    </div>
                                </div>)}
                        </div>
                        <div className="row filtroButton">
                            <button>Aplicar filtro</button>
                        </div>
                    </div>
                </div>
            }
            <div className="row searchAndFilter">
                <div className="filter">
                    <span className="filterBorder" onClick={() => setFiltroOpen(!filtroOpen)}>
                        {Icons.Filter}
                    </span>
                </div>
                <div className="search">
                    <input type="text" onChange={(e) => setNombrePaella(e.target.value)} />
                    {Icons.Search}
                </div>
            </div>

            {contextValue.allPaellas.filter(paella => paella.title.toLocaleLowerCase().includes(nombrePaella.toLocaleLowerCase())).map((paella, index) =>
                <InfoCard key={index} title={paella.title} description={paella.description} src={paella.src} alt={paella.alt} id={paella.id}/>
            )}
        </div>
    )
}

export default Pantallaprincipal;