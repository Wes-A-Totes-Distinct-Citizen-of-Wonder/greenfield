import React from 'react';
import PropTypes from 'prop-types';
import SearchTag from '../SearchTag.jsx';
import {  DropdownToggle, DropdownMenu, DropdownItem, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, CardColumns } from 'reactstrap';
// basically the home view, takes the array of objects, "posts", from state on index.jsx and maps them into the card format
const PostCard = (props) => {
    const { posts } = props;
    const { changePostView } = props;
    const cards = posts.map(post => (
        // allows each post to be clicked on and change to the view
        <Card onClick={() => { changePostView(post) }}>
            <CardImg src={post.img1} />
            <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardText>{post.text}</CardText>
                <CardSubtitle>{post.tags}</CardSubtitle>
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
