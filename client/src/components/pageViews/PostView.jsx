import React from 'react';
import PropTypes from 'prop-types';
import MapContainer from "./../MapContainer.jsx";
import ImgCarousel from "./ImgCarousel.jsx";
import Message from "../messages/Message.jsx"
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
    return (
      <Row>
        <Col sm="6">
          <Card>
            <ImgCarousel src={post} />
            <CardBody>
              <CardText>Posted by: {user.username}</CardText>
              <CardText>Business: {user.business}</CardText>
              <CardText>Contact information: {user.email}</CardText>
              <CardTitle>Title: {post.title}</CardTitle>
              <CardText>Description: {post.text}</CardText>
              <CardSubtitle>Material(s): {post.tagList}</CardSubtitle>{" "}
              <Button outline color="primary" onClick={this.toggle}>
                Send Message
              </Button>
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
              >
							<Message />
                {/* <ModalHeader toggle={this.toggle}>Send Message</ModalHeader>
                <ModalBody>Insert Message Here</ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>
                    Send
                  </Button>{" "}
                  <Button color="secondary" onClick={this.toggle}>
                    Cancel
                  </Button>
                </ModalFooter> */}
              </Modal>
            </CardBody>
          </Card>
        </Col>
        <Col sm="5">
          <MapContainer geoLocation={post.location} />
        </Col>
      </Row>
    );
  }
}

export default PostView;
