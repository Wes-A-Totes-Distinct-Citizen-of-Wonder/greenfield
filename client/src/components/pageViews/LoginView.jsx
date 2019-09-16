import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { changeUser } from '../../index.jsx';

import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Jumbotron } from 'reactstrap';

class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }
    // triggers when "submit" button is clicked
    onLoginSubmit() {
        event.preventDefault()
        // prevents the refresh of the page
        const user = this.state
        axios.post(`/login`, user)
        .then(newUser => {
            // changes user state in idex.jsx
            return this.props.changeUser(newUser.data);
        })
        .then(() => {
            
        })
        .catch(err => alert('incorrect username or password'))
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
