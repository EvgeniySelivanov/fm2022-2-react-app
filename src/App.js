import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserContext } from './contexts';
import UserProfile from './components/UserProfile/index';


function App() {
  const [user, setUser] = useState({
    id: 1,
    name: 'Ivan Petrov'
  })

  
  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<UserProfile/>}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>

    </>
  )
}
export default App;
