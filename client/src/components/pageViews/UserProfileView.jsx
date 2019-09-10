import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

class UserProfileView extends React.Component {
    constructor(props) {
        super(props);
        const { user } = this.props;
        this.state = {
            currUser : user
        };
    }

    render() {
        const { currUser } = this.state;
        return (
            <h1>{currUser.username}</h1>
            );
    }
}

export default UserProfileView;