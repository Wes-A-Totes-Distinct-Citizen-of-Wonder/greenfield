import React from 'react';
import SearchTag from './SearchTag.jsx';
import { Nav, NavItem, NavLink } from 'reactstrap';


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
    const { user } = props;
    return (
        <div>
            <section float="left" width="10%" margin="0 1.5%">
            <Nav vertical>
                <NavLink className="Username" href="#" style={{color: 'white'}} onClick={() => changeView('user-profile')}><h2>{user.username || ""}</h2></NavLink>
                <NavLink className="Login" href="#" style={{color: 'white'}} onClick={() => changeView('login')}>Login</NavLink> 
                <NavLink className="Sign-up" href="#" style={{color: 'white'}} onClick={() => changeView('sign-up')}>Sign-up</NavLink>
                {/* <SearchTag /> */}
            </Nav>
            </section>
        </div>
    );
}


export default UserNav;
