import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, CardColumns } from 'reactstrap';
import MapContainer from '../MapContainer.jsx';

const PostView = (props) => {
    const { post } = props;
    return (
        <Card>
            <CardImg src={post.img1} />
            <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardText>{post.text}</CardText>
            </CardBody>
            <MapContainer geoLocation={post.location}/>
        </Card>
    );
}

export default PostView;