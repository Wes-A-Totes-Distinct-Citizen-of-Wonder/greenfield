import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { DropdownToggle, DropdownMenu, DropdownItem, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, CardColumns } from 'reactstrap';

class MyPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.setMyPosts = this.getMyPosts.bind(this);
    
  }

  componentDidMount() {
    this.setMyPosts();
  }

  setMyPosts() {
    const { getNearbyPosts} = this.props;
    this.setState({posts: getNearbyPosts });
    console.log(getNearbyPosts);
  }

  render(){
    return (
      <Card>

      </Card>
    );
  }
}

export default MyPosts;
