import React, { Component } from 'react';
import styles from './../UsersLoader.module.scss';
const natList = ['au', 'br', 'ca', 'gb', 'de', 'fr'];
class NationalityBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNat: props.currentNat,
      natHandler: props.natHandler,
     

    }
  }
  render() {
    const {currentNat, natHandler } = this.state;

    return (
      <div className={styles.national}>
        <h2>Nationality: </h2>
        <select name="nat" onChange={natHandler} value={currentNat}>
          {natList.map((country) => <option key={country} value={country}>{country.toUpperCase()}</option>)}
        </select>
      </div>
    );
  }
}

export default NationalityBox;
