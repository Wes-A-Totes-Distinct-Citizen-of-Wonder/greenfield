import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { imgPreview, white, pageHeader, label } from '../Style.jsx';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import PopupAlert from './../PopupAlert.jsx';

class CreatePost extends React.Component {
	constructor(props) {
		super(props);
		const { currUser } = this.props;
		this.state = {
			img1: '',
			img2: '',
			img3: '',
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
      currUser: currUser,
      showErrorPopup: false,
      errorText: ''
		};
		this.onPostSubmit = this.onPostSubmit.bind(this);
	}
	// gets called upon clicking "submit" button
	onPostSubmit(event) {
		const user = this.state;
		const bodyFormData = new FormData();
		// formatting for cloudinary
		Object.entries(user).forEach((post) => {
			if (post[0] === 'img1' || post[0] === 'img2' || post[0] === 'img3') {
				bodyFormData.append('photos', post[1]);
			} else {
			bodyFormData.append(post[0], post[1]);
			}
		});

		// sends post information from client to post table in DB
		axios.post('/submitPost', bodyFormData)
			.then((response) => {
				console.log(response);
				// after success sends user back to home page
				this.props.changeView('default');
			})
			.catch((response) => {
        if (response.response.status === 400) {
          this.setState({
            showErrorPopup: !this.state.showErrorPopup,
            errorText: response.response.data
          });
        } else {
          this.setState({
            showErrorPopup: !this.state.showErrorPopup,
            errorText: 'Something went wrong with your post! Try checking your form again.'
          });
        }
			});
		// axios.post to the Posts table in the db, should also update numPosts in User table whenever Carin gets that working
	}

    render() {
        const { state } = this.state;
        return (
            <Form>
                <FormGroup>
                  {this.state.showErrorPopup ? <PopupAlert text={this.state.errorText} /> : null }
                  <div style={pageHeader}><h2>Create Post</h2></div>
                    <img style={imgPreview} src={this.state.preview1} />
                    <img style={imgPreview} src={this.state.preview2} />
                    <img style={imgPreview} src={this.state.preview3} />
                    
                    <Input type="file" name="photo" style={{ color: 'white'}} value={state.img1} onChange={e => {
                      this.setState({ img1: e.target.files[0] });
                      this.setState({ preview1: URL.createObjectURL(e.target.files[0])})
                    }}/>
                    <Input type="file" name="photo" style={white} value={state.img2} onChange={e => {
                      this.setState({ img2: e.target.files[0] });
                      this.setState({ preview2: URL.createObjectURL(e.target.files[0]) })
                    }} />
                    <Input type="file" name="photo" style={white} value={state.img3} onChange={e => {
                      this.setState({ img3: e.target.files[0] });
                      this.setState({ preview3: URL.createObjectURL(e.target.files[0]) })
                    }} />
                    <FormText color="muted">
                        Please include at least one image of the materials you wish to share.
                    </FormText>
                </FormGroup>

                <FormGroup>
                    <Input type="text" name="text" id="post-desc" value={state.title} onChange={e => this.setState({ title: e.target.value })}placeholder="Title" />
                </FormGroup>

                <FormGroup>
                    <Input type="textarea" name="text" id="post-desc" value={state.text} onChange={e => this.setState({ text: e.target.value })}placeholder="Description limit of 255 characters." />
                </FormGroup>

                <center>
                <FormGroup check>
                    <Label check for="post-tags" style={white}>
                        <Col><Input type="checkbox" value={state.lumber} onChange={() => this.setState({ lumber: !this.state.lumber })}/>{'Lumber'}</Col>
                    </Label>
                    <Label check for="post-tags" style={white}>
                        <Col><Input type="checkbox" value={state.metal} onChange={() => this.setState({ metal: !this.state.metal })}/>{'Metal'}</Col>
                    </Label>
                    <Label check for="post-tags" style={white}>
                        <Col><Input type="checkbox" value={state.concrete} onChange={() => this.setState({ concrete: !this.state.concrete })}/>{'Concrete'}</Col>
                    </Label>
                    <Label check for="post-tags" style={white}>
                        <Col><Input type="checkbox" value={state.glass} onChange={() => this.setState({ glass: !this.state.glass })}/>{'Glass'}</Col>
                    </Label>
                    <Label check for="post-tags" style={white}>
                        <Col><Input type="checkbox" value={state.piping} onChange={() => this.setState({ piping: !this.state.piping })}/>{'Piping'}</Col>
                    </Label>
                    <FormText color="muted">
                        Please select at least one related tag.
                    </FormText>
                </FormGroup>
                </center>
                <br />

                <center>
                <FormGroup>
                    <Row>
                      <Col><Input type="text" name="text" id="address" placeholder="Address" value={state.address} onChange={e => this.setState({ address: e.target.value })}/></Col>
                    </Row>
                </FormGroup>
                <Row>
                    <Col><Input type="text" name="city" id="city" placeholder="City" value={state.city} onChange={e => this.setState({ city: e.target.value })}/></Col>
                    <Col><Input type="text" name="text" id="state" placeholder="State" value={state.state} onChange={e => this.setState({ state: e.target.value })}/></Col>
                    <Col><Input type="text" name="text" id="zip-code" placeholder="Zip" value={state.zip} onChange={e => this.setState({ zip: e.target.value })}/></Col>
                </Row>
            </center>
             
                <br />

                <FormGroup>
                    <Button type="button" color="primary" block onClick={(e) => this.onPostSubmit(e)}>Submit</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default CreatePost;