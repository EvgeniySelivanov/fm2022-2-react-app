import React, { Component } from 'react';

import DataLoader from '../components/DataLoader/index';
import { loadPhones } from '../api/index';



class LoaderPage extends Component {
  render() {
    return (
   
  
    <DataLoader  loadData={loadPhones} >
      {(state)=>(<ul>{state.data.map((phone)=><li key={phone.id}>{phone.name} {phone.brand}</li>)}</ul>)}</DataLoader>

    );
  }
}

export default LoaderPage;
