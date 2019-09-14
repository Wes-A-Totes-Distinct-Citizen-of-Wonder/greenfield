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

    onLoginSubmit(event) {
        event.preventDefault();
        const user = this.state
        // debugger;
        return axios.post(`/login`, user)
        // console.log(newUser)
        // .then((newUser) => {
        //     console.log(newUser)
        // })
        .then(newUser => {
            console.log(newUser.data)
            // const userInfo = {
            //     email: newUser.data.email.toString(),
            //     username: newUser.data.username.toString(),
            //     userId: newUser.data.userId.toString(),
            //     business: newUser.data.business.toString()
            // }
            // alert(userInfo.email + " " + userInfo.business + " " + userInfo.username  + " " + userInfo.userId);
            this.props.changeUser(newUser.data);
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
