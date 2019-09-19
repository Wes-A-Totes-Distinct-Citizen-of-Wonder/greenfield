import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { DropdownToggle, DropdownMenu, DropdownItem, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, CardColumns } from 'reactstrap';

class MyPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: '',
      posts: [],
    };
    this.setUser = this.setUser.bind(this);
    this.getMyPosts = this.getMyPosts.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.setUser();
    this.getMyPosts();
  }

  getMyPosts() {
    const { user_id} = this.state;
    console.log(user_id);
    axios.get('/myposts')
    .then(res => {
      this.setState({posts: res.data});
    })
  }

  setUser(){
    const { currUser } = this.props;
    this.setState({user_id: currUser.user_id});
  }

  delete(id){
    axios.post('/deletePost', {id: id})
      .then(res => {
        console.log(res, 'deleted');
      })
      this.componentDidMount();
  }

  render(){
    const { posts } = this.state;
    console.log(posts, 'posts');

    return (
      <Row sm='4'>
        {posts.map((post) => {
          return (
            <Card style={{width:"175px", height:"250px", margin:"2px", padding: "2px"}}>
              <center>
              <CardImg src={post.img1}/>
              <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardTitle><Button onClick={() => {this.delete(post.post_id)}}>Delete</Button></CardTitle>
              </CardBody>
              </center>
            </Card> 
          )
        })}
      </Row>
    );
  }
}

export default MyPosts;