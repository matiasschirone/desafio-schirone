import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export default function Nabvar() {

    const linkStyle = {
        margin: 0,
        padding: 0,
        display: "flex",
        justifycontent: "space-between",
    }

    return (
        <>
       
            <header className="header">
                <div className="logo">
                    <img src="imagen/logo.png" alt="logo" />
                </div>
                <ul className="nav-links" style={linkStyle}>
                    <li>
                       <Link className="nav-link active" to="/">Inicio</Link> 
                    </li>
                    <li>
                    <Link className="nav-link active" to="/productos"> Productos</Link>
                    </li>
                    <li>
                    <Link className="nav-link active" to="/"> Sobre Nosotros</Link>
                    </li>
                    <li>
                    <Link className="nav-link active" to="/"> Contacto</Link>
                    </li>
                </ul>

                <CartWidget count={0} />
                
            </header>
        
    
</>
    );
}

