import React, { Component } from 'react';
import SelectedUserList from './SelectedUserList';
import UserList from './UserList';
const dbUsers = [
  {
    id: 4,
    firstName: 'PBrad1',
    lastName: 'Pitt',

  },
  {
    id: 5,
    firstName: 'ABrad2',
    lastName: 'Pitt',

  },
  {
    id: 3,
    firstName: 'RBrad3',
    lastName: 'Pitt',

  },
  {
    id: 1,
    firstName: 'TBrad4',
    lastName: 'Pitt',

  },
  {
    id: 2,
    firstName: 'UBrad5',
    lastName: 'Pitt',

  },
];

class UserSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: dbUsers.map((user) => ({ ...user, isSelected: false }))
    };
  }
  userSelect = (id) => {
    const { users } = this.state;
    this.setState({
      users: users.map((user) => ({ ...user, isSelected: user.id === id ? !user.isSelected : user.isSelected }))
    });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <SelectedUserList users={users} />
        <UserList users={users} userSelect={this.userSelect}/>
      </>
    );
  }
}

export default UserSection;
