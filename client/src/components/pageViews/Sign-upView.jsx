import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import Axios from "axios";

class SignUpView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            verifyPass: '',
            email: '',
            business: '',
        };
        this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
    }
        // handles the information from the form upon clicking on the submit
    // called when clicking "submit" button
    onSignUpSubmit(event) {
        const user = this.state;
        if (user.password === user.verifyPass) {
            // makes sure passwords are the same
            return axios.post('/signUp', user)
            .then(() => {
                // if successful logs user in automatically
                return axios.post(`/login`, { username: user.username, password: user.password })
            })
            .then((response) => {
                // takes userId from response
                const newUser = {
                    username: user.username,
                    email: user.email,
                    business: user.business,
                    userId: response.data.userId
                }
<<<<<<< HEAD
                // sets the signed in user info
=======
>>>>>>> ad009bff0f965ee65c75a9a25a17207cad4aaf06
                this.props.changeUser(newUser);
            })
        } else {
            alert("Your passwords don't match!")
        }
    }

    render() {
        const state = this.state;
        return (
            // Keeps track of all input info and stores it in the state, then upon submit, sends the state object to the server
            <Form onSubmit={(e) => {preventDefault(e)}}>
                <FormGroup>
                    <Label style={{ color: 'white' }} >Create User Name</Label>
                    <Input type='text' name='username' id='user-registration' value={state.username} onChange={e => this.setState({ username: e.target.value })}></Input>
                </FormGroup>
                <FormGroup>
                    <Label style={{ color: 'white' }} >Create Password</Label>
                    <Input type='password' name='password' id='password-registration' value={state.password} onChange={e => this.setState({ password: e.target.value })}></Input>
                    <FormText color="muted">password must be between 6 and 16 characters only using numbers and alphabetical characters</FormText>
                </FormGroup>
                <FormGroup>
                    <Label style={{ color: 'white' }} >Verify Password</Label>
                    <Input type='password' name='password-verify' id='password-registration-verify' value={state.verifyPass} onChange={e => this.setState({ verifyPass: e.target.value })}></Input>
                </FormGroup>
                <FormGroup>
                    <Label style={{ color: 'white' }} >Enter Email</Label>
                    <Input type='email' name='email' id='email-registration' value={state.email} onChange={e => this.setState({ email: e.target.value })}></Input>
                </FormGroup>
                <FormGroup>
                    <Label style={{ color: 'white' }} >Enter Place of Business(Optional)</Label>
                    <Input type='text' name='business' id='business-registration' value={state.business} onChange={e => this.setState({ business: e.target.value })}></Input>
                </FormGroup>
                <Button type="button" color="primary" block onClick={(e) => this.onSignUpSubmit(e)} block>Submit</Button>
            </Form>
            // </div>
        );
    }
};

export default SignUpView;
