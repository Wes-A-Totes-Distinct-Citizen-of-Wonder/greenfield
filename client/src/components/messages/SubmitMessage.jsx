import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SubmitMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      content: "",
      recepient: this.props.post.user_id,
      sender: this.props.currUser.user_id,
    };
    // this.handleChange = this.handleChange.bind(this);
    this.onMessageSubmit = this.onMessageSubmit.bind(this);
  }

  onMessageSubmit(event) {
    const message = this.state;
    // console.log(message);
    axios
      .post('/submitMessage', message)
      .then(response => {
        // console.log(response);
        // after success sends user back to home page
        this.props.changeView("post-view");
      })
      .catch(response => {
        if (response.response.status === 400) {
          alert('onmesssubmit error', response.response.data);
        }
      });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onMessageSubmit}>
          <FormGroup>
            <Label style={{ color: "white" }}>Subject</Label>
            <Input
              type="text"
              name="text"
              id="subject"
              value={this.state.subject}
              onChange={e => this.setState({ subject: e.target.value })}
              placeholder="subject"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="post-desc" style={{ color: "white" }}>
              Description
            </Label>
            <Input
              type="textarea"
              name="text"
              id="content"
              value={this.state.content}
              onChange={e => this.setState({ content: e.target.value })}
              placeholder="message"
            />
          </FormGroup>
          <Button color="primary">Send</Button>{" "}
        </Form>
      </div>
    );
  }
}

export default SubmitMessage;
