import React from 'react';
import PropTypes from 'prop-types';
import MapContainer from "./../MapContainer.jsx";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, CardColumns } from 'reactstrap';


const PostView = (props) => {
    const { post } = props;
    return (
        <Row>
        <Col sm='6'>
            <Card>
            <CardImg src={post.img1} />
            <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardSubtitle>{post.tags}</CardSubtitle>
                <CardText>{post.text}</CardText>
            </CardBody>
            </Card>
        </Col>
        <Col sm='5'>
            <MapContainer geoLocation={post.location}/>
        </Col>
        </Row>
    );
}

export default PostView;