import React from "react";
import ReactDOM from "react-dom";

import PostCard from "./components/PostCard.jsx";
import UserNav from "./components/UserNav.jsx";
import { Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
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
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                {/* <Row>
                </Row>
            </div>
            <div> */}
                <Row>
                    <Col sm='2' style={{backgroundColor: "rgb(312, 168, 224)", padding: '25px', paddingBottom: '0px'}}>
                        <UserNav />
                    </Col>
                    <Col sm='10'>
                        <PostCard posts={posts} />
                    </Col>
                </Row>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));