// Vendor dependencies
import React from 'react';
import styled from 'styled-components';

// Custom dependencies
import FriendList from './components/friendList'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Who would you like to meet with?</h1>
        <FriendList />
      </div>
    );
  }
}

export default App;
