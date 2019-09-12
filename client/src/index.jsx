import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import SignUpView from "./components/pageViews/Sign-upView.jsx"
import LoginView from "./components/pageViews/LoginView.jsx";
import UserProfileView from "./components/pageViews/UserProfileView.jsx";
import PostCard from "./components/pageViews/PostCardView.jsx";
import PostView from "./components/pageViews/PostView.jsx";
import CreatePost from "./components/pageViews/CreatePost.jsx";
import UserNav from "./components/UserNav.jsx";
import NavHead from "./components/NavHead.jsx";
import { Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'default',
            selectedPost: {},
            user: {
                username: "Wes",
                email: "wtschmidt94@gmail.com",
                loggedIn: false,
                geolocation: {
                    lat: 'here',
                    lng: 'now'
                },
            },
            posts: [
                // example data:
            {
                img: require("./../images/Drawing1.png"),
                title: "Card Title",
                subtitle: "Card Subtitle",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            },
            {
                img: require('./../images/Space Hand Painting.jpg'),
                title: "Space hand",
                subtitle: "Simply a hand in space",
                description: "Created using acrylics on canvas.",
            },
            {
                img: require('./../images/Space Forrest Painting.jpg'),
                title: "Interstellar Forest",
                subtitle: "It's fall somewhere at least",
                description: "Created using acrylics on canvas.",
            },
            {
                img: require("./../images/Drawing1.png"),
                title: "Card Title",
                subtitle: "Card Subtitle",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            },
            {
                img: require('./../images/Space Hand Painting.jpg'),
                title: "Space hand",
                subtitle: "Simply a hand in space",
                description: "Created using acrylics on canvas.",
            },
            {
                img: require('./../images/Space Forrest Painting.jpg'),
                title: "Interstellar Forest",
                subtitle: "It's fall somewhere at least",
                description: "Created using acrylics on canvas.",
            },
            ]
        }
        this.changePostView = this.changePostView.bind(this);
        this.currentPage = this.currentPage.bind(this);
        this.changeView = this.changeView.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.getNearbyPosts = this.getNearbyPosts.bind(this);
    }

    componentDidMount() {
        this.getNearbyPosts()
        .then(nearPosts => {
            if (nearPosts.length < 1) {
                // return;
            } else {
            this.setState({
                posts: nearPosts
            })
        }
        })
    }
    // grabs all posts close to geolocation and puts them in the posts array inside this.state
    // need some instruction on how to actually sort by geolocation though....
    // used for changeing the view of the page

    getNearbyPosts() {
        return axios.get('/posts')
        .then(response => {
            // debugger;
            response.data
        })
    }

    changeView(newView) {
        this.setState({
            view: newView
        })
    }
    // used when clicking on a post to show more detail
    // may not need this if we're looking for post id in DB
    changePostView(newPost) {
        this.setState({
            selectedPost: newPost,
            view: 'post-view'
        })
    }

    changeUser(newUser) {
        this.setState({
            user: newUser
        })
    }

    currentPage(page) {
        const { posts } = this.state;
        const { selectedPost } = this.state;
        const { user } = this.state;
        switch(page) {
            case 'sign-up':
                return(
                    <SignUpView changeView={this.changeView} />
                )
            case 'login':
                return(
                    <LoginView changeUser={this.changeUser} />
                )
            case 'create-post':
                return(
                    <CreatePost changeView={this.changeView} />
                    );
            case 'post-view':
                return(
                    <PostView post={selectedPost} changeView={this.changeView} />
                );
            case 'user-profile':
                return(
                    <UserProfileView user={user} />
                )
            default :
                return (
                    <PostCard posts={posts} changePostView={this.changePostView} />
                );
        }
    }

    render() {
        const { view } = this.state;
        const { user } = this.state;
        return (
            <div className="main">
                <Row>
                    <Col sm='12' style={{backgroundColor: "rgb(102, 136, 165)", padding: '25px', paddingBottom: '25px'}}>
                        <NavHead changeView={this.changeView}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm='2' className="side-bar" style={{backgroundColor: "rgb(147, 174, 194)", padding: '25px', paddingBottom: '0px'}}>
                        <UserNav changeView={this.changeView} user={user}/>
                    </Col>
                    <Col sm='10' style={{padding: '25px', backgroundColor: "rgb(47, 74, 94)"}}>
                        {this.currentPage(view)}
                    </Col>
                </Row>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));