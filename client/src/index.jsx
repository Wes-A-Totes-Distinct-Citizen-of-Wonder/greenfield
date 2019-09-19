import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import SignUpView from "./components/pageViews/Sign-upView.jsx";
import LoginView from "./components/pageViews/LoginView.jsx";
import UserProfileView from "./components/pageViews/UserProfileView.jsx";
import PostCard from "./components/pageViews/PostCardView.jsx";
import PostView from "./components/pageViews/PostView.jsx";
import CreatePost from "./components/pageViews/CreatePost.jsx";
import UserNav from "./components/UserNav.jsx";
import NavHead from "./components/NavHead.jsx";
import MessagesList from "./components/messages/MessagesList.jsx"
import MyPosts from './components/MyPosts.jsx';
import { Col, Row, NavLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { whiteBackGround, content, pageViews } from './components/Style.jsx';

import {navbar} from './components/Style.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "default",
      selectedPost: {
        postInfo: {},
        userInfo: {}
      },
      user: {
        // this will decide if guest shows up or the username that is logged in
        //upon logging in the guest name will go away and the user name will show up
        username:
          (function() {
            if (
              sessionStorage.getItem("user") &&
              JSON.parse(sessionStorage.getItem("user")).isLoggedIn
            ) {
              const { username } = JSON.parse(sessionStorage.getItem("user"));
              return username;
            }
          })() || "guest",
        email: "",
        user_id: 0
      },
      posts: [
        //will hold all posts
      ]
    };
    this.changePostView = this.changePostView.bind(this);
    this.currentPage = this.currentPage.bind(this);
    this.changeView = this.changeView.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.getNearbyPosts = this.getNearbyPosts.bind(this);
    this.searchByTag = this.searchByTag.bind(this);
    this.searchByZip = this.searchByZip.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    // attatches the posts to the post array in the state
    this.getNearbyPosts()
      .then(nearPosts => {
        if (nearPosts.length < 1) {
        } else {
          this.setState({
            posts: nearPosts
          });
        }
      })
      .then(() => axios.get("/userSession"))
      .then(response => {
        const userInfo = response.data;
        sessionStorage.setItem("user", JSON.stringify(userInfo));
        //sets username and email into state as long as a user in loggend in
        if (userInfo.isLoggedIn) {
          this.setState({
            user: {
              username: userInfo.username,
              email: userInfo.email,
              user_id: userInfo.user_id,
            }
          });
        } else
          this.setState({
            user: {
              username: "guest",
              email: ""
            }
          });
      })
      .catch(err => alert(err));
  }
  // grabs all posts close to geolocation and puts them in the posts array inside this.state
  // need some instruction on how to actually sort by geolocation though....
  // used for changeing the view of the page

  //allows you to search by a material and allows posts to be sorted by their tag
  searchByTag(tag) {
    return axios.post("/tagSearch", { material: tag }).then(response => {
      this.setState({
        posts: response.data
      });
    });
  }

  searchByZip(zip) {
    console.log(zip, 'ZIP (INDEX.JSX)');
    return axios.post("/searchZip", { material: zip }).then(response => {
      this.setState({
        posts: response.data
      });
    });
  }

  // gets all posts from DB
  getNearbyPosts() {
    return axios.get("/posts").then(response => response.data);
  }

  // assists in swaping from page to page
  changeView(newView) {
    this.setState({
      view: newView
    });
    this.getNearbyPosts()
      .then(nearPosts => {
        if (nearPosts.length < 1) {
          // return;
        } else {
          this.setState({
            posts: nearPosts
          });
          // event.preventDefault();
        }
      })
      .catch(err => console.error(err));
  }

  // used when clicking on a post to show more detail
  // shows user info on each post
  changePostView(newPost) {
    return axios
      .post("/postInfo", { user_id: newPost.user_id })
      .then(response => {
        this.setState({
          selectedPost: {
            postInfo: newPost,
            userInfo: response.data[0]
          },
          view: "post-view"
        });
      });
  }

  //handles the user sign in being set to state
  changeUser(newUser) {
    event.preventDefault();
    this.setState({
      user: newUser,
      view: "default"
    });
  }

  // handles the back and forth of what page will be viewed by the user
  currentPage(page) {
    const { posts } = this.state;
    const { selectedPost } = this.state;
    const { user } = this.state;
    switch (page) {
			case "messagesList":
				return <MessagesList changeView={this.changeView} />;
      case "sign-up":
        return <SignUpView changeUser={this.changeUser} />;
      case "login":
        return <LoginView changeUser={this.changeUser} />;
      case "myPosts":
        return <MyPosts changeUser={this.changeUser} getNearbyPosts={this.getNearbyPosts} currUser={user} />;
      case "create-post":
        return (
          <CreatePost
            changeView={this.changeView}
            getNearbyPosts={this.getNearbyPosts}
            currUser={user}
          />
        );
      case "post-view":
        return (
          <PostView
            post={selectedPost.postInfo}
            user={selectedPost.userInfo}
            changeView={this.changeView}
            currUser={user}
          />
        );
      case "user-profile":
        // Not being used currently -> was gonna put active posts for users
        return <UserProfileView user={user} />;
      default:
        return (
          <PostCard
            posts={posts}
            changePostView={this.changePostView}
            searchByTag={this.searchByTag}
            searchByZip={this.searchByZip}
          />
        );
    }
  }

  //allows user to sign out
  logout(event) {
    axios.post("/logout").catch(err => console.error(err));
  }

  render() {
    const { view } = this.state;
		const { user } = this.state;
		const { messages } = this.state;
    return (
      <div
        className="main"
        style={whiteBackGround}
      >
        <Row>
          <Col>
            <NavHead 
              changeView={this.changeView} 
              user={user}
              logout={this.logout} />
          </Col>
        </Row>
        <br /><br />
        <Row style={content}>
          <Col
            sm="12"
            style={{
              padding: "25px",
              backgroundColor: "rgb(47, 74, 94)",
              paddingBottom: "auto",
              borderRadius: "4px"
            }}
          >
            {this.currentPage(view)}
          </Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
