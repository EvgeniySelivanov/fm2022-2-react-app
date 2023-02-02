import React from 'react';
import styles from './../UsersLoader.module.scss';

const ButtonBox = (props) => {

 const {currentPage,prevPage,nextPage}=props;
  return (
    <div className={styles.buttons}>
    <button onClick={prevPage}>&#8698; prev</button>
    <strong> {currentPage} </strong>
    <button onClick={nextPage}>next &#10228;</button>
  </div>
  );
}

export default ButtonBox;
