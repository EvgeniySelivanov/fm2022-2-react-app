import React, { Component } from 'react';
import CiaoList from './CiaoList';
import CiaoSorted from './CiaoSorted';

class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 4,
          firstName: 'PBrad1',
          lastName: 'Pitt',

        },
        {
          id: 5,
          firstName: 'ABrad2',
          lastName: 'Pitt',

        },
        {
          id: 3,
          firstName: 'RBrad3',
          lastName: 'Pitt',

        },
        {
          id: 1,
          firstName: 'TBrad4',
          lastName: 'Pitt',

        },
        {
          id: 2,
          firstName: 'UBrad5',
          lastName: 'Pitt',

        },
      ],
      isDirectionById: true,
      isDirectionByName: true,

    }
  }
  sortUsersByNames = () => {
    const { users, isDirectionByName } = this.state;
    const usersCopy = [...users];
    usersCopy.sort((current, next) => {
      if (current.firstName > next.firstName) {
        return isDirectionByName ? 1 : -1;
      }
      if (current.firstName < next.firstName) {
        return isDirectionByName ? -1 : 1;
      }
      return 0
    }

    );
    this.setState({ users: usersCopy, isDirectionByName: !isDirectionByName });
  }
  sortUsersById = () => {
    const { users, isDirectionById } = this.state;
    const usersCopy = [...users];
    usersCopy.sort((current, next) => {
      return isDirectionById ? current.id - next.id : next.id - current.id;
    })

    this.setState({ users: usersCopy, isDirectionById: !isDirectionById });
  }
  render() {
    const { users, isDirectionById, isDirectionByName } = this.state;
  
    return (
      <>
       <CiaoSorted isDirectionById={isDirectionById} isDirectionByName={isDirectionByName}  sortUsersByNames={this.sortUsersByNames}  sortUsersById={this.sortUsersById} />
        <CiaoList users={users}/>
      </>
    );
  }
}

export default CiaoSection;
