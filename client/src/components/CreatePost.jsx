import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: [],
            description: '',
            location: {
                street: '',
                city: '',
                state: '',
                zip: '',
                geolocation: {
                    lat: '',
                    lng: ''
                },
            }
        };
        this.makePost = this.makePost.bind(this);
    }

    makePost() {
        // check if user is logged in, if so do this vvvv
        console.log(post)
        /// else prompt user to login/ sign-up
    }

    render() {
        return (
            <Form onSubmit={this.makePost}>
                <FormGroup>
                    <Label for="post-img" style={{ color: 'white' }}>Image File</Label>
                    <Input type="file" name="file" id="post-img" style={{ color: 'white' }} value={this.state.img} />
                    <FormText color="muted">
                        Please include an image(s) of the materials you wish to share.
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="post-desc" style={{ color: 'white' }}>Description</Label>
                    <Input type="textarea" name="text" id="post-desc" value={this.state.description} placeholder="limit of 255 characters" />
                </FormGroup>
                <FormGroup check>
                    <Label check for="post-tags" style={{ color: 'white' }}>
                        <Col sm="1"><Input type="checkbox" />{'Lumber'}</Col>
                    </Label>
                    <Label check for="post-tags" style={{ color: 'white' }}>
                        <Col sm="1"><Input type="checkbox" />{'Metal'}</Col>
                    </Label>
                    <Label check for="post-tags" style={{ color: 'white' }}>
                        <Col sm="1"><Input type="checkbox" />{'Concrete'}</Col>
                    </Label>
                    <Label check for="post-tags" style={{ color: 'white' }}>
                        <Col sm="1"><Input type="checkbox" />{'Glass'}</Col>
                    </Label>
                    <Label check for="post-tags" style={{ color: 'white' }}>
                        <Col sm="1"><Input type="checkbox" />{'Piping'}</Col>
                    </Label>
                    <FormText color="muted">
                        Please select at least one related tag.
                    </FormText>
                </FormGroup>
                <h1 />
                <FormGroup>
                    <Label for="post-loc" style={{ color: 'white' }}>Location</Label>
                    <Input type="text" name="text" id="address" placeholder="address" />
                </FormGroup>
                <Row>
                    <Col sm='6'><Input type="text" name="city" id="city" placeholder="city" /></Col>
                    <Col sm='4'><Input type="text" name="text" id="state" placeholder="state" /></Col>
                    <Col sm='2'><Input type="text" name="text" id="zip-code" placeholder="zip" /></Col>
                </Row>
                <hr />
                <FormGroup>
                    <Button type="submit" color="primary" block>Submit</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default CreatePost;