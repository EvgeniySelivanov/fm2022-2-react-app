import React from 'react';
import PropTypes from 'prop-types';

import UserCard,{userPropTypeShape} from '../UserCard';

function UserList(props) {
  const mapUsers = (user) => <UserCard key={user.id} user={user} userSelect={props.userSelect} />;
  const { users } = props;
  return (
    <section>
      <h2>Users list</h2>
      {users.map(mapUsers)}
    </section>
  );
}
UserList.defaultProps = {
  users: [],
}
UserList.propTypes = {
  users: PropTypes.arrayOf(userPropTypeShape).isRequired,
}
export default UserList;
