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

    return (
        <Navbar backgroundcolor="#00CC00">
            <NavbarBrand href="/" style={{color: "white"}}>reConstruct</NavbarBrand>
            <img href="/" src={require('./../../images/reConstructIcon.png')} width='20%' />
            <Nav navbar>
                <NavItem>
                    <Button>POST</Button>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavHead;