import React from 'react';
import { pageHeader } from './../Style.jsx';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText, Modal, Row, Col
} from 'reactstrap';
import axios from 'axios';
import SelectMessage from './SelectMessage.jsx';

class Inbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: this.props.messages,
      modal: false,
      senders: []
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.getSender();
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

  getSender(){
    axios.get('/sender')
    .then(res => {
      // console.log(res, 'SENDERS');
      this.setState({senders : res.data});
    })
    .catch(err => alert(err));
  }

  render() {
    const { messages, senders } = this.state;
    // console.log(messages, 'messages inside of inbox');
    // console.log(senders, 'SENDERS');
    return (
      <div>
          <div style={pageHeader}><h2>Messages</h2></div>
          <center>
              <Col sm='4'>
                {messages.map(message => {
                  return (
                    <div>
                      <ListGroup style={{textAlign: 'left'}}>

                        <ListGroupItem onClick={this.toggle} action>
                          <ListGroupItemHeading>
                            From: {senders[message.sender_id - 1].username}
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
          </Col>
      </center>
            </div>
    );
  }
}

export default Inbox;