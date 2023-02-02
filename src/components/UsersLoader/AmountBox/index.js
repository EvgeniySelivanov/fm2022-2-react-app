import React, { Component } from 'react';
import styles from './../UsersLoader.module.scss';
const amountList = ['3', '5', '7', '9', '11', '15'];
class AmountBox extends Component {

  render() {
    const { currentResults, resultHandler } = this.props;

    return (
      <div className={styles.amount}>
        <h2>Amount: </h2>
        {amountList.map((quantity)=><label key={quantity}><input onChange={resultHandler} name="results" type="radio" value={quantity}
         checked={currentResults === quantity} />{quantity}</label>)}
              </div>
    );
  }
}

export default AmountBox;