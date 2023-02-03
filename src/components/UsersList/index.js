import React from 'react';


const UsersList = (props) => {
  const {users}=this.props;
  return (
    <ul>
     <ol>{users.data.map((user) => <li key={user.id}>{user.name}</li>)}</ol>
    </ul>
  );
}

export default UsersList;
