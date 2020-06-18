import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Login from './Login/Login';
import Pantallaprincipal from './Pantallaprincipal/Pantallaprincipal';
import DetallePaella from './DetallePaella/DetallePaella';
import { ContextProvider } from './Context/Context';
// Imagenes paellas
import paella1 from './Img/Paellas/paella1.png';
import paella2 from './Img/Paellas/paella2.png';
import paella3 from './Img/Paellas/paella3.png';
import paella4 from './Img/Paellas/paella4.png';
// imagenes alergenos
import altramuz from './Img/Alergenos/ALTRAMUZ.png';
import apio from './Img/Alergenos/APIO.png';
import cacahuetes from './Img/Alergenos/CACAHUETES.png';
import cerealesGluten from './Img/Alergenos/CEREALESCONGLUTEN.png';
import crustaceos from './Img/Alergenos/CRUSTACEOS.png';
import frutosSecos from './Img/Alergenos/FRUTOSSECOS.png';
import huevos from './Img/Alergenos/HUEVOS.png';
import lacteos from './Img/Alergenos/LACTEOS.png';
import moluscos from './Img/Alergenos/MOLUSCOS.png';
import mostaza from './Img/Alergenos/MOSTAZA.png';
import pescado from './Img/Alergenos/PESCADO.png';
import sesamos from './Img/Alergenos/SESAMOS.png';
import soja from './Img/Alergenos/SOJA.png';
import sulfitos from './Img/Alergenos/SULFITOS.png';
// imagenes cabecera paellas
import cabecera1 from './Img/Paellas/cabecera1.jpg';
import cabecera2 from './Img/Paellas/cabecera2.jpg';
import cabecera3 from './Img/Paellas/cabecera3.jpg';
import cabecera4 from './Img/Paellas/cabecera4.jpg';
// imagenes de galeria
import galeria1 from './Img/Galeria/galeria1.jpg';
import galeria2 from './Img/Galeria/galeria2.jpg';
import galeria3 from './Img/Galeria/galeria3.jpg';
import galeria4 from './Img/Galeria/galeria4.jpg';
import galeria5 from './Img/Galeria/galeria5.jpg';

const App = () => {

  const [contextValue, setContextValue] = useState(
    {
      allPaellas: [
        {
          id: 1,
          title: "Paella Valenciana",
          description: "Las características peculiares de esta receta de paella valenciana son la presencia de la de pollo y conejo, y ajo en el sofrito. Es una de las recetas más populares.",
          src: paella1,
          alt: "paella valenciana",
          price: 28,
          alergenos: [2,5,7,8],
          fotoCabecera: cabecera1,
          ingredientes: [
            "Arroz bomba",
            "Pollo de corral",
            "Conejo",
            "Judía verde plana",
            "Garrofó",
            "Alcachofa (opcional)",
            "Caracoles",
            "Aceite de oliva virgen extra",
            "Pimentón dulce",
            "Tomate triturado",
            "Azafrán",
            "Romero fresco",
            "Sal"
          ],
          galeriaImagenes: [galeria1, galeria4, galeria5, galeria2],
          opinionesMiPaella : [
            {
              nombre: "Juanjo Marquez Gamo",
              opinion: "La mejor paella que he probado. Buen servicio."
            },
            {
              nombre: "Arturo Perez",
              opinion: "Es la mejor paella que he probado hasta ahora, sin duda repetiré. En tan solo media hora ya estaba en casa!!"
            }
          ]
        },
        {
          id: 2,
          title: "Paella Negra",
          description: "Este plato, está cocinado con una base de pescados y mariscos. Pertenece a los platos más populares de la cocina tradicional española y por supuesto no podía faltar entre la selección de paellas de nuestra carta",
          src: paella2,
          alt: "paella2",
          price: 25,
          alergenos: [7,1,2,10,11],
          fotoCabecera: cabecera2,
          ingredientes: [
            "Arroz bomba",
            "Cebolla",
            "Vino blanco",
            "Pimentón dulce",
            "Anillas de calamar",
            "Tinta de calamar",
            "Gambas pequeñas",
            "Mejillones",
            "Caldo de pescado",
            "Aceite de oliva"
          ],
          galeriaImagenes: [galeria2, galeria3, galeria4, galeria1],
          opinionesMiPaella : [
            {
              nombre: "Julia García Fernandez",
              opinion: "Es la mejor paella que he probado hasta ahora, sin duda repetiré. En tan solo media hora ya estaba en casa!!"
            },
            {
              nombre: "Miguel Cuenca",
              opinion: "Ha superado todas mis expectativas, comida de buena calidad en casa en tiempo récord."
            }
          ]
        },
        {
          id: 3,
          title: "Paella de Marisco",
          description: "La paella de marisco es una de las más populares. Los ingredientes marinos aportan un sabor muy potente y una textura característicos de esta elaboración, cominando muy bien con el arroz.",
          src: paella3,
          alt: "paella3",
          price: 32,
          alergenos: [],
          fotoCabecera: cabecera3,
          ingredientes: [
            "Arroz bomba",
            "Calamar y sepia",
            "Gambas",
            "cigalas",
            "Pimentón",
            "Tomate triturado",
            "Ajo",
            "Colorante alimentario",
            "Caldo de pescado",
            "Aceite de oliva",
            "Cebolla"
          ],
          galeriaImagenes: [galeria1, galeria2, galeria3, galeria4, galeria5],
          opinionesMiPaella : [
            {
              nombre: "Juanjo Marquez Gamo",
              opinion: "La mejor paella que he probado. Buen servicio."
            },
            {
              nombre: "Arturo Perez",
              opinion: "Es la mejor paella que he probado hasta ahora, sin duda repetiré. En tan solo media hora ya estaba en casa!!"
            },
            {
              nombre: "Julia García Fernandez",
              opinion: "Muy bien todo"
            },
            {
              nombre: "Miguel Cuenca",
              opinion: "Ha superado todas mis expectativas, comida de buena calidad en casa en tiempo récord."
            }
          ]
        },
        {
          id: 4,
          title: "Paella caldosa de cangrejos y berberechos",
          description: "Los cangrejos de río le aportan un intenso sabor a marisco a este arroz y la compañía del berberecho es inmejorable.",
          src: paella4,
          alt: "paella4",
          price: 20,
          alergenos: [1,7,9],
          fotoCabecera: cabecera4,
          ingredientes: [
            "Arroz redondo",
            "Cangrejos de río",
            "Berberechos",
            "Tomate concentrado",
            "Guindilla",
            "Cebolla",
            "Pimiento verde",
            "Pimiento rojo",
            "Caldo de pescado",
            "Aceite de oliva",
            "Ajo",
            "Perejil fresco"
          ],
          galeriaImagenes: [galeria1, galeria4],
          opinionesMiPaella : [
            {
              nombre: "Juanjo Marquez Gamo",
              opinion: "La mejor paella que he probado. Buen servicio."
            },
            {
              nombre: "Arturo Perez",
              opinion: "Es la mejor paella que he probado hasta ahora, sin duda repetiré. En tan solo media hora ya estaba en casa!!"
            },
            {
              nombre: "Miguel Cuenca",
              opinion: "Ha superado todas mis expectativas, comida de buena calidad en casa en tiempo récord."
            }
          ]
        }
      ],
      allAlergenos: [
        {
          id: 1,
          name:"altramuz",
          src: altramuz
        },
        {
          id: 2,
          name:"apio",
          src: apio
        },
        {
          id: 3,
          name:"cacahuetes",
          src: cacahuetes
        },
        {
          id: 4,
          name:"cereales gluten",
          src: cerealesGluten
        },
        {
          id: 5,
          name:"crustaceos",
          src: crustaceos
        },
        {
          id: 6,
          name:"frutos secos",
          src: frutosSecos
        },
        {
          id: 6,
          name:"huevos",
          src: huevos
        },
        {
          id: 7,
          name:"lacteos",
          src: lacteos
        },
        {
          id: 8,
          name:"moluscos",
          src: moluscos
        },
        {
          id: 9,
          name:"mostaza",
          src: mostaza
        },
        {
          id: 10,
          name:"pescado",
          src: pescado
        },
        {
          id: 11,
          name:"sesamos",
          src: sesamos
        },
        {
          id: 12,
          name:"soja",
          src: soja
        },
        {
          id: 13,
          name:"sulfitos",
          src: sulfitos
        }
        ],
      selectedPaellaId: 1,
      miPedido:[
        {
          idPaella: '',
          numeroPersonas: 0,
          numeroPaellas: 0
        }
      ]
    }
  );

  return (
    <ContextProvider value={{ contextValue, setContextValue }}>
      <Router>
        <Route path='/' exact component={Login} />
        <Route path="/Pantallaprincipal" component={Pantallaprincipal} />
        <Route path='/DetallePaella' component={DetallePaella} />
      </Router>
    </ContextProvider>
  )

}

export default App;
