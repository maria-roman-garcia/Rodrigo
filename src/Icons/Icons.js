import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faFilter, faSearch, faTimes, faHome, faUserAlt, faUtensils, faShoppingCart, faSignOutAlt, faArrowLeft, faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {faPlusSquare, faMinusSquare} from '@fortawesome/free-regular-svg-icons';

const Menu = <FontAwesomeIcon icon={faBars} size="lg" color="#FF881C" />
const Filter = <FontAwesomeIcon icon={faFilter} size="lg" color="#FF881C" />
const Search = <FontAwesomeIcon icon={faSearch} size="lg" color="#FF881C" />
const Times = <FontAwesomeIcon icon={faTimes} size="lg" color="#FF881C" />
const Home = <FontAwesomeIcon icon={faHome} size="lg" color="white" />
const Perfil = <FontAwesomeIcon icon={faUserAlt} size="lg" color="white" />
const Pedidos = <FontAwesomeIcon icon={faUtensils} size="lg" color="white" />
const Carrito = <FontAwesomeIcon icon={faShoppingCart} size="lg" color="white" />
const CerrarSesion = <FontAwesomeIcon icon={faSignOutAlt} size="lg" color="white" />
const Back = <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#FF881C" />
const Plus = <FontAwesomeIcon icon={faPlusSquare} size="lg" color="#FF881C" />
const Minus = <FontAwesomeIcon icon={faMinusSquare} size="lg" color="#FF881C" />
const FlechaAbajo = <FontAwesomeIcon icon={faChevronDown} size="lg" color="#FF881C" />
const FlechaArriba = <FontAwesomeIcon icon={faChevronUp} size="lg" color="#FF881C" />

export default {
    Menu,
    Filter,
    Search,
    Times,
    Home,
    Perfil,
    Pedidos,
    Carrito,
    CerrarSesion,
    Back,
    Plus,
    Minus,
    FlechaAbajo,
    FlechaArriba
}