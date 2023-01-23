
import './App.css';

// import CiaoSection from './components/CiaoSection';
import { Component } from 'react';
// import UserSection from './components/UserSection/index';
import Stopwatch from './components/Stopwatch/index';
import Ciao from './components/CiaoSection/Ciao';
import MyStopWatch from './components/MyStopWatch';

class App extends Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return <>
      <Stopwatch />
      <MyStopWatch/>
      <Ciao username={'Vasya'} />
    </>;
  }

}

export default App;
