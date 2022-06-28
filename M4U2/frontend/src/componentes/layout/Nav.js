import React from 'react';

import { Link } from 'react-router-dom';

const Nav = (props) => {
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/noticias">Noticias</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/separte">Sé Parte</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </div>
    );
}
export default Nav;