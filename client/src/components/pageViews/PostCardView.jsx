import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, CardColumns } from 'reactstrap';

const PostCard = (props) => {
    const { posts } = props;
    const { changePostView } = props;
    const cards = posts.map(post => (
        <Card onClick={() => {changePostView(post)}}>
            <CardImg src={`${post.img}`} />
            <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardSubtitle>{post.subtitle}</CardSubtitle>
                <CardText>{post.description}</CardText>
            </CardBody>
        </Card>
    ));
    return (
        <CardColumns>
            {cards}
        </CardColumns>
    );
}

export default PostCard;
