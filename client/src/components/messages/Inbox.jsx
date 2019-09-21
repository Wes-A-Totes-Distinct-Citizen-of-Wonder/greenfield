import React from 'react';
import { pageHeader } from './../Style.jsx';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
  Col
} from 'reactstrap';
import axios from 'axios';
import SelectMessage from './SelectMessage.jsx';

class Inbox extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      messages: this.props.messages
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getMessages();
  }
  
  getMessages() {
    axios.get('/inbox').then(res => {
      this.setState({ messages: res.data });
    })
    .catch(err => alert(err));
  }

  handleClick(e) {
    e.preventDefault();
    console.log('clicked');
  }

  render() {
    const { messages} = this.state;
    console.log(messages, 'messages inside of inbox');
    return (
      <div><center>
        <div style={pageHeader}><h2>Messages</h2></div>
        {messages.map(message => {
          return (
                <Col sm="4">
                  <ListGroup style={{textAlign: 'left'}}>
                    <ListGroupItem onClick={this.handleClick} action>
                      <ListGroupItemHeading>From: {message.sender_id}</ListGroupItemHeading>
                      <ListGroupItemText>Subject: {message.subject}</ListGroupItemText>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
          );
        })}
      </center>
      </div>
    );
  }
}

export default Inbox;
{/* <Button onClick={() => { this.delete(post.post_id) }}>Delete</Button> */}