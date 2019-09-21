import React from 'react';
import SearchTag from './SearchTag.jsx';

const UserNav = (props) => {
    return (
      <section>
        <SearchTag searchByTag={props.searchByTag} searchByZip={props.searchByZip} />
      </section>
    );
}

export default UserNav;
