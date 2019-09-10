import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Jumbotron, Card, CardBody } from 'reactstrap';
import LoginForm from "./components/loginForm.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = (props) => (
    return(
        <div classname='Login'>
            <Container>
                <Row>
                    <Col />
                    <Col lg='8'>
                        <Jumbotron>
                            <h3>
                                <u>Sign In</u>
                            </h3>
                            <hr />
                            <Card>
                                <CardBody>
                                    <LoginForm />
                                </CardBody>
                            </Card>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    )
);

export default Login;