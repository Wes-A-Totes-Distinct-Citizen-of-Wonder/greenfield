import React from 'react';
import PropTypes from 'prop-types';
import MapContainer from "./../MapContainer.jsx";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, CardColumns } from 'reactstrap';

const PostView = (props) => {
    const { post } = props;
    return (
        <Card>
            <CardImg src={post.img1} />
            <CardBody>
                <CardTitle>{post.title}</CardTitle>
<<<<<<< HEAD
                <CardSubtitle>{post.postText}</CardSubtitle>
                <CardText>{post.postText}</CardText>
=======
                <CardText>{post.text}</CardText>
>>>>>>> 96f390c82d8ef8edd0ef7ba7199cfcd7b1a658bc
            </CardBody>
            <MapContainer />
        </Card>
    );
}

export default PostView;