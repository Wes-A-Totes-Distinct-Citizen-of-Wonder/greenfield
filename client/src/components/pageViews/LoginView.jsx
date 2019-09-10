import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        return (
            <div>
                <h1>LOGIN HERE!!!</h1>
                <Form>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input type='textarea' name='user' id='user-login'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type='textarea' name='password' id='password'></Input>
                    </FormGroup>
                    <Button>Submit!</Button>
                </Form>
            </div>
            
        );
    }
};

export default LoginView;
