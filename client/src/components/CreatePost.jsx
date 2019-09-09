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
                address: '',
                city: '',
                state: '',
                zip: '',
                geolocation: {
                    lat: '',
                    lng: ''
                },
            }
        };
        this.onPostSubmit = this.onPostSubmit.bind(this);
    }

    onPostSubmit() {
        // check if user is logged in, if so do this vvvv
        alert(JSON.stringify(this.state, null, " "))
        /// else prompt user to login/ sign-up
    }

    render() {
        return (
            <Form onSubmit={this.onPostSubmit}>
                <FormGroup>
                    <Label for="post-img" style={{ color: 'white' }}>Image File</Label>
                    <Input type="file" name="file" id="post-img" style={{ color: 'white' }} value={this.state.img} onChange={e => this.setState({ img: e.target.value })}/>
                    <FormText color="muted">
                        Please include an image(s) of the materials you wish to share.
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="post-desc" style={{ color: 'white' }}>Description</Label>
                    <Input type="textarea" name="text" id="post-desc" value={this.state} onChange={e => this.setState({ description: e.target.value })}placeholder="limit of 255 characters" />
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
                    </FormText>f
                </FormGroup>
                <h1 />
                <FormGroup>
                    <Label for="post-loc" style={{ color: 'white' }}>Location</Label>
                    <Input type="text" name="text" id="address" placeholder="address" value={this.state.location.address} onChange={e => this.setState.location({ address: e.target.value })}/>
                </FormGroup>
                <Row>
                    <Col sm='6'><Input type="text" name="city" id="city" placeholder="city" value={this.state.location.city} onChange={e => this.setState.location({ city: e.target.value })}/></Col>
                    <Col sm='4'><Input type="text" name="text" id="state" placeholder="state" value={this.state.location.state} onChange={e => this.setState.location({ state: e.target.value })}/></Col>
                    <Col sm='2'><Input type="text" name="text" id="zip-code" placeholder="zip" value={this.state.location.zip} onChange={e => this.setState({ zip: e.target.value })}/></Col>
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