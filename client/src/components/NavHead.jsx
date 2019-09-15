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

const NavHead = (props) => {
    const { changeView } = props;
    return (
        <Navbar backgroundcolor="#00CC00">
            <NavbarBrand href="#" style={{color: "white"}} onClick={() => {changeView('home')}}>Home</NavbarBrand>
            <img src={require('./../../images/reConstructIcon.png')} width='20%' />
            <Nav navbar>
                <NavItem>
                    <Button onClick={() => {changeView('create-post')}}>Post</Button>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavHead;