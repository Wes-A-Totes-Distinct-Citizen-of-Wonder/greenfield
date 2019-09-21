import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { pageHeader } from './Style.jsx';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
 
  }

  render(){

    return (
      <div><center>
        <div style={pageHeader}><h2>Settings</h2></div>
        
      </center>
      </div>
    );
  }
}

export default Settings;