import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import PostCard from "./components/PostCard.jsx";
import UserNav from "./components/UserNav.jsx";
import NavHead from "./components/NavHead.jsx";
import CreatePost from "./CreatePost.jsx";
import { Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'home',
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
                description: "Created using acrylics on canvas.AJKL:FDJKLS:FJDKLSFJDKLSFJL:DAJKLFSKL:JSLFKDJGKL:HGKL:DJKL:JFLKAKLG:DHKLA:JKSDLFAKLGHDKL:FJKLDJFLDKSFJDLK:FEJI:MDKL:VNLNDKL:FDKFJAIEOF:NKL:VNDLKFHe;fJKL:DSFJIODNVLD:NVIO:JVIPX:IPVNB:ONDNFK:DFFJSD:NLKCNVKLS:EIFJdkl;sfjdkls;dfksfjdk;lsfjkdsibnibndibndimek;fmlkdj;lvkcjx;fejios;nvclknxiods",
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
        this.createPost = this.createPost.bind(this);
    }

    createPost() {
        const { view } = this.state;
        // check if user is logged in, if so do this vvvv
        this.setState({
            view: 'post'
        })
        /// else prompt user to login/ sign-up
    }

    changeView(newView) {
        const { view } = this.state;
        this.setState({
            view: newView
        })
    }

    currentPage(page) {
        const { posts } = this.state;
        switch(page) {
            case 'home':
            return (
                <PostCard posts={posts} />
            );
            case 'create-post':
            return(
                <div>Hey</div>
            );
        }
    }

    render() {
        const { view } = this.state;
        return (
            <div className="main">
                <Row>
                    <Col sm='12' style={{backgroundColor: "rgb(102, 136, 165)", padding: '25px', paddingBottom: '25px'}}>
                        <NavHead />
                    </Col>
                </Row>
                <Row>
                    <Col sm='2' className="side-bar" style={{backgroundColor: "rgb(147, 174, 194)", padding: '25px', paddingBottom: '0px'}}>
                        <UserNav />
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