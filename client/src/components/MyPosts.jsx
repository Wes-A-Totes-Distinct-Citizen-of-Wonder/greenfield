import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import { DropdownToggle, DropdownMenu, DropdownItem, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, CardColumns } from 'reactstrap';

class MyPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',

    };
    this.getUser = this.getUser.bind(this);

 
    
  }

  componentDidMount() {
    this.getUser();

  }

  getMyPosts() {
    axios.get('/myposts', (req, res) => {

    });

  }

  getUser(){
    const { currUser } = this.props;
    console.log(currUser, 'user');
  

  }

  render(){
    return (
      <div><p>hey</p></div>
    );
  }
}

export default MyPosts;