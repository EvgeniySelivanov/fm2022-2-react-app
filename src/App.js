import './App.css';
// import CiaoSection from './components/CiaoSection';
import { Component } from 'react';
// import UserSection from './components/UserSection/index';
// import UserCard from './components/UserSection/UserCard/index';
// import UserList from './components/UserSection/UserList/index';
import StopWatch from './components/StopWatch/index';
// import Ciao from './components/CiaoSection/Ciao';
// import MyStopWatch from './components/MyStopWatch';
// import SignInForm from './components/forms/SignInForm';

// const username = {
//   id:1,
//   firstName: 'Brad',
//   lastName: 'Pitt',
//   isSelectede:false
// }
// const users=[username];
class App extends Component {

  render() {
    return <>
    <StopWatch />
      {/* 
      <MyStopWatch/>
      */}
      {/* <SignInForm/> */}
      {/* <Ciao username={username.firstName} />
      <UserCard user={username}/>
      <UserList users={users}/> */}
    </>;
  }

}

export default App;
