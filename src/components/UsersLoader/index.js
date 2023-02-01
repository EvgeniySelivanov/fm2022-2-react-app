import React, { Component } from 'react';
import Error404 from '../Error404';
import Spinner from '../Spinner';
// import PropTypes from 'prop-types';
import { getUsers } from './../../api/index';
import { apiConfig } from '../../configs/index';
import styles from './UsersLoader.module.scss';

class UsersLoader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [], //fullfilled(data)
      error: null,  // reject(error)
      isPending: true, //pending
      currentPage: 1,
      currentResults: String(apiConfig.DEFAULT_AMOUNT),
      currentNat: apiConfig.DEFAULT_NAT
    }
  }

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState((state, props) => ({
        currentPage: state.currentPage - 1
      }))
    }
  }

  nextPage = () => {
    this.setState((state, props) => ({
      currentPage: state.currentPage + 1
    }))

  }

  load = () => {
    const { currentPage: page, currentResults: results, currentNat: nat } = this.state;
    getUsers({ page, results, nat })
      .then((data) => {
        if (data.error) {
          return this.setState({ error: data })
        }
        return this.setState({ users: data.results, error: null });
      })
      .catch((error) => this.setState({
        error: error,
        isPending: false
      })
      )
      .finally(() => this.setState({
        isPending: false,
      })
      );
  }

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    //исключаем рекурсию
    if (prevState.currentPage !== this.state.currentPage || prevState.currentResults !== this.state.currentResults
       || prevState.currentNat !== this.state.currentNat) {
      this.load();
    }

  }

  mapUsers = ({ gender, name, nat, login }) =>
  (<article key={login.uuid}>
    <h3>
      {name.first} {name.last}
    </h3>
    <p>nat: {nat}</p>
    <p>gender: {gender}</p>
  </article>)
  resultHandler = ({ target: { value } }) => this.setState({ currentResults: value });
  natHandler = ({ target: { value } }) => this.setState({ currentNat: value });
  render() {
    const { users, error, isPending, currentPage, currentResults,currentNat } = this.state;
    if (isPending) {
      return (<Spinner />);
    }
    if (error) {
      return (
        <Error404 />
      );
    }
    return <section>
      <div className={styles.amount}>
        <h2>Amount: </h2>
        <label><input onChange={this.resultHandler} name="results" type="radio" value={3} checked={currentResults === '3'} />3</label>
        <label><input onChange={this.resultHandler} name="results" type="radio" value={5} checked={currentResults === '5'} />5</label>
        <label><input onChange={this.resultHandler} name="results" type="radio" value={10} checked={currentResults === '10'} />10</label>
      </div>

      <div className={styles.national}>
        <h2>Nationality: </h2>
        <select name="nat" onChange={this.natHandler} value={currentNat}>
          <option value={'gb'}>GB</option>
          <option value={'de'}>DE</option>
          <option value={'fr'}>FR</option>
        </select>
      </div>


      <div className={styles.users}>
        <h2>Users: </h2>
        {users.map(this.mapUsers)}
      </div>

      <div className={styles.buttons}>
        <button onClick={this.prevPage}>&#8698; prev</button>
        <strong> {currentPage} </strong>
        <button onClick={this.nextPage}>next &#10228;</button>
      </div>
    </section>
  }
}


// UsersLoader.propTypes = {

// };


export default UsersLoader;
