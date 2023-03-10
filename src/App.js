import React, { useReducer, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MenuOpen } from '@mui/icons-material';
import FuncHeader from './components/FuncHeader';
import HomePage from './pages/HomePage';
import { UserContext, ThemeContext, MenuContext } from './contexts';
import CONSTANTS from './constants';
// import { useClicker } from './hooks';
import SignUpForm from './components/forms/SignUpForm';
import Chat from './components/Chat';
import NavMenu from './components/NavMenu';
import TodoReducer from './components/TodoReducer';
import TodoUseState from './components/TodoUseState';
const { THEMES } = CONSTANTS;


const reducer = (state, action) => {
  switch (action.type) {
    case 'MENU_OPEN': {
      return {
        ...state,
        isMenuOpen: true
      };
    }
    case 'MENU_CLOSE': {
    return{
      ...state,
      isMenuOpen: false
    }  
    }
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { isMenuOpen: false });
  const [user, setUser] = useState({
    id: 1,
    name: 'Ivan Petrov'
  });
  const [theme, setTheme] = useState(THEMES.LIGHT);
  // const count = useClicker(300);
const openMenu=(event)=>{
  event.stopPropagation();
  return dispatch({type:'MENU_OPEN'});
}
const closeMenu=()=>{
  return dispatch({type:'MENU_CLOSE'});
}

  return (
    <MenuContext.Provider value={[state,closeMenu]}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <UserContext.Provider value={[user, setUser]}>
          <BrowserRouter>
            <MenuOpen onClick={openMenu}/>
            <NavMenu />
            <FuncHeader />
            {/* <h2>Count clicker= {count}</h2> */}
          
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/sign-up' element={<SignUpForm />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/todo-1' element={<TodoReducer />} />
              <Route path='/todo-2' element={<TodoUseState />} />


            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeContext.Provider>
      </MenuContext.Provider>
     


   
  )
}
export default App;
