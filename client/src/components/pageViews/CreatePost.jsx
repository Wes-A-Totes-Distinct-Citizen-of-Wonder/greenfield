import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        const { currUser } = this.props;
        this.state = {
            img1: null,
            img2: null,
            img3: null,
            title: '',
            text: '',
            lumber: false,
            metal: false,
            concrete: false,
            glass: false,
            piping: false,
            address: '',
            city: '',
            state: '',
            zip: '',
            currUser: currUser 
        };
        this.onPostSubmit = this.onPostSubmit.bind(this);
    }
    // gets called upon clicking "submit" button
    onPostSubmit(event) {
        const user = this.state;
        const bodyFormData = new FormData();
        // formatting for cloudinary
        for (let key in user) {
          if (key === 'title') {
            break;
          }
          if (key === 'img1' || key === 'img2' || key === 'img3') {
            bodyFormData.append('photo', user[key]);
          }
          else {
            bodyFormData.set(key, user[key]);
          }
        }
        // sends post information from client to post table in DB
        axios.post('/submitPost', bodyFormData)
            .then((response) => {
                console.log(response);
                // after success sends user back to home page
                this.props.changeView('default');
            })
            .catch((response) => {
                if (response.response.status === 400) {
                    alert(response.response.data);
                }
                
                if (response.response.status === 404) {
                    alert(response.response.data);
                    this.props.changeView('login');
                }
                if (response.response.status === 500) {
                    alert('You must include at 3 images with your post');
                }
            });
        // axios.post to the Posts table in the db, should also update numPosts in User table whenever Carin gets that working
    }

    render() {
        const { state } = this.state;
        return (
            <Form>
                <FormGroup>
                    <Label for="post-img" style={{ color: 'white' }}>Image File</Label>
                    <Input type="file" name="photo" style={{ color: 'white' }} value={state.img1} onChange={e => this.setState({ img1: e.target.files[0] })}/>
                    <Input type="file" name="photo" style={{ color: 'white' }} value={state.img2} onChange={e => this.setState({ img2: e.target.files[0] })} />
                    <Input type="file" name="photo" style={{ color: 'white' }} value={state.img3} onChange={e => this.setState({ img3: e.target.files[0] })} />
                    <FormText color="muted">
                        Please include 3 images of the materials you wish to share.
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
                        <Col sm="1"><Input type="checkbox" value={state.lumber} onChange={() => this.setState({ lumber: !this.state.lumber })}/>{'Lumber'}</Col>
                    </Label>
                    <Label check for="post-tags" style={{ color: 'white' }}>
                        <Col sm="1"><Input type="checkbox" value={state.metal} onChange={() => this.setState({ metal: !this.state.metal })}/>{'Metal'}</Col>
                    </Label>
                    <Label check for="post-tags" style={{ color: 'white' }}>
                        <Col sm="1"><Input type="checkbox" value={state.concrete} onChange={() => this.setState({ concrete: !this.state.concrete })}/>{'Concrete'}</Col>
                    </Label>
                    <Label check for="post-tags" style={{ color: 'white' }}>
                        <Col sm="1"><Input type="checkbox" value={state.glass} onChange={() => this.setState({ glass: !this.state.glass })}/>{'Glass'}</Col>
                    </Label>
                    <Label check for="post-tags" style={{ color: 'white' }}>
                        <Col sm="1"><Input type="checkbox" value={state.piping} onChange={() => this.setState({ piping: !this.state.piping })}/>{'Piping'}</Col>
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
                    <Button type="button" color="primary" block onClick={(e) => this.onPostSubmit(e)}>Submit</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default CreatePost;