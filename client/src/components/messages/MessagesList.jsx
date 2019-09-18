import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem active>
          <ListGroupItemHeading>Subject</ListGroupItemHeading>
          <ListGroupItemText>
            Here is the first message
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Subject</ListGroupItemHeading>
          <ListGroupItemText>
            Here is your second message
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Subject</ListGroupItemHeading>
          <ListGroupItemText>
            Here is the third message
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    );
  }
}
