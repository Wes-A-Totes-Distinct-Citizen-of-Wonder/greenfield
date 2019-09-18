import React from 'react';
import PropTypes from 'prop-types';
import MapContainer from "./../MapContainer.jsx";
import ImgCarousel from "./ImgCarousel.jsx";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, CardColumns } from 'reactstrap';

// the view for when selected a specific post
const PostView = (props) => {
    const { post } = props;
    const { user } = props;
    return (
        <Row>
        <Col sm='6'>
            <Card>
            <ImgCarousel />
            {/* <CardImg src={post.img2} /> */}
            <CardBody>
                <CardText>Posted by: {user.username}</CardText>
                <CardText>Business: {user.business}</CardText>
                <CardText>Contact information: {user.email}</CardText>
                <CardTitle>Title: {post.title}</CardTitle>
                <CardText>Description: {post.text}</CardText>
                <CardSubtitle>Material(s): {post.tagList}</CardSubtitle>
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