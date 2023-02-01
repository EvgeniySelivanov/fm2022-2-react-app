import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageWrapper.module.scss';


const ImageWrapper = (props) => {
  const {children,height,width}=props;
  const inlineStyle={
    height:height,
    width:width}
  return (
    <div style={inlineStyle} className={style.wrapper}> 
      {children}
    </div>
  );
};


ImageWrapper.propTypes = {
children:PropTypes.element.isRequired
};


export default ImageWrapper;
