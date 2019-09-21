import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, NavbarBrand, Nav, NavItem,
  Button, Collapse, NavLink, NavbarToggler,
  UncontrolledDropdown, DropdownToggle, DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { title, navbar, black } from '../../src/components/Style.jsx';

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
    const { changeView, user, logout } = this.props;

    return (
      <Navbar style={navbar} dark expand="lg" fixed='top'>
        <NavbarBrand href="/">
          <img style={title} src={require('./../../images/reconstruct.png')} onClick={() => { changeView('post-view') }} />
        </NavbarBrand>

        <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
              <NavLink onClick={() => { changeView('default') }}><i class="fas fa-home"></i> Home</NavLink>
              </NavItem>

              <NavItem>
                {user.username === 'guest' ? null : <NavLink onClick={() => { changeView('create-post') }}><i class="fas fa-plus-square"></i> New Post</NavLink>}
              </NavItem>

              <NavItem>
              {user.username === 'guest' ? null : <NavLink onClick={() => { changeView('inbox') }}><i class="fas fa-envelope"></i> Messages</NavLink>}
              </NavItem>

              <NavItem>
              {user.username === 'guest' ? <NavLink href="#" onClick={() => changeView('sign-up')}><i class="fas fa-signature"></i> Sign Up</NavLink> : null}
              </NavItem>

              <NavItem>
              {user.username === 'guest' ? <NavLink href="#" onClick={() => changeView('login')}><i class="fas fa-sign-in-alt"></i> Login</NavLink> : null }
              </NavItem>

              {user.username === 'guest' ? null :
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  <i class="fas fa-user"></i> {user.username}
                  </DropdownToggle>
              
                  <DropdownMenu right>
                    <DropdownItem>
                    <NavLink style={black} onClick={() => { changeView('myPosts') }}><i class="fas fa-file"></i> My Posts</NavLink>
                    </DropdownItem>

                    <hr />

                  <DropdownItem>
                    <NavLink style={black} onClick={() => { changeView('settings') }}><i class="fas fa-cog"></i> Settings</NavLink>
                  </DropdownItem>

                  <DropdownItem>
                    <NavLink style={black} href='/' onClick={() => logout()}><i class="fas fa-sign-out-alt"></i> Log Out</NavLink>
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>
            }
            
            </Nav>
          </Collapse>
        </Navbar>
      );
  }
}