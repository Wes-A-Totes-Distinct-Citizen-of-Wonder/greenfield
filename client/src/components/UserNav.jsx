import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { changeView } from './../index.jsx'

const UserNav = (props) => {
    // constructor (props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
    //     // userLogin(username, password) {
        
        //     // }
        // render() {
    const { changeView } = props;
    return (
        <div>
            <section float="left" width="10%" margin="0 1.5%">
            <p style={{color: 'white'}}>USERNAME</p>
            <Nav vertical>
                <NavLink className="Login" href="#" onClick={() => changeView('login')}>Login</NavLink> 
                <NavLink className="Sign-up"href="#" onClick={() => changeView('sign-up')}>Sign-up</NavLink>
            </Nav>
            </section>
        </div>
    );
}


export default UserNav;
