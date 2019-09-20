import React from 'react';
import PropTypes from 'prop-types';
import MapContainer from "./../MapContainer.jsx";
import ImgCarousel from "./ImgCarousel.jsx";
import Message from "../messages/Message.jsx"
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col, Container, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// the view for when selected a specific post
class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
	}
	
  render() {
    const { post } = this.props;
    const { user } = this.props;
    const { currUser } = this.props;
    return (
      <Container>
        <br />
        <Row>
          <Col>
            <Card>
              <ImgCarousel src={post} />
              <CardBody>
                <CardText>Posted by: {user.username}</CardText>
                <CardText>Business: {user.business}</CardText>
                <CardText>Contact information: {user.email}</CardText>
                <CardTitle>Title: {post.title}</CardTitle>
                <CardText>Description: {post.text}</CardText>
                <CardText>Location: {post.zip}</CardText>
                <CardSubtitle>Material(s): {post.tagList}</CardSubtitle>{" "}
                <Button outline color="primary" onClick={this.toggle}>
                  Send Message
                </Button>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                <Message currUser={currUser} post={post} />
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <MapContainer geoLocation={post.location} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PostView;
