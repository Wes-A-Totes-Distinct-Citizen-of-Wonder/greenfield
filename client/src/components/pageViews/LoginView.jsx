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
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

    onLoginSubmit() {
        event.preventDefault()
        const user = this.state
        axios.post(`/login`, user)
        .then(newUser => {
<<<<<<< HEAD
            console.log(newUser.data)
            alert(newUser.data);
            this.props.changeUser(newUser.data);
            event.preventDefault();
=======
        return this.props.changeUser(newUser.data);
>>>>>>> b667462be9294575296a96269103aed5595f1661
        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onLoginSubmit}>
                    <FormGroup>
                        <Label  style={{ color: 'white' }}>Username</Label>
                        <Input type='text' name='username' id='user-login' value={this.state.username} onChange={e => this.setState({ username: e.target.value })}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label  style={{ color: 'white' }}>Password</Label>
                        <Input type='password' name='password' id='password' value={this.state.password} onChange={e => this.setState({ password: e.target.value })}></Input>
                    </FormGroup>
                    <Button type="submit" color="primary" block>Submit</Button>
                </Form>
            </div>
            
        );
    }
};

export default LoginView;
