import React from 'react';
import SearchTag from './SearchTag.jsx';
import { Nav, NavItem, NavLink } from 'reactstrap';


const UserNav = (props) => {
    const { changeView } = props;
    const { user } = props;
    return (
        <div>
            <section float="left" width="10%" margin="0 1.5%">
            <Nav vertical>
                <NavLink className="Username" style={{color: 'white', size: '5em'}}>{user.username || ""}</NavLink>
                <NavLink className="Login" href="#" style={{color: 'white'}} onClick={() => changeView('login')}>Login</NavLink> 
                <NavLink className="Sign-up" href="#" style={{color: 'white'}} onClick={() => changeView('sign-up')}>Sign-up</NavLink>
                <NavLink className='Sign-Out' href='/' style={{color: 'white'}} onClick={() => alert('you have signed out')} >Sign-out</NavLink>
                {/* <SearchTag /> */}
            </Nav>
            </section>
        </div>
    );
}


export default UserNav;
