import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, CardColumns } from 'reactstrap';

const PostView = (props) => {
    const { post } = props;
    return (
        <Card>
            <CardImg src={`${post.img}`} />
            <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardSubtitle>{post.subtitle}</CardSubtitle>
                <CardText>{post.description}</CardText>
            </CardBody>
        </Card>
    );
}

export default PostView;