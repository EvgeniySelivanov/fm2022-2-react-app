import './App.css';
// import CiaoSection from './components/CiaoSection';
import { Component } from 'react';
// import UserSection from './components/UserSection/index';
// import StopWatch from './components/StopWatch/index';
// import Ciao from './components/CiaoSection/Ciao';
// import MyStopWatch from './components/MyStopWatch';
import SignInForm from './components/forms/SignInForm';

class App extends Component {
 

  render() {
    return <>
      {/* <StopWatch />
      <MyStopWatch/>
      <Ciao username={'Vasya'} /> */}
      <SignInForm/>
    </>;
  }

}

export default App;
