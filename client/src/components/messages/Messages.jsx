import React from 'react';
import { BrowserRouter } from 'react-router-dom';

class Messages extends React.Component {
  render() {
    return (
  <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>;

    )
  }
}