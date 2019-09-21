import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SelectMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onMessageSubmit}>
          <FormGroup>
            <Label style={{ color: 'white' }}>Subject</Label>
            <Input
              type='text'
              name='text'
              id='subject'
              value={this.state.subject}
              onChange={e => this.setState({ subject: e.target.value })}
              placeholder='subject'></Input>
          </FormGroup>
          <FormGroup>
            <Label for='post-desc' style={{ color: 'white' }}>
              Description
            </Label>
            <Input
              type='textarea'
              name='text'
              id='content'
              value={this.state.content}
              onChange={e => this.setState({ content: e.target.value })}
              placeholder='message'
            />
          </FormGroup>
          <Button color='primary'>Send</Button>{' '}
        </Form>
      </div>
    );
  }
}

export default SelectMessage;
