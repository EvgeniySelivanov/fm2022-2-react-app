import React, { Component } from 'react';

class CiaoSorted extends Component {
  
  render() {
    const {isDirectionById ,isDirectionByName,sortUsersById,sortUsersByNames }=this.props;
    return (
      <p>
          <button onClick={sortUsersByNames}>sort by names {isDirectionByName ? 'right' : 'reverse'}</button>

          <button onClick={sortUsersById}>sort by id {isDirectionById ? 'right' : 'reverse'}</button>
        </p>
    );
  }
}

export default CiaoSorted;
