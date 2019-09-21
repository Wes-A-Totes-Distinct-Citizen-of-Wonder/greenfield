import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';
import axios from 'axios';

class Inbox extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      messages: this.props.messages
    };

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

  render() {
    const { messages} = this.state;
    return (
      <div>
        {messages.map(message => {
          return (
            <ListGroup>
              <ListGroupItem active>
                <ListGroupItemHeading>{message.subject}</ListGroupItemHeading>
                <ListGroupItemText>{message.content}</ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          );
        })}
      </div>
    );
  }
}

export default Inbox;
