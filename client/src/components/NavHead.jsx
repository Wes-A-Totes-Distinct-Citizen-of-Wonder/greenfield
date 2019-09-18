import React from 'react';
import PropTypes from 'prop-types';
import { 
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Button
    } from 'reactstrap';
    
    // commit
// handles the top page navigation
//showsw the home button, and the create post button as well as the logo ---- custom made by Bradley Ledet(my roommate) ;)
const NavHead = (props) => {
    const { changeView } = props;
    return (
      <Navbar backgroundcolor="#00CC00">
        <img src={require('./../../images/reConstructIcon.png')} href="#" onClick={() => { changeView('home') }} width='20%' />
        <Nav navbar>
          <NavItem>
            <Button href="#" onClick={() => { changeView('home') }}>Home</Button>
            <Button onClick={() => { changeView('create-post') }}>Post</Button>
          </NavItem>
        </Nav>
      </Navbar>
    );
}
export default NavHead;