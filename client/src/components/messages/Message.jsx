import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onLoginSubmit}>
          <FormGroup>
            <Label style={{ color: "white" }}>Subject</Label>
            <Input
              type="text"
              name="subject"
              id="subject"
              value={this.state.subject}
              // onChange={e => this.setState({ subject: e.target.value })}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label style={{ color: "white" }}>Message</Label>
              <Input type="textarea" name="text" id="body" />
            </FormGroup>
          <Button color="primary">Submit</Button>{' '}
        </Form>
      </div>
    );
  }
}

export default Message;
