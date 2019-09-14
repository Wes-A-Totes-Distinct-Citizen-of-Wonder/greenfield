import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img1: '',
            title: '',
            text: '',
            tags: '',
            address: '',
            city: '',
            state: '',
            zip: '',
        };
        this.onPostSubmit = this.onPostSubmit.bind(this);
    }

    onPostSubmit() {
        const user = this.state;
        const bodyFormData = new FormData();
        Object.entries(user).forEach((postProp) => {
            if (postProp[0] === 'img1') {
                bodyFormData.append('photo', user.img1);
            }
            else {
                bodyFormData.set(postProp[0], postProp[1]);
            }
        })
        axios.post('/submitPost', bodyFormData)
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        // axios.post to the Posts table in the db, should also update numPosts in User table whenever Carin gets that working
    }

    render() {
        const { state } = this.state;
        return (
            <Form onSubmit={this.onPostSubmit}>
                <FormGroup>
                    <Label for="post-img" style={{ color: 'white' }}>Image File</Label>
                    <Input type="file" name="photo" id="post-img" style={{ color: 'white' }} value={state.img1} onChange={e => this.setState({ img1: e.target.files[0] })}/>
                    <FormText color="muted">
                        Please include an image(s) of the materials you wish to share.
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="text" id="post-desc" value={state.title} onChange={e => this.setState({ title: e.target.value })}placeholder="title your post" />
                </FormGroup>
                <FormGroup>
                    <Label for="post-desc" style={{ color: 'white' }}>Description</Label>
                    <Input type="textarea" name="text" id="post-desc" value={state.text} onChange={e => this.setState({ text: e.target.value })}placeholder="limit of 255 characters" />
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