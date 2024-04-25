import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}> {/* Adjust height as needed */}
          <Col xs={12} md={6} lg={4}>
            <div className="mb-4">
              <h3 className="text-center">Connexion</h3>
            </div>
            <Form>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Control type="email" placeholder="Adresse email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Control type="password" placeholder="Mot de passe" />
              </Form.Group>

              <div className="d-grid gap-2 mb-3">
                <Button variant="primary" type="submit">
                  Se connecter
                </Button>
              </div>
            </Form>
            <div className="text-center">
              <Link to="/forgot-password">Mot de passe oublié?</Link>
            </div>
            <div className="text-center mt-3">
              Pas de compte? <Link to="/register">Inscrivez-vous</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
