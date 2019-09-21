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
    console.log(user.business, 'business');
    console.log(typeof user.business);
    return (
      <Container>
        <br />
        <Row>
          <Col sm="10">
            <Button href='/' className="float-right" ><i class="fas fa-backward"></i> Back</Button>
          </Col>
        </Row>
        <Row>
          <Col sm='5'>
            <Card>
              <ImgCarousel src={post} />
              <CardBody>
                <CardText><b>Posted by:</b> {user.username}</CardText>
                {user.business === '' ? null : <CardText><b>Business:</b> {user.business}</CardText>}
                <CardText><b>Contact:</b> {user.email}</CardText>
                <CardTitle><b>Title:</b> {post.title}</CardTitle>
                <CardText><b>Description:</b> {post.text}</CardText>
                <CardText><b>Location:</b> {post.zip}</CardText>
                <CardSubtitle><b>Material(s):</b> {post.tagList}</CardSubtitle>{" "}
                <center><Button outline color="primary" onClick={this.toggle}>
                  Send Message
                </Button>
                </center>
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
          <Col sm='4'>
            <MapContainer geoLocation={post.location} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PostView;
