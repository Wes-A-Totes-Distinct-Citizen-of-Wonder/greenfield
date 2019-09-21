import React from 'react';
import { pageHeader } from './../Style.jsx';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText, Modal
} from 'reactstrap';
import axios from 'axios';
import SelectMessage from './SelectMessage.jsx';

class Inbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: this.props.messages,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.getMessages();
  }

  getMessages() {
    axios
      .get('/inbox')
      .then(res => {
        this.setState({ messages: res.data });
      })
      .catch(err => alert(err));
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { messages } = this.state;
    console.log(messages, 'messages inside of inbox');
    return (
      <div>
        <div style={pageHeader}>
          <h2>Messages</h2>
        </div>
        {messages.map(message => {
          return (
            <div>
              <ListGroup>
                <ListGroupItem onClick={this.toggle} action>
                  <ListGroupItemHeading>
                    From: {message.sender_id}
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    Subject: {message.subject}
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
              <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <SelectMessage messages={message}/>
                </Modal>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Inbox;
{
  /* <Button onClick={() => { this.delete(post.post_id) }}>Delete</Button> */
}
