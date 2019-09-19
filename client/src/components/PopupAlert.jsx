import React from 'react';
import { UncontrolledAlert } from 'reactstrap';

function PopupAlert(props) {
  return (
    <UncontrolledAlert color="info">
      {props.text}
    </UncontrolledAlert>
  );
}

export default PopupAlert;
