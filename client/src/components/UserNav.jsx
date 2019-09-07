import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const UserNav = (props) => {
    return (
        <div>
            <section float="left" width="10%" margin="0 1.5%">
            <p>USERNAME</p>
            <Nav vertical>
                <NavLink href="#">Login</NavLink> 
                <NavLink href="#">Sign-up</NavLink>
            </Nav>
            </section>
        </div>
    );
}

export default UserNav;
