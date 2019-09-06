import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import PostCard from "./components/PostCard";
// import testlayout from "./components/testLayout";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <PostCard />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));