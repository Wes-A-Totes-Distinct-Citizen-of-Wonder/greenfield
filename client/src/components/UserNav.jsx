import React from 'react';
import MessagesList from './messages/MessagesList.jsx'
import { Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { black } from './Style.jsx';

// the navigation on the left side of the page, handles the positioning og login, logout, signup and user that is logged in
const UserNav = (props) => {
    const { changeView } = props;
    const { user } = props;
    const { logout } = props;
    return (
        <div>
            <section float="left" width="10%" margin="0 1.5%">
            <Nav vertical>
                {user.username === 'guest' ? null : <h2><NavLink className="Username" href="#" style={black}>{user.username || ""}</NavLink></h2> }
                {user.username === 'guest' ? null : <NavLink className="CreatePost" href="#" style={black} onClick={() => changeView('create-post')}>Create Post</NavLink> } 
                {user.username === 'guest' ? <NavLink className="Login" href="#" style={black} onClick={() => changeView('login')}>Login</NavLink> : null } 
                {user.username === 'guest' ? <NavLink className="Sign-up" href="#" style={black} onClick={() => changeView('sign-up')}>Sign Up</NavLink> : null }
                {user.username === 'guest' ? null: <NavLink className='LogOut' href='/' style={black} onClick={() => logout()} >LogOut</NavLink> }
            </Nav>
            </section>
        </div>
    );
}

export default UserNav;
