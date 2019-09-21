import React from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle } from 'reactstrap';

// class SelectMessage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
      
//     };
//   }
const SelectMessage = (props) => {
  const { messages } = props;

    return (
      <div>
        <Card>
          <CardHeader>{messages.subject}</CardHeader>
          <CardBody>
            <CardTitle>{messages.content}</CardTitle>
            <Button>Reply</Button>
          </CardBody>
        </Card>
      </div>
    );
  }



export default SelectMessage;
