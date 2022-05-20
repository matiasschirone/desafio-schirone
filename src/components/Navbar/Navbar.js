import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function Nabvar() {

    const linkStyle = {
        margin: 0,
        padding: 0,
        display: "flex",
        justifycontent: "space-between",
    }

    return (

        <Navbar bg="light" expand="lg">
  <Container>
    <Link className="nav-link active" to="/"><img src="/imagen/logo.png" alt="logo" /></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className="nav-link active" to="/">Home</Link>
        <Link className="nav-link active" to="/">Contacto</Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <Link className="nav-link active" to="/productos">Todos los productos</Link>
          <NavDropdown.Divider />
          <Link className="nav-link active" to="/productos">Guitarras</Link>
          <NavDropdown.Divider />
          <Link className="nav-link active" to="/:tipocategoria">Amplificadores</Link>
          <NavDropdown.Divider />
          <Link className="nav-link active" to="/categoria">Pedales</Link>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        /*<header className="header">
                <div className="logo">
                    <img src="/imagen/logo.png" alt="logo" />
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

            <CartWidget count={0} />}

        </header>*/


        
    );
}

