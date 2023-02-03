import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../Spinner/index';
import Error404 from '../Error404/index';

class DataLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      isPending: false
    }
  }
  load = () => {
    const { loadData } = this.props;
    this.setState({ isPending: true });
    loadData()
      .then((data) => this.setState({ data: data, isPending: false }))
      .catch((error) => this.setState({ error: error, isPending: false }))
      .finally(() => this.setState({ isPending: false }));
  }

  componentDidMount() {
    this.load();
  }
  render() {
    const {children}=this.props;
    const{error,isPending}=this.state;
    if(isPending){return <Spinner/>}
    if(error){return <Error404/>}


    return children(this.state);
  }
}
export default DataLoader;

DataLoader.propTypes={
  loadData:PropTypes.func.isRequired,
  // render:PropTypes.func.isRequired

}