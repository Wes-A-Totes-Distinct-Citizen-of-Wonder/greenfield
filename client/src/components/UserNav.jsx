import React from 'react';
import SearchTag from './SearchTag.jsx';
import { Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';


const UserNav = (props) => {
    const { changeView } = props;
    const { user } = props;
    return (
        <div>
            <section float="left" width="10%" margin="0 1.5%">
            <Nav vertical>
                <h2><NavLink className="Username" href="#" style={{color: 'white', size: '10em'}}>{user.username || ""}</NavLink></h2>
                <NavLink className="Login" href="#" style={{color: 'white'}} onClick={() => changeView('login')}>Login</NavLink> 
                <NavLink className="Sign-up" href="#" style={{color: 'white'}} onClick={() => changeView('sign-up')}>Sign-up</NavLink>
            </Nav>
            </section>
        </div>
    );
}


export default UserNav;
