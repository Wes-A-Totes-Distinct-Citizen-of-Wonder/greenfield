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
    Col
    } from 'reactstrap';

const NavHead = (props) => {
    return (
            <Navbar backgroundColor="#00CC00">
                <NavbarBrand href="/">Trash Panda</NavbarBrand>
            </Navbar>
    );
}

export default NavHead;