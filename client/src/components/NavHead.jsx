import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, NavbarBrand, Nav, NavItem,
  Button, Collapse, NavLink, NavbarToggler,
} from 'reactstrap';

import { title, navbar } from '../../src/components/Style.jsx';

export default class NavHead extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { changeView } = this.props;

    return (
      <Navbar style={navbar} dark expand="lg" fixed='top'>
        <NavbarBrand href="/">
          <img style={title} src={require('./../../images/reconstruct.png')} onClick={() => { changeView('home') }} />
        </NavbarBrand>

        <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
              <NavLink onClick={() => { changeView('home') }}><i class="fas fa-home"> Home</i></NavLink>
              </NavItem>

              <NavItem>
              <NavLink onClick={() => { changeView('messages') }}><i class="fas fa-envelope"> Messages</i></NavLink>
              </NavItem>

              <NavItem>
              <NavLink onClick={() => { changeView('create-post') }}><i class="fas fa-user"> Profile</i></NavLink>
              </NavItem>
            
            </Nav>
          </Collapse>
        </Navbar>
      );
  }
}
