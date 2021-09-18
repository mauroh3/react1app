import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">La Tienda</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Categoria 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Nosotros</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
