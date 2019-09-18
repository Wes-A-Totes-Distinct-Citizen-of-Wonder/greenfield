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
        <Navbar>
            <img src={require('./../../images/reConstructIcon.png')} width='50%' />
            <Nav navbar>
                <NavItem>
                    <Button onClick={() => {changeView('create-post')}}>Post</Button>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavHead;