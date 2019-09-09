import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            description: '',
            tags: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            geolocation: {
                lat: '',
                lng: ''
            },
        };
        this.onPostSubmit = this.onPostSubmit.bind(this);
    }

    onPostSubmit() {
        // check if user is logged in, if so do this vvvv
        alert(JSON.stringify(this.state, null, " "))
        /// else prompt user to login/ sign-up
    }

    render() {
        const { state } = this.state;
        return (
            <Form onSubmit={this.onPostSubmit}>
                <FormGroup>
                    <Label for="post-img" style={{ color: 'white' }}>Image File</Label>
                    <Input type="file" name="file" id="post-img" style={{ color: 'white' }} value={state.img} onChange={e => this.setState({ img: e.target.value })}/>
                    <FormText color="muted">
                        Please include an image(s) of the materials you wish to share.
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="post-desc" style={{ color: 'white' }}>Description</Label>
                    <Input type="textarea" name="text" id="post-desc" value={state.description} onChange={e => this.setState({ description: e.target.value })}placeholder="limit of 255 characters" />
                </FormGroup>
                <FormGroup check>
                    <Label check for="post-tags" style={{ color: 'white' }}>
                        <Col sm="1"><Input type="checkbox" value={state.tags} onChange={() => this.setState({ tags: this.state.tags += ('/Lumber')})}/>{'Lumber'}</Col>
                    </Label>
                    <Label check for="post-tags" style={{ color: 'white' }}>
                        <Col sm="1"><Input type="checkbox" value={state.tags} onChange={() => this.setState({ tags: this.state.tags += ('/Metal')})}/>{'Metal'}</Col>
                    </Label>
                    <Label check for="post-tags" style={{ color: 'white' }}>
                        <Col sm="1"><Input type="checkbox" value={state.tags} onChange={() => this.setState({ tags: this.state.tags += ('/Concrete')})}/>{'Concrete'}</Col>
                    </Label>
                    <Label check for="post-tags" style={{ color: 'white' }}>
                        <Col sm="1"><Input type="checkbox" value={state.tags} onChange={() => this.setState({ tags: this.state.tags += ('/Glass')})}/>{'Glass'}</Col>
                    </Label>
                    <Label check for="post-tags" style={{ color: 'white' }}>
                        <Col sm="1"><Input type="checkbox" value={state.tags} onChange={() => this.setState({ tags: this.state.tags += ('/Piping')})}/>{'Piping'}</Col>
                    </Label>
                    <FormText color="muted">
                        Please select at least one related tag.
                    </FormText>
                </FormGroup>
                <h1 />
                <FormGroup>
                    <Label for="post-loc" style={{ color: 'white' }}>Location</Label>
                    <Input type="text" name="text" id="address" placeholder="address" value={state.address} onChange={e => this.setState({ address: e.target.value })}/>
                </FormGroup>
                <Row>
                    <Col sm='6'><Input type="text" name="city" id="city" placeholder="city" value={state.city} onChange={e => this.setState({ city: e.target.value })}/></Col>
                    <Col sm='4'><Input type="text" name="text" id="state" placeholder="state" value={state.state} onChange={e => this.setState({ state: e.target.value })}/></Col>
                    <Col sm='2'><Input type="text" name="text" id="zip-code" placeholder="zip" value={state.zip} onChange={e => this.setState({ zip: e.target.value })}/></Col>
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