import React, {useContext} from 'react';
import './InfoCard.scss';
import {Link} from 'react-router-dom';
import MyContext from '../Context/Context';

const InfoCard = (props) => {

    //Global Context
    const contextInfo = useContext(MyContext);
    const contextValue = contextInfo.contextValue;
    const setContextValue = contextInfo.setContextValue;

    return(
        <div className="InfoCard">
            <div className="row">
                <div className="col-7 textCard">
                <div className="row">
                    <h5 className="paellaTitle">{props.title}</h5>
                </div>
                <div className="row">
                    <p>{props.description}</p>
                </div>
                <div className="row">
                    <Link to="/DetallePaella">
                        <button className="paellaButton" onClick={()=> setContextValue({...contextValue, selectedPaellaId:props.id})}>Ver ingredientes</button>
                    </Link>
                </div>
            </div>
            <div className="col-5 withoutPadding">
                <div className="imgCard">
                    <img src={props.src} alt={props.alt}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default InfoCard;