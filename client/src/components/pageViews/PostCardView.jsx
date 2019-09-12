import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, CardColumns } from 'reactstrap';

const PostCard = (props) => {
    const { posts } = props;
    const { changePostView } = props;
    const cards = posts.map(post => (
        <Card onClick={() => {changePostView(post)}}>
<<<<<<< HEAD
            <CardImg src={`${post.img1}`} />
            <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardSubtitle>{post.subtitle}</CardSubtitle>
                <CardText>{post.postText}</CardText>
=======
            <CardImg src={post.img1} />
            <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardSubtitle>{post.subtitle}</CardSubtitle>
                <CardText>{post.text}</CardText>
>>>>>>> 96f390c82d8ef8edd0ef7ba7199cfcd7b1a658bc
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
