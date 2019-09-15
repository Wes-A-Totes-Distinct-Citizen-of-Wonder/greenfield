import React from 'react';
import PropTypes from 'prop-types';
import SearchTag from '../SearchTag.jsx';
import {  DropdownToggle, DropdownMenu, DropdownItem, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, CardColumns } from 'reactstrap';

const PostCard = (props) => {
    const { posts } = props;
    const { changePostView } = props;
    const cards = posts.map(post => (
        <Card onClick={() => { changePostView(post) }}>
            <CardImg src={post.img1} />
            <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardSubtitle>{post.tags}</CardSubtitle>
                <CardText>{post.text}</CardText>
            </CardBody>
        </Card>
    ));
    return (
        <div>
        <SearchTag searchByTag={props.searchByTag} />
        <hr />
        <CardColumns>
            {cards}
        </CardColumns>
        </div>
    );
}

export default PostCard;
