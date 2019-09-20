import React from 'react';
import PropTypes from 'prop-types';
import SearchTag from '../SearchTag.jsx';
import PopupAlert from './../PopupAlert.jsx';
import { Popover, PopoverHeader, PopoverBody} from 'reactstrap'

class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      popoverOpen: false,
      showErrorPopup: false,
      errorText: 'Must be logged in to view content.'
    }

    this.toggle = this.toggle.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onHoverLeave = this.onHoverLeave.bind(this);
    this.pleaseLogin = this.pleaseLogin.bind(this);
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    })
  }

  onHover(post) {
    this.setState({
      popoverOpen: true,
    })
   
    const content = `
    <b>Description</b>:<br /> ${post.text}<br /><br />
    <b>Zip</b>: ${post.zip}
    `
    const div = `<div style="
    background: rgb(255, 255, 255, .7); 
    border: 1px solid #000000; 
    text-align: center;">${content}</div>`;

    document.getElementById(`id${this.props.post.post_id}`).innerHTML = div;
       
  }

  onHoverLeave(tag) {
    this.setState({
      popoverOpen: false,
    })

    let div = `<div style="
    background: #2F4A5E; color: #FFFFFF; border-radius: 50px; 
    text-align: center; border: 1px solid #000000;">${tag}</div>`;

    document.getElementById(`id${this.props.post.post_id}`).innerHTML = div;

  }

  pleaseLogin(){
    this.setState({showErrorPopup: !this.state.showErrorPopup});
  }

  render() {
    const { post, changePostView, user } = this.props;
    const id = 'id' + post.post_id;
    console.log(user);
    return (
      <div style={{ display: 'inline-block'}}>
      {this.state.showErrorPopup ? <PopupAlert text={this.state.errorText} /> : null}
      {user.username === 'guest' ? 
          <div
            id={id}
            onClick={() => { this.pleaseLogin() }}
            onMouseEnter={() => {this.onHover(post)}}
            onMouseLeave={() => { this.onHoverLeave(post.tagList.toUpperCase()) }}
            style={{
              boxShadow: '10px 10px 10px #CCCCCC',
              background: `url(${post.img1})`,
              height: '250px',
              width: '200px',
              margin: '15px',
              padding: '10px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              border: '1px solid #000000'
            }}>
            <div style={{
              background: '#2F4A5E',
              color: '#FFFFFF',
              borderRadius: '100px',
              textAlign: 'center',
              border: '1px solid #000000'
            }}>{post.tagList.toUpperCase()}</div>
          </div>
           : 
      <div 
      id={id}
      onClick={() => { changePostView(post) }}
      onMouseEnter={() => {this.onHover(post)}}
      onMouseLeave={() => {this.onHoverLeave(post.tagList.toUpperCase())}}
      style={{
        boxShadow: '10px 10px 10px #CCCCCC',
        background: `url(${post.img1})`,
        height: '250px',
        width: '200px',
        margin: '15px',
        padding: '10px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        border: '1px solid #000000'
      }}>
          <div style={{
            background: '#2F4A5E',
            color: '#FFFFFF',
            borderRadius: '100px',
            textAlign: 'center',
            border: '1px solid #000000'
          }}>{post.tagList.toUpperCase()}</div>
      </div>}

      {/* <Popover
        placement="right"
        isOpen={this.state.popoverOpen}
        target={id}
        toggle={this.toggle}
      >
        <PopoverHeader>{post.title.toUpperCase()}</PopoverHeader>
        <PopoverBody>
          Tags:<br />
          {post.tagList.toUpperCase()}<br /><br />

          Description:<br />
          {post.text}<br /><br />

          Zip:<br />
          {post.zip}<br /><br />
          </PopoverBody>
      </Popover> */}
      </div>
    )
  }
}

export default Card;