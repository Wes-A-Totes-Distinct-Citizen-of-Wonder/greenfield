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
                <CardSubtitle>{post.postText}</CardSubtitle>
                <CardText>{post.postText}</CardText>
            </CardBody>
            <MapContainer />
        </Card>
    );
}

export default PostView;