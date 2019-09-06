import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import PostCard from "./components/PostCard.jsx";
// import testlayout from "./components/testLayout";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [{
                // img: "./../../images/Drawing1.png",
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
            }
            ]
        }
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                <h1>Hello World!</h1>
                <PostCard posts={posts} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));