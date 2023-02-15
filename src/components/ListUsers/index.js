import React from 'react';
import {loadUsers} from '../../api';
import {useLoadData} from '../../hooks';
import Error404 from '../Error404';
import Spinner from '../Spinner';


const ListUsers = () => {
  const{data:users,error, isPending}=useLoadData(loadUsers);
  const mapUsers = (user) => <li key={user.id}>{user.name}</li>;


  if(isPending){return <Spinner/>}
    if(error){return <Error404/>}
  return (
    <ol>
      {
        users.map(mapUsers)
      }
    </ol>
  );
}

export default ListUsers;
