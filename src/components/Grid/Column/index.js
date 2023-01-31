import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.module.scss';


const Column = (props) => {
  const{children,colNum}=props;
  return (
    <div className={styles[`col-${colNum}`]}>
      {children}
    </div>
  );
};


Column.propTypes = {
children:PropTypes.element,
colNum:PropTypes.number.isRequired
};


export default Column;