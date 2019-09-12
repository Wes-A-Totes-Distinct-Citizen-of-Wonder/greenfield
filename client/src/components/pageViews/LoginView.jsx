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

    onLoginSubmit() {
        const user = this.state
        return axios.post('/users', user)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onLoginSubmit}>
                    <FormGroup>
                        <Label  style={{ color: 'white' }}>Username</Label>
                        <Input type='text' name='username' id='user-login' value={state.username} onChange={e => this.setState({ username: e.target.value })}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label  style={{ color: 'white' }}>Password</Label>
                        <Input type='password' name='password' id='password' value={state.password} onChange={e => this.setState({ password: e.target.value })}></Input>
                    </FormGroup>
                    <Button type="submit" color="primary" block>Submit</Button>
                </Form>
            </div>
            
        );
    }
};

export default LoginView;
