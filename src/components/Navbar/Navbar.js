import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function Nabvar() {
  return (
    <Navbar bg="ligth" expand="lg">
      <Container>
        <Link className="nav-link active" to="/">
          <img src="/imagen/logo.png" alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-link active" to="/Contactos">
              Contacto
            </Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <Link className="nav-link active" to="/productos">
                Todos los productos
              </Link>
              <NavDropdown.Divider />
              <Link className="nav-link active" to="/categoria/guitarra">
                Guitarras
              </Link>
              <NavDropdown.Divider />
              <Link className="nav-link active" to="/categoria/amplificador">
                Amplificadores
              </Link>
              <NavDropdown.Divider />
              <Link className="nav-link active" to="/categoria/pedalera">
                Pedales
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget count={0} />
    </Navbar>

  );
}
