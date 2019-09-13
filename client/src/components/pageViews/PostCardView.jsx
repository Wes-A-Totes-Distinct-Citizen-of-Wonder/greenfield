import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, CardColumns } from 'reactstrap';

const PostCard = (props) => {
    const { posts } = props;
    const { changePostView } = props;
    const cards = posts.map(post => (
        <Card onClick={() => {changePostView(post)}}>
            <CardImg src={post.img1} />
            <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardSubtitle>{post.tags}</CardSubtitle>
                <CardText>{post.text}</CardText>
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
