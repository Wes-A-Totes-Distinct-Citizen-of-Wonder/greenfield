import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Card from './pageViews/Card.jsx';
import {Button} from 'reactstrap';
import { pageHeader } from './Style.jsx';

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
    const { posts, user_id } = this.state;

    return (
      <div><center>
        <div style={pageHeader}><h2>My Posts</h2></div>
        {posts.map((post) => {
          return (
            <div style={{display: 'inline-grid'}}>
            <Card post={post} user={user_id} /><br />
            <center>
              <Button onClick={() => { this.delete(post.post_id) }}>Delete</Button>
              </center>
            </div>
          )
        })}
      </center>
      </div>
    );
  }
}

export default MyPosts;