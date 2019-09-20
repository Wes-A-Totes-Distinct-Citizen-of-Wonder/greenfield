import React from 'react';
import PropTypes from 'prop-types';
import SearchTag from '../SearchTag.jsx';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap'

class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      popoverOpen: false,
    }

    this.toggle = this.toggle.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onHoverLeave = this.onHoverLeave.bind(this);
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    })
  }

  onHover() {
    this.setState({
      popoverOpen: true,
    })
  }

  onHoverLeave() {
    this.setState({
      popoverOpen: false,
    })
  }

  render() {
    const { post, changePostView } = this.props;
    const id = 'id' + post.post_id;
    return (
      <div style={{ display: 'inline-block'}}>
      <div 
      id={id}
      onClick={() => { changePostView(post) }}
      onMouseEnter={this.onHover}
      onMouseLeave={this.onHoverLeave}
      style={{
        boxShadow: '10px 10px 10px #CCCCCC',
        background: `url(${post.img1})`,
        height: '250px',
        width: '200px',
        margin: '15px',
        padding: '10px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '100px',
            textAlign: 'center',
          }}>{post.tagList}</div>
      </div>

      <Popover
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
      </Popover>
      </div>
    )
  }
}

export default Card;