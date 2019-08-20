// Vendor dependencies
import React from 'react';
import styled from 'styled-components';

class FriendList extends React.Component {
  constructor() {
    super();
    this.state = {
      friendList: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/friendlist')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(
        friendList => {
          this.setState({friendList});
        }, 
        error => console.error('Friend list not fetched fetched...', error)); 
  }

  render() {
    return (
      <div>
        <h2>Friend's Calendar List</h2>
        <ul>
          {this.state.friendList.map(friend => 
            <li key={ friend.id }> { friend.firstName }</li>
          )}
        </ul>
      </div>
    );
  }
}

export default FriendList;