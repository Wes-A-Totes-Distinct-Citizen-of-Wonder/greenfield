import React from "react";
import ReactDOM from "react-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import testlayout from "./components/testLayout";

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                {/* <img src={ require('')} /> */}
                <Row>
                    <Col sm="6">
                        <Card>
                            <CardImg size="10%" src={require("../images/Drawing1.png")} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col sm="6">
                        <Card>
                            <CardImg size="10%" src={require("../images/Drawing1.png")} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));