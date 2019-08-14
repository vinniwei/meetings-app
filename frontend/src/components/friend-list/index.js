// Vendor dependencies
import React from 'react';
import styled from 'styled-components';

class FriendList extends React.Component {
  constructor() {
    super();
    this.state = {
      friend_list: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/friendlist')
      .then(res => res.json())
      .then(friend_list => this.setState({friend_list}), () => console.log('Friend list fetched...')); 
  }

  render() {
    return (
      <div>
        <h2>Friend's Calendar List</h2>
      </div>
    );
  }
}

export default FriendList;