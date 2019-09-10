import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

class SignUpView extends React.Component {
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
                <h1>Sign-up HERE!!!</h1>
                <Form>
                    <FormGroup>
                        <Label>Create User Name</Label>
                        <Input type='textarea' name='username' id='user-registration'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Create Password</Label>
                        <Input type='textarea' name='password' id='password-registration'></Input>
                        <p>password must be between 6 and 16 characters only using numbers and alphabetical characters</p>
                    </FormGroup>
                    <FormGroup>
                        <Label>Re-Enter Password</Label>
                        <Input type='textarea' name='password-verify' id='password-registration-verify'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Enter Email</Label>
                        <Input type='textarea' name='email' id='email-registration'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Enter Place of Business(Optional)</Label>
                        <Input type='textarea' name='business' id='business-registration'></Input>
                    </FormGroup>
                    <Button>Finish Registration</Button>
                </Form>
            </div>
        );
    }
};

export default SignUpView;
