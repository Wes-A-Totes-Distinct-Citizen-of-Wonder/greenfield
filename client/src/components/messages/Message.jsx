import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Message extends React.Component {
  constructor(props) {
    super(props);
    const { currUser } = this.props;
    this.state = {
      subject: '',
      content: '',
      sender: currUser,
      recepient: ''
    };
    // this.handleChange = this.handleChange.bind(this);
    this.onMessageSubmit = this.onMessageSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  
  onMessageSubmit(event) {
    // const message = this.state;
    const bodyFormData = new FormData();
    axios
      .post('/submitMessage', bodyFormData)
      .then(response => {
        console.log(response);
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
              name="subject"
              id="subject"
              value={this.state.subject}
              onChange={e => this.setState({ subject: e.target.value })}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="post-desc" style={{ color: "white" }}>
              Description
            </Label>
            <Input
              type="textarea"
              name="content"
              id="content"
              value={this.state.content}
              onChange={e => this.setState({ content: e.target.value })}
              placeholder="type message here..."
            />
          </FormGroup>
          <Button color="primary">Send</Button>{" "}
        </Form>
      </div>
    );
  }
}

export default Message;
