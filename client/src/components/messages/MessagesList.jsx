import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';
import axios from 'axios';


class MessagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      content: '',
      sender: '',
    }
  }
  
  getMessages() {
    const { message } = this.props;
    axios.get('/messages')
    .then(res => {
      this.setState({subject: res.subject}, {content: res.content}, {sender: res.sender});
    })
  }

  render() {
    const {subject, content, sender} = this.state;
    return (
      <ListGroup>
      <ListGroupItem active>
        <ListGroupItemHeading>{subject}</ListGroupItemHeading>
        <ListGroupItemText>{content}</ListGroupItemText>
      </ListGroupItem>
      {/* <ListGroupItem>
        <ListGroupItemHeading>{subject}</ListGroupItemHeading>
        <ListGroupItemText>Here is your second message</ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>{subject}</ListGroupItemHeading>
        <ListGroupItemText>Here is the third message</ListGroupItemText>
      </ListGroupItem> */}
    </ListGroup>
  );
}
}

export default MessagesList;
