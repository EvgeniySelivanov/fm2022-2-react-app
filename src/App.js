import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import WindowSize from './components/WindowSize';
import SignInForm from './components/forms/SignInForm/index';
import StopWatch from './components/StopWatch/index';
import Error404 from './components/Error404/index';
import Dashboard from './pages/Dashboard';
import UsersLoader from './components/UsersLoader/index';


function App(props) {
  return (

    <BrowserRouter>
      <nav>
        <ul>
        
          <li><NavLink to='/'>WindowSize</NavLink></li>
          <li ><NavLink to='/users-loader' className='usersLoaderLink'>UsersLoader (home work)</NavLink></li>
          <li><NavLink to='/sign-in-form'>SignInForm</NavLink></li>
          <li><NavLink to='/stop-watch'>Stopwatch</NavLink></li>
          <li><NavLink to='/dashboard'>Dashboard</NavLink>
            <ul>
              <li><NavLink to='/dashboard/messages'>Messages</NavLink></li>
              <li><NavLink to='/dashboard/tasks'>Tasks</NavLink></li>
              <li><NavLink to='/dashboard/users'>Users</NavLink></li>
            </ul>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<WindowSize />} />
        <Route path='/users-loader' element={<UsersLoader />} />
        <Route path='/sign-in-form' element={<SignInForm />} />
        <Route path='/stop-watch' element={<StopWatch />} />
        <Route path='/dashboard/' element={<Dashboard />}>
          <Route path="messages" element={<h2>messages</h2>} />
          <Route path="tasks" element={<h2>tasks</h2>} />
          <Route path="users" element={<h2>users</h2>} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>


      <footer>
        <nav>
          <ul>
            <li><NavLink to='/'>WindowSize</NavLink></li>
            <li><NavLink to='/sign-in-form'>SignInForm</NavLink></li>
            <li><NavLink to='/stop-watch'>Stopwatch</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink>
              <ul>
                <li><NavLink to='/dashboard/messages'>Messages</NavLink></li>
                <li><NavLink to='/dashboard/tasks'>Tasks</NavLink></li>
                <li><NavLink to='/dashboard/users'>Users</NavLink></li>
              </ul>
            </li>
          </ul>
        </nav>
      </footer>
    </BrowserRouter>

  );
}



export default App;
