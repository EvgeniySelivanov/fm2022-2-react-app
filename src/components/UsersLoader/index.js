import React, { Component } from 'react';
import Error404 from '../Error404';
import Spinner from '../Spinner';
// import PropTypes from 'prop-types';
import { getUsers } from './../../api/index';
import { apiConfig } from '../../configs/index';
import styles from './UsersLoader.module.scss';
import UsersBox from './UsersBox';
import NationalityBox from './NationalityBox';
import AmountBox from './AmountBox';

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
      <AmountBox currentResults={currentResults} resultHandler={this.resultHandler} users={users}/>
      <NationalityBox currentNat={currentNat} natHandler={this.natHandler} users={users}/>
      <UsersBox users={users}/>
      <div className={styles.buttons}>
        <button onClick={this.prevPage}>&#8698; prev</button>
        <strong> {currentPage} </strong>
        <button onClick={this.nextPage}>next &#10228;</button>
      </div>
    </section>
  }
}
export default UsersLoader;
