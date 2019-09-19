import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { black, logOrSign } from './../Style.jsx';
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
            showPasswordError: false
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
                // takes user_id from response
                const newUser = {
                    username: user.username,
                    email: user.email,
                    business: user.business,
                    user_id: response.data.user_id
                }
                // sets the signed in user info
                this.props.changeUser(newUser);
            })
        } else {
          this.setState({
            showPasswordError: !this.state.showPasswordError
          });
        }
    }

    render() {
        const state = this.state;
        return (
            // Keeps track of all input info and stores it in the state, then upon submit, sends the state object to the server
            <center>
            <br />
            <Form style={logOrSign} onSubmit={(e) => {preventDefault(e)}}>
                <FormGroup row>
                    <Label style={black} >Create User Name</Label>
                    <Col>
                      <Input type='text' name='username' id='user-registration' value={state.username} onChange={e => this.setState({ username: e.target.value })}></Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label style={black} >Create Password</Label>
                    <Col>
                      <Input type='password' name='password' id='password-registration' value={state.password} onChange={e => this.setState({ password: e.target.value })}></Input>
                    </Col>
                      <FormText color="muted">must be between 6 and 16 characters using numbers and letters</FormText>
                </FormGroup>
                <FormGroup row>
                    <Label style={black} >Verify Password</Label>
                    <Col>
                      <Input type='password' name='password-verify' id='password-registration-verify' value={state.verifyPass} onChange={e => this.setState({ verifyPass: e.target.value })}></Input>
                      {this.state.showPasswordError ? <text style={{color: 'red'}}>Passwords do not match</text> : null }
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label style={black} >Enter Email</Label>
                    <Col>
                      <Input type='email' name='email' id='email-registration' value={state.email} onChange={e => this.setState({ email: e.target.value })}></Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label style={black} >Enter Place of Business(Optional)</Label>
                    <Col>
                      <Input type='text' name='business' id='business-registration' value={state.business} onChange={e => this.setState({ business: e.target.value })}></Input>
                    </Col>
                </FormGroup>
                <Button type="button" color="primary" block onClick={(e) => this.onSignUpSubmit(e)} block>Submit</Button>
            </Form>
            </center>
        );
    }
};

export default SignUpView;
