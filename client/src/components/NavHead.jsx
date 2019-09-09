import React from 'react';
import PropTypes from 'prop-types';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Col,
    Button
    } from 'reactstrap';
    // commit

const NavHead = (props) => {

    return (
        <Navbar backgroundcolor="#00CC00">
            <img src={require('./../../images/hardHat.jpg')} width='10%' />
            <NavbarBrand href="/" style={{color: "white"}}>reConstruct</NavbarBrand>
            <Nav navbar>
                <NavItem>
                    <Button>POST</Button>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavHead;