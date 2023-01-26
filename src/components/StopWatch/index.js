import React, { Component } from 'react';
import { format,addSeconds,add } from 'date-fns';
import styles from './Stopwatch.module.css';
class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //count: 0,
      time: new Date(0, 0, 0, 0, 0, 0, 0)
    };
    this.intervalId = null;
    // console.log('constructor');
  }

  tick = () => {
    this.setState((state, props) => {
      // const { time } = state;
      return {time:addSeconds(state.time,1)};
      // const newTime = new Date(time);
      // newTime.setSeconds(newTime.getSeconds() + 1);
      // return { time: newTime };
    });
  };
  start = () => {
    if (this.intervalId === null) {
      this.intervalId = setInterval(this.tick, 1000)
    }
  };
  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;

  };
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };
  componentDidMount() {
    //для побочных эффектов
    // this.start();
  };
  componentDidUpdate() {
  };
  componentWillUnmount() {
    //для очистки побочных эффектов
    this.stop();
  };
  render() {
    // console.log('render');
    const { time } = this.state;
    return (
      <article className={styles.container}>
        <h2>{format(time,'HH:mm:ss')}</h2>
        <h2>count: {time.toLocaleTimeString("en-GB")}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </article>
    );
  }
}

export default StopWatch;
