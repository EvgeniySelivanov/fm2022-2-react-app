import React, { Component } from 'react';
import styles from './MyStopWatch.module.css';

class MyStopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0)
    };
    this.intervalId = null;
  }
  tick = () => {
    this.setState((state, props) => {
      const { time } = this.state;
      const newTime = new Date(time);
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime };
    });
  };
  start = () => {
    if (this.intervalId === null) {
      this.intervalId = setTimeout(this.tick, 0);
    }
  };
  stop = () => {
    clearTimeout(this.intervalId);
    this.intervalId = null;
    

  };

  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };
  componentDidMount() {

  };
  componentDidUpdate() {
 
    if (this.intervalId !== null) {
      this.intervalId= setTimeout(this.tick, 1000);
    }

  };
  componentWillUnmount() {
    this.stop();
  };
  render() {
    const { time } = this.state;
    return (
      <section className={styles.container}>
        <strong>MyStopWatch</strong>
        <article className={styles.container}>
          <h2>count: {time.toLocaleTimeString("en-GB")}</h2>
          <button onClick={this.start}>start</button>
          <button onClick={this.stop}>stop</button>
          <button onClick={this.reset}>reset</button>
        </article>
      </section>
    );
  }
}

export default MyStopWatch;
