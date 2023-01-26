import React  from 'react';
import {UserDefault} from '../UserCard';
import Ciao from '../Ciao';

function CiaoList(props){
 
 const mapUsers =
    ({ firstName, lastName, id }) => (
      <Ciao key={id} username={`${id}: ${firstName} ${lastName}`} />);
  
    const {users}=props;
    return (
      <section>
      {users.map(mapUsers)}
    </section>
    );
  }
  CiaoList.defaultProps = {
    users:{id: null, firstName: 'Dart', lastName: 'Veider',},
    
  };

  // PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   firstName: PropTypes.string.isRequired,
  //   isSelected: PropTypes.bool,
  // })
  // CiaoList.propTypes = {
  //   user: userPropTypeShape.isRequired,
  //   userSelect: PropTypes.func,
  // };
export default CiaoList;
