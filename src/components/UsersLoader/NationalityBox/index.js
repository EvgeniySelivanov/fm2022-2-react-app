import React, { Component } from 'react';
import styles from './../UsersLoader.module.scss';
const natList = ['au', 'br', 'ca', 'gb', 'de', 'fr'];
class NationalityBox extends Component {
  render() {
    const {currentNat, natHandler } = this.props;
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
