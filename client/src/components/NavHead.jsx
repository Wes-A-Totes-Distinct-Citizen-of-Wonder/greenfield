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
          <img style={title} src={require('./../../images/reconstruct.png')} onClick={() => { changeView('home') }} />
        </NavbarBrand>

        <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
              <NavLink onClick={() => { changeView('home') }}><i class="fas fa-home"> Home</i></NavLink>
              </NavItem>

            <NavItem>
              {user.username === 'guest' ? null : <NavLink onClick={() => { changeView('create-post') }}><i class="fas fa-plus-square"></i> New Post</NavLink>}
            </NavItem>

              <NavItem>
              {user.username === 'guest' ? null : <NavLink onClick={() => { changeView('messagesList') }}><i class="fas fa-envelope"> Messages</i></NavLink>}
              </NavItem>

              <NavItem>
              {user.username === 'guest' ? <NavLink href="#" onClick={() => changeView('sign-up')}>Sign Up</NavLink> : null}
              </NavItem>

            <NavItem>
              {user.username === 'guest' ? <NavLink href="#" onClick={() => changeView('login')}>Login</NavLink> : null }
            </NavItem>

           
            {user.username === 'guest' ? null :
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <i class="fas fa-user"> {user.username}</i>
                </DropdownToggle>
              
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink style={black} onClick={() => { changeView('myPosts') }}>My Posts</NavLink>
                  </DropdownItem>

                <DropdownItem>
                    <NavLink style={black} href='/' onClick={() => logout()}>Log Out</NavLink>
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

// { user.username === 'guest' ? null : <h2><NavLink className="Username" href="#" style={black}>{user.username || ""}</NavLink></h2> }
// { user.username === 'guest' ? null : <NavLink className="CreatePost" href="#" style={black} onClick={() => changeView('create-post')}>Create Post</NavLink> }
// { user.username === 'guest' ? <NavLink className="Login" href="#" style={black} onClick={() => changeView('login')}>Login</NavLink> : null }
// { user.username === 'guest' ? <NavLink className="Sign-up" href="#" style={black} onClick={() => changeView('sign-up')}>Sign Up</NavLink> : null }
// { user.username === 'guest' ? null : <NavLink className='LogOut' href='/' style={black} onClick={() => logout()} >LogOut</NavLink> }