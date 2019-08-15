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
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(
        friend_list => {
          this.setState({friend_list});
        }, 
        error => console.error('Friend list fetched...', error)); 
  }

  render() {
    return (
      <div>
        <h2>Friend's Calendar List</h2>
        <ul>
          {this.state.friend_list.map(friend => 
            <li key={ friend.id }> { friend.first_name }</li>
          )}
        </ul>
      </div>
    );
  }
}

export default FriendList;