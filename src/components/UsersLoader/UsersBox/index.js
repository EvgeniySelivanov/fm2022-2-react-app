import React from 'react';
import styles from './../UsersLoader.module.scss';


const UsersBox = (props) => {
  const { users } = props;


 function mapUsers({ gender, name, nat, login }){
 return  <article key={login.uuid}>
  <h3>
    {name.first} {name.last}
  </h3>
  <p>nat: {nat}</p>
  <p>gender: {gender}</p>
</article>}
  

  return (
    <div className={styles.users}>
      <h2>Users: </h2>
      {users.map(mapUsers)}
    </div>
  );
}

export default UsersBox;
