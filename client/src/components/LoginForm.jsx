//this file is doing nothing, Wes and i overlapped
//contains functionallity i will copy over later soleave for no.
//taylor



import React from 'react';
import { Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: false,  //username and session?
        }
    }

    handleValidSubmit(event, values) {
        this.setState({email: values.email}) //needs tobe edited 
        console.log('Login Succesful')
    };

    handleInvalidSubmit (event, errors, values) {
        this.setState({ email: values.email, error: true});
        console.log('Login failed');
    };

    render() {
        return (
            <AvForm
                onValidSubmit={this.handleValidSubmit}
                onInvaidSubmit={this.handleInvalidSubmit}
            >
                <AvField
                    name='email'
                    label='Email'
                    type='text'
                    validate={{
                        required: true,
                        email: true
                    }}
                />

                <AvField
                    name='password'
                    label='password'
                    type='password'
                    validate={{
                        required: {
                            value: true,
                            errorMessage: 'Please enter your password'
                        },
                        pattern: {
                            value: '^[A-Za-z0-9]+$',
                            errorMessage: 'Your password must be composed of only letters and numbers'
                        },
                        minLength: {
                            value: 6,
                            errorMessage: 'Your password must be between 6 and 16 characters'
                        },
                        maxLength: {
                            value: 16,
                            errorMessage: 'Your password must be between 6 and 16 characters'
                        }
                    }}
                />
                <Button id='submit'>Submit</Button>
            </AvForm>
        )
    }
}