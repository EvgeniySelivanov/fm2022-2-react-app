import React, { Component } from 'react';

class WindowSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      h: 0,
      w: 0
    }
  }
  hadlerSize = () => {
    this.setState({
      h: window.innerHeight,
      w: window.innerWidth
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.hadlerSize);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.hadlerSize);
  }
  render() {
    const { h, w } = this.state
    return (
      <p>
        height:{h} <br /> width: {w}
      </p>
    );
  }
}

export default WindowSize;
