import React from 'react';
import PropTypes from 'prop-types';
const FlexContainer = (props) => {
  
  const{justContent,alignItem,flexDir,flexWrap,children,style,...restProps}=props;
  const inlineStyles=
  {...style,
    display:'flex',
    justifyContent:justContent,
    alignItems:alignItem,
    flexDirection:flexDir,
    flexWrap:flexWrap
  };
  return (
    <div style={inlineStyles} {...restProps}>
      {children}
    </div>
  );
};

FlexContainer.defaultProps = {
  justContent: 'start',
  alignItem:'center',
  flexDir:'row',
  flexWrap:'nowrap'
};
FlexContainer.propTypes = {
  justContent: PropTypes.string,
  alignItem:PropTypes.string,
  flexDir:PropTypes.string,
  flexWrap:PropTypes.string
};


export default FlexContainer;
