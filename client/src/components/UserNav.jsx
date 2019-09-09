import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

class UserNav extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }

    }
        // userLogin(username, password) {

        // }
    render() {
    return (
        <div>
            <section float="left" width="10%" margin="0 1.5%">
            <p>USERNAME</p>
            <Nav vertical>
                <NavLink className="Login" href="#">Login</NavLink> 
                <NavLink className="Sign-up"href="#">Sign-up</NavLink>
            </Nav>
            </section>
        </div>
    );
}
}

export default UserNav;
