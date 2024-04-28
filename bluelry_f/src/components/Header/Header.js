import React from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Header = () => {
  const logoUrl = 'https://asourrakhbucket.s3.eu-west-3.amazonaws.com/logo_bluelry_transp.png';
  const altText = 'logo_bluelry';

  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/"><Logo src={logoUrl} alt={altText} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/catalogue">Catalogue</Nav.Link>
            <Nav.Link as={Link} to="/cart">Panier</Nav.Link>
            <Nav.Link as={Link} to="/login">Connexion</Nav.Link>
            <Nav.Link as={Link} to="/register">Inscription</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" />
            <Button variant="outline-success">Rechercher</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
